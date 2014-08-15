/**
 * Created by FORTIZ on 8/15/14.
 */

var avyDirectives = angular.module('avyDirectives',[]);

avyDirectives.directive = ('landing', function(){
    return{
        restrict: 'A',
        replace: true,
        templateUrl:'templates/landing.html'
    };
});
