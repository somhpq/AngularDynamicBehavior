(
    function(){
        var module = angular.module('dynamicBehavior');
        
        var service = function(){
            // - builder
            var rules = {
                username:[]
                ,password:[]
                ,firstname:[]
                ,lastname:[]
            };
        
            return {
                rules: rules
            };
        }
        module.factory('validationBuilderService', service);
    }()
)