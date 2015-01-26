angular.module("myApp",[
		'ngMessages', 
		'ngAnimate'
	])

	.constant('VERSION', 3)
	.run(function(VERSION, $rootScope){
		$rootScope = VERSION;
	})

	.controller("madLibCtrl", function($scope){

		$scope.initForm = function() {

	        $scope.words = {};
	        $scope.generateMadLib = false;
	        $scope.current = $scope.genderSelect[0];
	        $scope.madLibForm.$setPristine();

    	}

		$scope.words = {
			name: '', 
			jobTitle: '', 
			tediousTask: '', 
			dirtyTask: '', 
			celebrity: '', 
			uselessSkill: '',
			adjective: '', 
			hugeNum: ''
		};

		$scope.sampleData = function(event) {
			$scope.words = {
				name: 'Kelly', 
				jobTitle: 'Senior Software Engineer', 
				tediousTask: 'mowing the lawn', 
				dirtyTask: 'changing dirty diapers', 
				celebrity: 'Gregory McClendon', 
				uselessSkill: 'Ping Pong',
				adjective: 'sexy', 
				hugeNum: 100000
			};
			$scope.genderSelect[2];
		}

		$scope.genderSelect = [
			{show: 'Pick the gender of your name...', bool: null},
			{show: 'Male', bool: false},
			{show: 'Female', bool: true}
			];
		
		$scope.current = $scope.genderSelect[0];

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

        $scope.hisHer = function(bool) {
            if ($scope.current.bool == true) {
                return "her";
            } else {
            	return "his";
            }
        };

		$scope.generateMadLib = false;

		$scope.submit = function(){
			if ($scope.madLibForm.$valid) {
        		$scope.generateMadLib = true;
			}
    	}

    	$scope.reset = function(){
    		$scope.initForm();
  		}

	});

	