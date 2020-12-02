import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import DisplayHello from "./components/displayhello-image.component";
import HomeScreen from "./components/Home-screening.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" component={HomeScreen} />
        <Route path="/posts" component={ExercisesList} />
        <Route path="/smovies" component={CreateExercise} />
        <Route path="/srls" component={CreateUser} />
        <Route path="/mvs" component={DisplayHello} />
        <Route path="/el" component={EditExercise} />
       
      </div>
    </Router>
  );
}

export default App;
