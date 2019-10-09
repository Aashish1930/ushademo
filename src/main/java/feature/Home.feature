Feature: Facebook application test



Scenario Outline: login with valid credential
Given user is on facebook loginpage
When user enter "<username>"and "<password>"
Then user click on loginButton 
Then user is on Facebook Homepage

Examples:
| username | | password |
|aashishm431@gmail.com | | aashish@123 |
