# Project Overview

### Code Tutor

A teaching app that helps students learn to code with repetition.

## Project Description

This app will help instructors aide in teaching students how to code. Main objective of this app is to have students learn how the code functions while they type it repeatedly with space-repetition. After an instructor uploads the code they want to teach, students are able to log on and start the exercise. Students will complete the exercise a number of times the instructor has set. Between each completion there will be a 10min break until the next exercise starts. 

## Wireframes/ERD/Component Hierarchy

*See folder

### `Technologies`
Rails for the server side, and React on the client.

#### MVP

- Have users register
- Have users create lessons
- Have users start exercise

#### PostMVP 

- Have users create courses
- Have users continue an exercise

## React Component Hierarchy

Header | Nav  | Main | Lessons Page | Lessons Creation Page | Exercise Page | Footer

## Obstacles

I had some issues trying to match each key press to the code snippet, also to have the typing input to not type when you press and incorrect key. 

## Solution

I used if else to compare the last value of the input box and compared that to the code snippets array index of the length of the array of my input .

## Code Snip
 
"if (snippet[exerciseText.length] === value.slice(-1)) {
      this.setState(prevState => ({
        exerciseText: [...prevState.exerciseText, value.slice(-1)],
        wrongKey: false
      }));
    } 
    if (exerciseText.length + 1 === snippet.length) {
    
    }
  }"