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
var ENGLISH_CULTURE_CODE = "en";
var FRENCH_CULTURE_CODE = "fr";

// set initial culture
var CULTURE = ENGLISH_CULTURE_CODE;

// set default globalize culture
Globalize.culture(CULTURE);

// extend Globalize
Globalize.getLocalizedMessages = function( cultureSelector ) {
	return this.findClosestCulture( cultureSelector ).messages ||
		this.cultures[ "default" ].messages;
};

// add messages for English culture
Globalize.addCultureInfo( ENGLISH_CULTURE_CODE, {
    messages: {
    	"home_msg_0": "Kitchensink",
        "home_msg_1": "You have successfully deployed a Java EE 6 web application.",
        "home_msg_2": "This Quickstart demonstrates the use of various Mobile, HTML5, CSS3 and JavaScript techniques.",
        "home_msg_3": "AngularJS",
        "home_msg_4": "Topcoat",
        "home_msg_5": "jQuery Globalize",
        "language": "Language",
        "english": "English",
        "french": "French",
        "member_register": "Register a member",
        "name": "Name",
        "email": "E-mail",
        "phone": "Phone",
        "register": "Register",
        "cancel": "Cancel"
    }
});

// add messages for French culture
Globalize.addCultureInfo( FRENCH_CULTURE_CODE, {
    messages: {
    	"home_msg_0": "Kitchensink",
        "home_msg_1": "Vous avez réussi à déployer une Java EE 6 web application.",
        "home_msg_2": "Ce tutoriel montre comment utiliser divers Mobile, HTML5, CSS3 et JavaScript techniques.",
        "home_msg_3": "AngularJS",
        "home_msg_4": "Topcoat",
        "home_msg_5": "jQuery Globalize",
        "language": "Langue",
        "english": "Anglais",
        "french": "Français",
        "member_register": "Enregistrer un membre",
        "name": "Nom",
        "email": "E-mail",
        "phone": "Phone",
        "register": "Registre",
        "cancel": "Résilier"
    }
});

// set routes
angular.module('kitchensink', ['membersService', 'culturesService']).config(
	[ '$routeProvider', function($routeProvider) {
	    $routeProvider.
	    // if URL fragment is /home, then load the home partial, with the
	    // MembersCtrl controller
	    when('/home', {
	        templateUrl : 'partials/home.html'
	    // Add a default route
	    }).when('/member', {
	    	templateUrl : 'partials/member.html'
    	    // Add a default route
	    }).when('/members', {
	    	templateUrl : 'partials/members.html'
    	    // Add a default route
	    }).otherwise({
	        redirectTo : '/home'
	    });
}]);