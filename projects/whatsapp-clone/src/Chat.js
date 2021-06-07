import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, Message, SearchOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';



function Chat() {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className="chat__name"> sonnny
                </span>
                    Hey guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>



            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form >
                    <input type = "text "></input>
                    <button>Send the Message</button>
                </form>
                    <MicIcon />
            </div>
        </div>
    )
}

export default Chat;