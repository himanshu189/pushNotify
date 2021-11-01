import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect } from "react";

import { getToken } from "./helpers/firebase";
import Test from './test';
import Notifications, {notify} from 'react-notify-toast';

function App() {
  
  
 
    // getToken();
    


    useEffect(()=>{
getToken()
    },[])
    return (<>
      <Notifications/>
   <Test/>
   </>
    );
  
}

export default App;

