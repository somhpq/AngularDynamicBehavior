(
    function(){
        var module = angular.module('dynamicBehavior');
        
        var controller = function(model, validationContext, validationBuilder){
            // init model
            model.title = 'Registration';
            model.form = {
                userName: ''
                ,password: ''
                ,firstName: ''
                ,lastName: ''
            };
            
            model.register = function(){
                model.formInfo = 'SUBMITTED - ' + JSON.stringify(model.form);
            };
            
            model.isEmpty = function(obj){
                return angular.equals(obj,{});
            };

            // setup validation
            validationBuilder
                .rules.username = [
                      {func: 'required', validityKey: 'required'}
                      ,{func: 'checkMaxLength5', validityKey: 'maxLength'}
                  ];
            validationBuilder
                .rules.password = [
                      {func: 'required', validityKey: 'required'}
                      ,{func: 'checkMaxLength5', validityKey: 'maxLength'}
                  ];
            validationBuilder
                .rules.firstname = [
                      {func: 'checkMinLength2', validityKey: 'minLength'}
                      ,{func: 'checkMaxLength5', validityKey: 'maxLength'}
                  ];
            validationBuilder
                .rules.lastname = [
                      {func: 'checkMinLength2', validityKey: 'minLength'}
                      ,{func: 'checkMaxLength10', validityKey: 'maxLength'}
                  ];
            
        }
        controller.$inject = ['$scope','validationContextService','validationBuilderService'];
        
        module.controller('registrationController', controller);
    }()
)