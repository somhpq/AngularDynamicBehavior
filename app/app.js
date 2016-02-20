(
    function(){
        var module = angular.module('dynamicBehavior',['ui.router']);
        var state = function(state, router){
            router.otherwise('/home');
            
            state
            .state('home',{url: '/home', templateUrl: 'views/home.html', controller: 'homeController'})
            .state('pay',{url: '/pay', templateUrl: 'views/payment.html', controller: 'paymentController'})
            .state('reg',{url: '/reg', templateUrl: 'views/registration.html', controller: 'registrationController'});
        }
        state.$inject = ['$stateProvider', '$urlRouterProvider'];
        module.config(state);

    }()
)