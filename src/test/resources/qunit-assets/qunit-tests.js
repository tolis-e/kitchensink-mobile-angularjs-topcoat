/**
 * JBoss, Home of Professional Open Source
 * Copyright Red Hat, Inc., and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var injector = angular.injector(['ng', 'kitchensink']);

var init = {
    setup: function() {
        this.$scope = injector.get('$rootScope').$new();
        this.cultures = injector.get('Cultures');
    }
};

module('Culture Service:');

/* 
 * Tests the getMessage method of the culture service
 */
test('getMessage', function() {
	expect(2);
    var culturesService = injector.get('Cultures');
    strictEqual("You have successfully deployed a Java EE 6 web application.", culturesService.getMessage("home_msg_1", "en"));
    strictEqual("Vous avez réussi à déployer une Java EE 6 web application.", culturesService.getMessage("home_msg_1", "fr"));
});

/* 
 * Tests the getMessages method of the culture service
 */
test('getMessages', function() {
	expect(2);
	var culturesService = injector.get('Cultures');
    var messagesEN = culturesService.getMessages("en");
    ok(messagesEN !== undefined && messagesEN.home_msg_1 === "You have successfully deployed a Java EE 6 web application.", "Messages are in English");
    var messagesFR = culturesService.getMessages("fr");
    ok(messagesFR !== undefined && messagesFR.home_msg_1 === "Vous avez réussi à déployer une Java EE 6 web application.", "Messages are in French");
});

/* 
 * Tests the setCulture method of the culture service
 */
test('setCulture', function() {
	expect(2);
	var culturesService = injector.get('Cultures');
    culturesService.setCulture("en");
    strictEqual("en", Globalize.culture().name);
    culturesService.setCulture("fr");
    strictEqual("fr", Globalize.culture().name);
});

// notice the init call which is used to setup/initialize the scope and cultures service
module('Controllers:', init);

/* 
 * Tests the MainCtrl controller
 */

test('MainCtrl', function() {
	expect(10);
	var $controller = injector.get('$controller');
    $controller('MainCtrl', {
        $scope: this.$scope,
        Cultures: this.cultures
    });
    
    this.cultures.setCulture("en");
    strictEqual("en", Globalize.culture().name);
    
    // changeCulture method test
    var messages = this.$scope.messages;
    ok(messages !== undefined && messages.home_msg_1 === "You have successfully deployed a Java EE 6 web application.", "Messages are in English");
    strictEqual("en", Globalize.culture().name);
    this.$scope.changeCulture("fr");
    messages = this.$scope.messages;
    ok(messages !== undefined && messages.home_msg_1 === "Vous avez réussi à déployer une Java EE 6 web application.", "Messages are in French");
    strictEqual("fr", Globalize.culture().name);
    
    // refresh method test
    this.$scope.newMember = { "name": "John", "email": "john.smith@example.com", "phoneNumber": "000000000000" };
    notEqual(this.$scope.newMember, {}, "New Member is not empty");
    this.$scope.refresh();
    ok($.isEmptyObject(this.$scope.newMember), "New Member empty after refresh");
    
    messages = this.$scope.messages;
    ok(messages !== undefined && messages.home_msg_1 === "Vous avez réussi à déployer une Java EE 6 web application.", "Messages are in French");
    strictEqual("fr", Globalize.culture().name);
    CULTURE = "en";
    this.$scope.refresh();
    messages = this.$scope.messages;
    ok(messages !== undefined && messages.home_msg_1 === "You have successfully deployed a Java EE 6 web application.", "Messages are in English");
});

