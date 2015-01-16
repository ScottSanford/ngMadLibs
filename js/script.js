angular.module("myApp",[])

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

		$scope.gender = new Gender(true);

	});

function Gender(isFemale) {
    	this.isFemale = isFemale;

    	this.himHer = function () {
        return this.isFemale ? "her" : "him";
    	}

   	    this.heShe = function () {
        return this.isFemale ? "she" : "he";
    	}

    	this.hisHer = function () {
        return this.isFemale ? "her" : "his";
    	}

}
	