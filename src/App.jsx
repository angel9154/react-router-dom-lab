// import { useState } from 'react'
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Mailboxes from './components/MailBoxes';
import NewMailbox from './components/NewMailbox';
import { useState } from 'react';
import MailboxDetails from './components/MailboxDetails';
import './App.css'

// src/App.jsx

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  return (
    <div>
  
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route
          path="/mailboxes"
          element={<Mailboxes mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<NewMailbox mailboxes={mailboxes} setMailboxes={setMailboxes} />}
        />
      </Routes>
    </div>
  )
};

export default App;


