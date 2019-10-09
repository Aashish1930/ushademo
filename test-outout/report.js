$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Home.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook application test",
  "description": "",
  "id": "facebook-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "login with valid credential",
  "description": "",
  "id": "facebook-application-test;login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is on facebook loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cusername\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on loginButton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Facebook Homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "facebook-application-test;login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 12,
      "id": "facebook-application-test;login-with-valid-credential;;1"
    },
    {
      "cells": [
        "aashishm431@gmail.com",
        "",
        "aashish@12"
      ],
      "line": 13,
      "id": "facebook-application-test;login-with-valid-credential;;2"
    },
    {
      "cells": [
        "mehta",
        "",
        "ashish"
      ],
      "line": 14,
      "id": "facebook-application-test;login-with-valid-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "login with valid credential",
  "description": "",
  "id": "facebook-application-test;login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is on facebook loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"aashishm431@gmail.com\"and \"aashish@12\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on loginButton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Facebook Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_facebook_loginpage()"
});
formatter.result({
  "duration": 97500017261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aashishm431@gmail.com",
      "offset": 12
    },
    {
      "val": "aashish@12",
      "offset": 39
    }
  ],
  "location": "LoginStepdefination.user_enter_and(String,String)"
});
formatter.result({
  "duration": 6393310512,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_click_on_loginButton()"
});
formatter.result({
  "duration": 14439263829,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_Facebook_Homepage()"
});
formatter.result({
  "duration": 107976090,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Facebook – log in or sign up]\u003e but was:\u003c[Log in to Facebook | Facebook]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat step_defination.LoginStepdefination.user_is_on_Facebook_Homepage(LoginStepdefination.java:48)\r\n\tat ✽.Then user is on Facebook Homepage(Home.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "login with valid credential",
  "description": "",
  "id": "facebook-application-test;login-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is on facebook loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"mehta\"and \"ashish\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on loginButton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Facebook Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_facebook_loginpage()"
});
formatter.result({
  "duration": 41507993443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehta",
      "offset": 12
    },
    {
      "val": "ashish",
      "offset": 23
    }
  ],
  "location": "LoginStepdefination.user_enter_and(String,String)"
});
formatter.result({
  "duration": 734077024,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_click_on_loginButton()"
});
formatter.result({
  "duration": 9980086135,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_Facebook_Homepage()"
});
formatter.result({
  "duration": 31549725,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Facebook – log in or sign up]\u003e but was:\u003c[Log in to Facebook | Facebook]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat step_defination.LoginStepdefination.user_is_on_Facebook_Homepage(LoginStepdefination.java:48)\r\n\tat ✽.Then user is on Facebook Homepage(Home.feature:9)\r\n",
  "status": "failed"
});
});