/*
* author: Qiang Huang
*/
(function(angular) {
  'use strict';
  angular.module('ngSpanInput', [])
  .directive('spanChange', function($compile) {

            function link(scope, element, attrs) {

                element.one('click', function() {
                    element.after($compile("<input class='form-group modify-input' type='text' input-change='varngmodel' varmodel='varngmodel'  ng-model='varngmodel'>")(scope));
                    element.remove()
                })
            }

            return {
                transclude: true,
                scope: {
                    varngmodel: '=varmodel'
                },
                link: link
            };
        })

        .directive('inputChange', function($compile) {

                function link(scope, element, attrs) {

                    element.on('blur', function() {
                        element.after($compile("<span class='introduction text-warning' span-change='format' ng-bind='varngmodel'>vas</span>")(scope));
                        element.remove()
                    });
                }

                return {
                    transclude: true,
                    scope: {
                        varngmodel: '=varmodel'
                    },
                    link: link
                };
            });
  
})(window.angular);

