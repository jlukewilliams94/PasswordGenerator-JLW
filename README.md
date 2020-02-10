# PasswordGenerator-JLW

Please follow this link to the Random Password Generator Web Page: 
## https://jlukewilliams94.github.io/PasswordGenerator-JLW/

## Random Password Generator Acceptance Criteria 
In order for the random password generator to operate correctly it must meet the below acceptance criteria:

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

## Generate Password Button with Corresponding Password Length Prompt. 

![Generate Password and Password Length Prompt](https://user-images.githubusercontent.com/59854275/74200139-1e627200-4c34-11ea-8a9d-7665d11e38ec.png)

## Series of Confirm Questions that will allow the user to select which character types they would like their password to contain. 
![Number Confirmation](https://user-images.githubusercontent.com/59854275/74200167-2fab7e80-4c34-11ea-9c4c-04d10e0f2d71.png)
![Uppercase Letters Confirmation](https://user-images.githubusercontent.com/59854275/74200183-3639f600-4c34-11ea-91ce-8dfc408215cb.png)
![LowerCase Letter Confirmation](https://user-images.githubusercontent.com/59854275/74200195-3df99a80-4c34-11ea-96ac-a1c4f91245ad.png)
![Special Characters Confirmation](https://user-images.githubusercontent.com/59854275/74200205-44881200-4c34-11ea-84c6-2a9c70970f89.png)

## Console Log of the Array indicating which Character Type has been confirmed to be used in Random Password Generator. Character Types confirmed have 'use' set to 'true'.

![Array Post Character Type Confirmation](https://user-images.githubusercontent.com/59854275/74200217-4d78e380-4c34-11ea-8674-a21bfb497b93.png)

## Random Password Generated as a result of Password Length Prompt and Character Type Confirm Prompts. 

![Generated Random Password](https://user-images.githubusercontent.com/59854275/74200228-58337880-4c34-11ea-8a9b-55042522537e.png)

## Else Alert when Password Length Prompt and Character Type Confirm Prompts do not meet necessary criteria. 

![Password Length Alert](https://user-images.githubusercontent.com/59854275/74200247-6aadb200-4c34-11ea-9dea-7776f8f1171f.png)
![Password Character Type Alert](https://user-images.githubusercontent.com/59854275/74200289-8b760780-4c34-11ea-9bea-f2ac8f104fdd.png)
