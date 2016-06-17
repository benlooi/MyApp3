angular.module('starter.controllers', [])

.controller('QuizCtrl', function($scope, QuizService,$state,$cordovaBarcodeScanner) {
  //$scope.answers={};

  $scope.counter=0;

  QuizService.getQuiz1().then(function (resp){
    $scope.Quiz1=resp;

  })
  $scope.checkAnswers= function () {
  	//this is to initialise the score for calculation
    var score=0;
    //this is to display the results page
  	$scope.counter++;

  	for (var i=0;i<$scope.Quiz1.length;i++){
  		if($scope.Quiz1[i].answer==$scope.Quiz1[i].myans){
  			score+=$scope.Quiz1[i].score;
  			console.log($scope.Quiz1[i].answer+"-"+$scope.Quiz1[i].myans);
  		}
  		console.log(score);
  		$scope.score=score;

  	}
  	
  }


  $scope.goBack = function (number) {
  	$scope.counter=number-1;
  }
  $scope.goNext = function (number) {
  	$scope.counter=number+1;
  }

  $scope.startAgain= function () {
    $scope.counter=0;

    for (var i=0;i<$scope.Quiz1.length;i++){

      $scope.Quiz1[i].myans=null;

    }
  	
  	

  }


///barcode scanner stuff
document.addEventListener("deviceready", function () {
$scope.scanBarcode=function () {
  $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        // Success! Barcode data is here
        $scope.barcode=barcodeData.text;
      }, function(error) {
        // An error occurred
      });

}
    

},false);

})


.controller('slidesCtrl',function ($scope,$ionicSlideBoxDelegate){
$scope.options = {
  loop: true,
  effect: 'fade',
  speed: 500,
}

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.activeIndex;
  $scope.previousIndex = data.previousIndex;
});

$scope.myslides = [
  {title:"Look Good",
  image:'dentist.jpg',
  text:"Our dentists are awesome."},

  {title:"Call us now.",
  image:'doctor.jpg',
  text:"Our doctors are awesome."},
  {title:"Enquire today.",
  image:'dentist.jpg',
  text:"Our doctors are really awesome."},
  {title:"Do it.",
  image:'doctor.jpg',
  text:"What are you waiting for?"},
]

})

.controller('Quiz2Ctrl',function ($scope){

  $scope.fruits = [
    {
      name:"Apple"
    },
    {
      name:"Orange"
    },
    {
      name:"Durian"
    },
    {
      name:"Chiku"
    }

  ]

  $scope.remove= function (position_in_fruits){
    $scope.fruits.splice(position_in_fruits,1);
  }

$scope.fruit={};
  $scope.add= function (fruit_to_add){
    var new_fruit_to_add=fruit_to_add;
    $scope.fruits.unshift(new_fruit_to_add);
    $scope.fruit=null;
  }
})
;
