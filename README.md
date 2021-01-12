# lab-01-quiz-page

# Outcome
- create an interactive quiz that outputs results onto our page

    # requirements
    
    ## html structure + basic style.css
    - intro and general content section about me
    - at least one image
    - three sections about the content
    - appropriate headers
    - one unordered list and ordered list
    - a button and div for the results


    # Functionality (JavaScript)
    - Get DOM Elements
        - get elementById for the result container
        - get elementById for the button
        - validate log both variables
    
    - Add an event listener triggered by clicking button
        
        - prompt() the user for their name
            - store the user name in a variable to use it in the results at the end of event listener
            - validate console.log variable
        
        - confirm() that the user wants to take this quiz
            -  answer should be yes and should break from the eventlistener if not
            - validate console.log after confirm
        
        - if the user wants to take quiz they have to answer three yes/no prompts
        
        - create a function that checks the user answer to prompt() in     utils.js
            - why? ... 
            - create a variable that tracks the number of correct answers
                - why? ... we will put this into our results container with our final output string.
                - validate log variable state depending on user input
        - Alert the user that their results will be displayed on the screen   
        - insert our result string into our div container 
            - make sure to include the user's first, and include the number of answers they got right

        # EXTRAS
        - outcome: turn the user score into a percentage
            - divide user score by total number of questions and store it in a variable
            - validation: display the result of the calculation in the variable

            - convert the float into a whole number
                - validation: log the conversion in the results container
                
        