import React from "react";
import Counter from "./Counter";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Counter Section */}
      <h1>React Counter App</h1>
      <Counter />

      <hr style={{ margin: "40px 0" }} />

      {/* Movie Section */}
      <h1>Welcome to props</h1>
      <Movie
        name="K.Manmohan Rathod"
        age="21 years"
        mail="manmohan@example.com"
        phone="9515646846"
        address="India"
      />
    </div>
  );
};

export default App;
