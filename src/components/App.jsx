import React from "react";
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <img
        src="https://i.ytimg.com/vi/Tjqpy56YwRA/maxresdefault.jpg"
        className="bg"
        alt="university"
      />
      <div className="container">
        <Login />
      </div>
    </div>
  );
}
