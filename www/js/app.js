// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
    .state('quiz', {
    url: '/quiz',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'QuizCtrl'
  })
  .state('quiz.slides', {
    url: '/slides',
     views: {
      'menuContent': {
    templateUrl: 'templates/slides.html',
        controller: 'slidesCtrl'
      }
    }
  })
    .state('quiz.welcome', {
    url: '/welcome',
    views: {
      'menuContent': {
        templateUrl: 'templates/welcome.html',
        controller: 'QuizCtrl'
      }
    }
  })

  .state('quiz.one', {
    url: '/one',
    views: {
      'menuContent': {
        templateUrl: 'templates/one.html',
        controller: 'QuizCtrl'
      }
    }
  })

  .state('quiz.two', {
      url: '/two',
      views: {
        'menuContent': {
          templateUrl: 'templates/two.html',
          controller: 'Quiz2Ctrl'
        }
      }
    })
    .state('quiz.three', {
      url: '/three',
      views: {
        'menuContent': {
          templateUrl: 'templates/three.html',
          controller: 'QuizCtrl'
        }
      }
    })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/quiz/welcome');
});
