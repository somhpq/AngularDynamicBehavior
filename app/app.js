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
        
//        var homeController = function(model, parse){
//        console.log('in controller');
            


//var getter = parse('user.name');
//var lolg = parse('user.log(user.name)');
//var setter = getter.assign;
//var locals = {user:{name:'local'}};
//
//var context = {
//    user:{
//        name:'angular'
//        ,log: function(x){
//            console.log(x);
//        }
//    }
//};
//
//console.log('- output - ' + getter(context));
//console.log('set ... ... ... ... ...');
//setter(context, 'newValue');
//console.log('- output - ' + getter(context));
//            
////console.log(context.user.name);
////console.log(getter(context, locals));
////console.log(getter(locals, context));
//            
//console.log('set directly ... ... ... ... ...');
//context.user.name = 'XXX';
//console.log('display from function');
//lolg(context);
            
////// - rules
////var rules = {
////    checkMaxLength10: function(str) {
////        var input = (str || {}).trim();
////        return input.length < 10;
////    }
////    ,checkMaxLength5: function(str) {
////        var input = (str || {}).trim();
////        return input.length < 5;
////    }
////};
//
////// - builder
////var check = {
////    firstName: 'checkMaxLength5(firstName) && checkMaxLength10(firstName)'
////    ,lastName: 'checkMaxLength5(lastName) && checkMaxLength10(lastName)'
////}
////var data = {
////    firstName: 'John'
////    ,lastName: '123456789'
////}
//
//// controller
//var controller1 = function(){
//    // setup builder
//    // - set validation rules (controller have to know what rules to validate)
//    // - set data             (controller have to know data)
//    
//}
//
//// directive
//var directive1 = function(){
//    // directive is to perform validation
//    // - directive has to know when to peform validation (only directive should access DOM)
//    
//}
//
//var validateFirstName = parse(check.firstName);
//var validateLastName = parse(check.lastName);
//var resultFirstName = validateFirstName(rules, data);
//var resultLastName = validateLastName(rules, data);
//console.log('Test first name (max 10) - ' + resultFirstName);
//console.log('Test last name (max 10) - ' + resultLastName);
//
//
//
//
//
//
//            
//    
//        };
//        homeController.$inject = ['$scope','$parse'];
//        module.controller('homeController', homeController);
        
        
        
        
        
    }()
)