(
    function(){
        var module = angular.module('dynamicBehavior');
        
        var controller = function(model){
            model.title = 'Home View';
        }
        controller.$inject = ['$scope'];
        
        module.controller('homeController', controller);
    }()
)