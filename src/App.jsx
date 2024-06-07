import { useState } from "react";

import photoavater from "../public/photo.avif";
import "./App.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
