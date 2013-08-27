/**
 * JBoss, Home of Professional Open Source
 * Copyright Red Hat, Inc., and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function MainCtrl($scope, Cultures, $http, Members) { 
	
	// handle side bar visibility
	$scope.sidebarIsVisible = false;
	$scope.showSideBar = function() {
		$scope.sidebarIsVisible = !$scope.sidebarIsVisible;
	};
	
	// set refresh function which updates model data
	$scope.refresh = function() {
		$scope.newMember = {};
		// update messages
        $scope.messages = Cultures.getMessages(CULTURE);
        // set side bar list options
        $scope.settingListOptions = [
       		{ text: Cultures.getMessage("english", CULTURE), code: ENGLISH_CULTURE_CODE },
       		{ text: Cultures.getMessage("french", CULTURE), code: FRENCH_CULTURE_CODE }
       	];
	};
    
	// set function which changes the culture/locale
	$scope.changeCulture = function(code) {
		// update global culture variable
		CULTURE = code;
		// set culture
		Cultures.setCulture(code);
		// refresh
		$scope.refresh();
	};
    
    // Define a reset function
    $scope.reset = function() {
        // clear input fields
        $scope.newMember = {};
        $scope.successMessages = '';
        $scope.errorMessages = '';
        $scope.errors = {};
    };

    // Define a register function
    $scope.register = function() {
    	
    	$scope.successMessages = '';
        $scope.errorMessages = '';
        $scope.errors = {};

        Members.save($scope.newMember, function(data) {
        	
        	// Clear the form
            $scope.reset();
        	// mark success on the registration form
            $scope.successMessages = [ 'Member Registered' ];
        }, function(result) {
            if ((result.status == 409) || (result.status == 400)) {
            	$scope.errors = result.data;
            } else {
            	$scope.errorMessages = [ 'Unknown  server error' ];
            }
            if(!$scope.$$phase) {
            	$scope.$apply();
            }
        });
    };
    
    // update model data
    $scope.refresh();
}

function MembersCtrl($scope, $http, Members) {

    // Define a refresh function
    $scope.refresh = function() {
        $scope.members = Members.query();
    };

    // Set the default orderBy to the id property
    $scope.orderBy = 'name';
    
    // Call the refresh() function
    $scope.refresh();
}