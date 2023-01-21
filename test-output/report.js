$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TC_Customer_Login_functionality_with_Tables.feature");
formatter.feature({
  "name": "TC_Customer_Login_functionality_with_Tables",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid Id and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter user Id as  \"\u003cUser Id\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "Click on Customer Login Button",
  "keyword": "* "
});
formatter.step({
  "name": "the Verify the \"\u003cMessages\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "User Id",
        "Password"
      ]
    },
    {
      "cells": [
        "testpilot@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.TC_Login_Functionality_With_positive_and_negative_scenarios.i_am_in_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to microtech site",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.TC_Login_Functionality_With_positive_and_negative_scenarios.i_navigate_to_microtech_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Landing Page will appear",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TC_Login_Functionality_With_positive_and_negative_scenarios.landing_Page_will_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.TC_Login_Functionality_With_positive_and_negative_scenarios.i_click_on_Login_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027elogin.php\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.74)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-O1227MB\u0027, ip: \u0027192.168.0.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.74, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\carhu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57170}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0241d2e5652b25d4b7ab8bb7e0b70975\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027elogin.php\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat base.Base.click(Base.java:18)\r\n\tat pages.HomePage.clickEmpLogin(HomePage.java:24)\r\n\tat stepDefinitions.TC_Login_Functionality_With_positive_and_negative_scenarios.i_click_on_Login_Button(TC_Login_Functionality_With_positive_and_negative_scenarios.java:47)\r\n\tat ✽.I click on Login Button(file:///C:/Java/eclipse-workspace/skySchool_Framework/src/test/resources/features/TC_Customer_Login_functionality_with_Tables.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with valid Id and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter user Id as  \"testpilot@gmail.com\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinitions.TC_Customer_Login_functionality_with_Tables.i_enter_user_Id_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter password as \"1234\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinitions.TC_Customer_Login_functionality_with_Tables.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Customer Login Button",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinitions.TC_Customer_Login_functionality_with_Tables.click_on_Customer_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the Verify the \"\u003cMessages\u003e\"",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded0.png", "Login with valid Id and password");
formatter.after({
  "status": "passed"
});
});