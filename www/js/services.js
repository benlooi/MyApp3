angular.module('services',[])
.factory('QuizService', function ($http,$q){

	return {

		getQuiz1: function () {
			var deferred=$q.defer();

				$http.get("json/quiz1.json")

				.success(function(data){
				      
					deferred.resolve(data);
				})

				.error(function (err){
					deferred.reject(err);
				})
				return deferred.promise;

		} ,
		getQuiz2: function () {

		},
		getQuiz3: function () {

		}
	}

})