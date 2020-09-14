// STRUCTURE:
// - A Header <Header /> consisting of various icons, form title and tabs to switch between Questions Tab and Responses Tab
//          - Question Tab is for adding, editing, and removing questions
//                    - Questions Tab consists of 2 main components: <TitleCard /> and <QuestionCard />
//                                - <TitleCard /> is the first card in the form consisting of Form Title and a description
//                                - <Question Card /> is a card consisting of a question field, type of question selection field and another component <AnswerFields /> for rendering sample input fields in the card (as seen on Google Forms)
//          - Responses Tab is for viewing form responses filled by users (not implemented)
//
// FUTURE IMPLEMENTATIONS:
// - Populate the Response Tab with dummy user responses and generate charts as well for MCQ and Checkbox questions using chart.js library
// - Store user's input on Firebase Realt-time DB and render the same on a Preview page (Eye icon)
// - Add more themes

import React from "react";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
