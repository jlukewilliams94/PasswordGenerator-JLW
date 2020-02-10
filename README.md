# PasswordGenerator-JLW

Please follow this link to the Random Password Generator Web Page: 
## https://jlukewilliams94.github.io/PasswordGenerator-JLW/

### Random Password Generator Acceptance Criteria 
In order for the random password geerator to operate correctly it must meet the below acceptance criteria:

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

#### Generate Password Button with Corresponding Password Length Prompt. 


##### Series of Confirm Questions that will allow the user to select which character types they would like their password to contain. 

###### Console Log of the Array indicating which Character Type has been confirmed to be used in Random Password Generator. Character Types confirmed have 'use' set to 'true'.

###### Random Password Generated as a result of Password Length Prompt and Character Type Confirm Prompts. 

###### Else Alerts when Password Length Prompt and Character Type Confirm Prompts do not meet necessary criteria. 