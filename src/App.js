import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed.js";
import LoginForm from "./components/LoginForm";
import "./App.css";


const projectID="c8c0f4ff-9ae9-47aa-8e23-cc810cad2e97";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };
export default App;