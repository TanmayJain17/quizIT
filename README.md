# QuizIT

**Create and share Quiz/Analysis Forms that gives you real-time results**



![Home Page](https://github.com/TanmayJain17/quizIT/blob/main/images_quizit/Screenshot%20(272).png)
**Home Page**


***
## Project Structure
***
**Backend (Server)**
```

controller
build
client
├───src
|       ├───app   
|       ├───css
|       ├───js
|       └───components
|               ├───End.js
|               ├───Modal.js
|               ├───Question.js
|               └───Start.js 
└───public
routes
    ├───details
    ├───downallscores
    ├───findScore
    └───score
db
    ├───coepdquizit.db
    ├───connction.db
    └───model.js
```
**Frontend (Client Side Code)**
```
public
│   index.html
│
├───app
│       common.js
│       home.js
│       makequiz.js
│       quizPage.js
│       socketClient.js
│       style.css
│
├───components
│       End.js
│       Modal.js
│       Question.js
│       Start.js
│
├───css
└───js
        jquery-3.6.0.js
```

![Home Page](https://github.com/TanmayJain17/quizIT/blob/main/images_quizit/Screenshot%20(273).png)
**Quiz Interface**


## Business Logic
***
### Users

Two types of users
- **The Examiner**
This user will generate test/analysis form.
The required feilds are 1)**The Question** 2) **The Options**
After that the Quiz/Analysis Form is generated which the user has to share.

- **The Examinee**
This User will have to enter the Poll Id and enter the live poll.


![Home Page](https://github.com/TanmayJain17/quizIT/blob/main/images_quizit/Screenshot%20(274).png)
**Result/Analysis Screen**


![Home Page](https://github.com/TanmayJain17/quizIT/blob/main/images_quizit/Screenshot%20(275).png)
**Final Excell Sheet Download**

## API Documentation
***

### ```Quiz ```
```GET  api/ques/:id```
Gets the questions with the given link

```POST api/ques/```
Create a new live quiz. Required fields in body -
- Question
- Option 
Option takes an array of objects which contains 2 fields->
1. id:  (integer)
2. name: (string)
***

