Feature: TC_Customer_Login_functionality_with_Tables
#Features are written from User Stories
# Scenario is acted as Test Case
# Given Then lines are called Test Steps
# Ghrerkin Steps Keywoard Given When Then And But *
Background: 
Given I am in Chrome Browser
When I navigate to microtech site 
Then Landing Page will appear
Then I click on Login Button

@Smoke @MyPersonal
Scenario: Login with valid Id and password
Then I enter user Id as  "testpilot@gmail.com"
And I enter password as "1234"
And Click on Customer Login Button
Then the Verify the I am in Home Page

@Smoke @Regression
Scenario Outline: Login with valid Id and password
* I enter user Id as  "<User Id>"
* I enter password as "<Password>"
* Click on Customer Login Button
* the Verify the "<Messages>"
Examples:
|User Id   					 |Password|
|testpilot@gmail.com |1234    |

@Regression
Scenario Outline: Login with Invalid Id and-or password
Then I enter user Id as  "<User Id>"
And I enter password as "<Password>"
And Click on Login Button
Then the Verify the "<Messages>"
# pipe
Examples:
|User Id   						| Password| Messages        |
|testpilot@gmail.com  | invalid | Invalid Password|
|invalid@gmail.com 	  | 123 		| Invalid Username|
|invalid@gmail.com 	  | invalid | Both Invalid    |
