import React from "react";
import { TheriMessage } from "./TheriMessage";
import { MyMessage } from "./MyMessage";
import MessageForm from "./MessageForm";



const ChatFeed=(props)=>{
   // console.log(props);
    const{userName,chats,activeChat,messages}=props;

    const chat=chats&&chats[activeChat];



    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ));

    const renderMessages=()=>{
        const key=Object.keys(messages);    


        return key.map((key,index)=>{
            const message=messages[key];
            const lastMessageKey=index===0?null:key[index-1];
            const isMyMessage=userName===message.sender.username;

            return(
                <div key={`msg ${key}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {isMyMessage?<MyMessage message={message}/>:<TheriMessage message={message} lastMessage={messages[lastMessageKey]}/>}
                    </div>

                    <div className="read-receipts" style={{marginRight:isMyMessage?'18px':'0',marginLeft:isMyMessage?'0':'68px'}}>
                    {renderReadReceipts(message, isMyMessage)}
                    </div>
                    
                </div>
            )
        })
        
    }
    

        if(!chat) return "Loading...."  //if chat is empty then return 
    /* console.log(props);
    console.log(userName); */
    return(
        <div className="chat-feed">
        <div className="chat-title-container">
          <div className="chat-title">{chat?.title}</div>
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
        </div>
        {renderMessages()}
        <div style={{ height: '100px' }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    )
}

export default ChatFeed;