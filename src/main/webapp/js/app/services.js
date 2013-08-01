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
angular.module('membersService', ['ngResource']).
    factory('Members', function($resource){
  return $resource('rest/members:memberId', {});
});

angular.module('culturesService', []).factory('Cultures', function() {
	return {
		getMessage: function(key, culture) {
			return Globalize.localize(key, culture);
		},
		getMessages: function(culture) {
			return Globalize.getLocalizedMessages(culture);
		},
		setCulture: function(culture) {
			Globalize.culture(culture);
			return;
		}
	};
});