# kitchensink-mobile-angularjs-topcoat [![Build Status](https://travis-ci.org/tolis-e/kitchensink-mobile-angularjs-topcoat.png?branch=master)](https://travis-ci.org/tolis-e/kitchensink-mobile-angularjs-topcoat)

## What is it?

> Shows how to combine HTML5, AngularJS, Topcoat, jQuery Globalize, JAX-RS and Java EE in order to create an internationalized mobile web application.

> This is your project! It is a sample, deployable Maven 3 project to help you get your foot in the door developing with AngularJS on Java EE 6 on JBoss Enterprise Application Platform 6 or JBoss AS 7. 

> This project is setup to allow you to create a compliant Java EE 6 application using CDI 1.0, EJB 3.1, JPA 2.0 and Bean Validation 1.0. It includes a persistence unit and some sample persistence and transaction code to introduce you to database access in enterprise Java. 

## System requirements

All you need to build this project is Java 6.0 (Java SDK 1.6) or better, Maven 3.0 or better.

The application this project produces is designed to be run on JBoss Enterprise Application Platform 6 or JBoss AS 7. 

The application is running on Openshift [here](http://angularjstopcoat-aemmanouilidis.rhcloud.com/#/home)

## Build

The build execution is done through Maven. Navigate to the project's root folder and execute:

    mvn clean package

## Execute the Arquillian QUnit tests

The [QUnit Test Suite](https://github.com/tolis-e/kitchensink-mobile-angularjs-topcoat/blob/master/src/test/resources/qunit-assets/qunit-tests.html) execution is done through Maven. Navigate to the project's root folder and execute:

    mvn test -Parq-qunit-tests

Note that [arquillian-extension-qunit](https://github.com/arquillian/arquillian-extension-qunit.git) artifact 1.0.0.Alpha3-SNAPSHOT is required in order to execute the [test class](https://github.com/tolis-e/kitchensink-mobile-angularjs-topcoat/blob/master/src/test/java/org/jboss/as/quickstarts/kitchensink/test/QUnitShowcaseTest.java). You can install the artifact to your local Maven repository by executing:

    git clone https://github.com/arquillian/arquillian-extension-qunit.git
    mvn install -f arquillian-extension-qunit/pom.xml

By default, the QUnit Test Suite is executed using Mozilla Firefox browser. You can use your favorite browser by modifying the _browser_ property inside [arquillian.xml](https://github.com/tolis-e/kitchensink-mobile-angularjs-topcoat/blob/master/src/test/resources/arquillian.xml).
