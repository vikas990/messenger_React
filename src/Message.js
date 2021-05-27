import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
import React, { forwardRef } from "react";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            <p className={isUser ? "text" : ""}>
              {!isUser && `${message.username || "Unknown User"}:`}
              {message.message}
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
