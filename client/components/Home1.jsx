import React, {Component, useState, useEffect} from 'react';
//react-router-dom
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home(){
    return(
      <div>
        <Link to="/join">
          <button>Join Game</button>
        </Link>
        <Link to="/settings">
          <button>Create Game</button>
        </Link>
      </div> 
    )
}

