import React from 'react';

export const MyMessage = ({message}) => {
  if(message?.attachments?.length>0){  /* it means it is a image */
      return (
          <img src={message.attachments[0].file} alt="Message Attachment" className='message-image' style={{float:'right'}} />
      )
  }
  return ( 
  <div className="message" style={{float:"right",marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}> 
      {message.text}
  </div>);
};
