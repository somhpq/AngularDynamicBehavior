(
    function(){
        var module = angular.module('dynamicBehavior');


        // username
        var usernameDir = function(validator, validationCtx){
            var link = function(scope, elem, attrs, model) {
                var ruleFunctions = validationCtx.rules;
                var rules = validator.rules.username;   //
                var result = true;
                rules.forEach(function(rule){
                    var func = rule.func;
                    var key = rule.validityKey;
                    //console.log(rule);
                    
                    // set validation rules
                    model.$parsers.unshift(function(val) {
                        var valid = ruleFunctions[func](val);
                        model.$setValidity(key, valid);
                        //console.log('usernameDir-' + func + '>>>' + valid);
                        
                        return val;
                    });
                });
            };
            
            return {
                require: 'ngModel'
                ,restrict: 'A'
                ,link: link
            };
            
        };
        usernameDir.$inject = ['validationBuilderService', 'validationContextService'];
        module.directive('checkUsername', usernameDir);
        


        // firstname
        var firstnameDir = function(validator, validationCtx){
            var link = function(scope, elem, attrs, model) {
                var ruleFunctions = validationCtx.rules;
                var rules = validator.rules.firstname;  //
                var result = true;
                rules.forEach(function(rule){
                    var func = rule.func;
                    var key = rule.validityKey;
                    //console.log(rule);
                    
                    // set validation rules
                    model.$parsers.unshift(function(val) {
                        var valid = ruleFunctions[func](val);
                        model.$setValidity(key, valid);
                        //console.log('firstnameDir-' + func + '>>>' + valid);
                        
                        return val;
                    });
                });
            };
            return {
                require: 'ngModel'
                ,restrict: 'A'
                ,link: link
            };
        };
        firstnameDir.$inject = ['validationBuilderService', 'validationContextService'];
        module.directive('checkFirstname', firstnameDir);

        


        // lastname
        var lastnameDir = function(validator, validationCtx){
            var link = function(scope, elem, attrs, model) {
                var ruleFunctions = validationCtx.rules;
                var rules = validator.rules.lastname;   //
                var result = true;
                rules.forEach(function(rule){
                    var func = rule.func;
                    var key = rule.validityKey;
                    //console.log(rule);
                    
                    // set validation rules
                    model.$parsers.unshift(function(val) {
                        var valid = ruleFunctions[func](val);
                        model.$setValidity(key, valid);
                        //console.log('lastnameDir-' + func + '>>>' + valid);
                        
                        return val;
                    });
                });
            };
            return {
                require: 'ngModel'
                ,restrict: 'A'
                ,link: link
            };
        };
        lastnameDir.$inject = ['validationBuilderService', 'validationContextService'];
        module.directive('checkLastname', lastnameDir);

        


        // password
        var passwordDir = function(validator, validationCtx){
            var link = function(scope, elem, attrs, model) {
                var ruleFunctions = validationCtx.rules;
                var rules = validator.rules.password;       //

                rules.forEach(function(rule){
                    var func = rule.func;
                    var key = rule.validityKey;
                    //console.log(rule);
                    
                    // set validation rules
                    model.$parsers.unshift(function(val) {
                        var valid = ruleFunctions[func](val);
                        model.$setValidity(key, valid);
                        //console.log('passwordDir-' + func + '>>>' + valid);
                        
                        return val;
                    });
                });
            };
            return {
                require: 'ngModel'
                ,restrict: 'A'
                ,link: link
            };
        };
        passwordDir.$inject = ['validationBuilderService', 'validationContextService'];
        module.directive('checkPassword', passwordDir);
    }()
)