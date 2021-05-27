import { FormControl, Input, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import spider from "./spider.png";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // for get data from db
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setMessages(
          snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code on base of condition..
    setUsername(prompt("enter your name to join the chat::"));
  }, []); //condition is this.

  const sendMessages = (event) => {
    event.preventDefault();
    //logic for sending messages
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src={spider} alt="spider" className={"img"} />
      <h1>Spider Chat!!</h1>
      <form className="app__form">
        <FormControl className="app__FormControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />

          <IconButton
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessages}
            disabled={!input}
            className="app__iconButton"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
