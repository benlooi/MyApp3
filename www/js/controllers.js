angular.module('starter.controllers', [])

.controller('QuizCtrl', function($scope, QuizService,$state) {
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
  });
