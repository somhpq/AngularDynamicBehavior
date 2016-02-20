(
    function(){
        var module = angular.module('dynamicBehavior');
        
        var service = function(){
            
                var
                // MAX
                checkMaxLength5 = function(str) {
                    var input = str;    //(str || '').trim();
                    //console.log('max5> ' + input);
                    return (input.length <= 5) ? true: false;
                }
                ,checkMaxLength7 = function(str) {
                    var input = str;    //(str || '').trim();
                    //console.log('max7> ' + input);
                    return (input.length <= 7) ? true: false;
                }
                ,checkMaxLength10 = function(str) {
                    var input = str;    //(str || '').trim();
                    //console.log('max10> ' + input);
                    return (input.length <= 10) ? true: false;
                }
                
                // MIN
                ,checkMinLength2 = function(str) {
                    var input = str;    //(str || '').trim();
                    //console.log('min2> ' + input);
                    return (input.length >= 2) ? true: false;
                }
                ,checkMinLength5 = function(str) {
                    var input = str;    //(str || '').trim();
                    //console.log('min5> ' + input);
                    return (input.length >= 5) ? true: false;
                }
                
                // REQUIRED
                ,required = function(str) {
                    var input = (str || '').trim();
                    //console.log('required> ' + input);
                    return (input.length > 0) ? true: false;
                };


             // - rules
            var output = {
                checkMaxLength5: checkMaxLength5
                ,checkMaxLength7: checkMaxLength7
                ,checkMaxLength10: checkMaxLength10
                ,checkMinLength2: checkMinLength2
                ,checkMinLength5: checkMinLength5
                ,required: required
            };

            return {
                rules: output                
            };
            
        };
        
        module.factory('validationContextService', service);
    }()
)