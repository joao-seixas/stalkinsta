'use client'

import { useState, useEffect } from 'react';
import Main from './Main';
import Login from "./Login";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setUserData(JSON.parse(localStorage.getItem('userData')));
    setSessionData(JSON.parse(localStorage.getItem('sessionData')));
  }

  console.log(userData);
  console.log(sessionData);

  if (userData) return (
    <Main userData={userData}/>
  ); else return (
    <Login callback={getData} />
  );
}
