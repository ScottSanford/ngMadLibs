angular.module("myApp",[
		'ngMessages'
	])

	.constant('VERSION', 2)
	.run(function(VERSION, $rootScope){
		$rootScope = VERSION;
	})

	.controller("madLibCtrl", function($scope){

		$scope.words = {
			name: '', 
			jobTitle: '', 
			tediousTask: '', 
			dirtyTask: '', 
			celebrity: '', 
			adjective: '', 
			hugeNum: ''
		};

		$scope.genderSelect = [
			{show: 'Pick the gender of your name...', bool: null},
			{show: 'Male', bool: false},
			{show: 'Female', bool: true}
			];
		
		$scope.current = $scope.genderSelect[0];

  		$scope.isFemale = true;

  		$scope.heShe = function(bool) {
            if ($scope.current.bool == true) {
                return "she";
            } else {
            	return "he";
            }
        };

        $scope.himHer = function(bool) {
            if ($scope.current.bool == true) {
                return "her";
            } else {
            	return "him";
            }
        };

		$scope.generateMadLib = false;

		$scope.submit = function(){
        	$scope.generateMadLib = true;
    	}

    	$scope.reset = function(){
	        $scope.words = {};
	        $scope.generateMadLib = false;
	        $scope.current = $scope.genderSelect[0];
	        $scope.madLibForm.$setPristine();
  		}

	});

	