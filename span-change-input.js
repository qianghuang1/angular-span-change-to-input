app.directive('spanInputChange', function($compile) {
        function link(scope, element, attrs) {
        }
        return {
            templateUrl:'span_input_change.html',
            transclude: true,
            scope: {
                varngmodel: '=varmodel',
                afterngblur:'=jfBlur',
                show_input:'=showInput',
                no_empty:'=noEmpty',
                wstring:'=warningString'
            },
            controller:function($scope,$element,$attrs){
                $scope.blurCallback=function(){
                    if($scope.no_empty&&($scope.varngmodel==null||$scope.varngmodel.length<1)){
                        $scope.wstring='此项不能为空';
                        return;
                    }
                    $scope.show_input=false;
                    if($scope.varngmodel==null||$scope.varngmodel.length<1){
                        $scope.varngmodel='添加';
                    }
                    $scope.afterngblur(function(show_input){
                        $scope.show_input=show_input;
                    });
                }
            },
            link: link
        };
    });
