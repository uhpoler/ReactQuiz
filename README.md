# ReactQuiz

**ReactQuiz** is an interactive React application that provides a fun way to test your knowledge through quizzes. Utilizing the Context API for state management, this app ensures seamless data sharing across components, making it easy to engage with the quiz experience.

## Features

- **Dynamic Quiz Flow**: Users can navigate through a series of questions with real-time updates.
- **State Management with Context API**: Efficiently manages quiz state and user progress across the app.
- **Timer Functionality**: Keeps track of the time remaining for each question.
- **Responsive Design**: Optimized for a seamless experience on various devices.
- **Error Handling**: Graceful handling of data loading errors.

## Components

The project is organized into the following React components:

- **App**: The main component that manages state and renders the overall layout.
- **Header**: Displays the title and instructions for the quiz.
- **Main**: Contains the core content of the quiz.
- **Loader**: Shows a loading animation while fetching questions.
- **Error**: Displays an error message if data fetching fails.
- **StartScreen**: The initial screen to start the quiz.
- **Question**: Displays the current quiz question and options.
- **NextButton**: Allows users to proceed to the next question.
- **Progress**: Shows the user's progress through the quiz.
- **FinishScreen**: Displays the results and high scores.
- **Footer**: Contains additional information and navigation elements.
- **Timer**: Tracks the remaining time for answering questions.

## How It Works

1. Upon loading, the app fetches quiz questions from a local `questions.json` file.
2. Users start the quiz from the **StartScreen**, where they can see instructions.
3. Each question is displayed one at a time, with options to select an answer.
4. The app keeps track of the user's points, and at the end of the quiz, it displays the results.

## Technologies Used

- **React**: For building the user interface and managing state.
- **Context API**: For efficient state management and data sharing across components.
- **CSS**: For styling components and ensuring a responsive design.
- **JavaScript (ES6+)**: Core language for building the application logic.

## Screenshots

![image](https://github.com/user-attachments/assets/086580df-c60f-4f70-b9a7-d591fa65372c)
![image](https://github.com/user-attachments/assets/46bb4899-1fdd-4fb4-9b6d-2d71805e5737)



## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ReactQuiz.git
   ```
2. **Install the dependencies**:
   ```bash
   npm install
   ```
3. **Start the application**:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.
