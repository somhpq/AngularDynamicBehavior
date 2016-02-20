(
    function(){
        var module = angular.module('dynamicBehavior');
        
        var controller = function(model, validationContext, validationBuilder){
            // init model
            model.title = 'Payment';
            model.form = {
                firstName: ''
                ,lastName: ''
            };
            
            model.submit = function(){
                model.formInfo = 'SUBMITTED - ' + JSON.stringify(model.form);
            };
            
            model.isEmpty = function(obj){
                return angular.equals(obj,{});
            };

            // setup validation
            validationBuilder
                .rules.firstname = [
                      {func: 'checkMinLength2', validityKey: 'minLength'}
                      ,{func: 'checkMaxLength5', validityKey: 'maxLength'}
                  ];
            validationBuilder
                .rules.lastname = [
                      {func: 'required', validityKey: 'required'}
                      ,{func: 'checkMaxLength7', validityKey: 'maxLength'}
                  ];
        }
        controller.$inject = ['$scope','validationContextService','validationBuilderService'];
        
        module.controller('paymentController', controller);
    }()
)