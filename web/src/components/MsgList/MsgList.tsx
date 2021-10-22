import { api } from '../../services/api';
import io from 'socket.io-client';
import styles from './MsgList.module.scss';
import logoImg from '../../assets/images/logo.svg'
import { useEffect, useState } from 'react';

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

const msgsQueue: Message[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', newMessage => {
    msgsQueue.push(newMessage);
})

export function MsgList() {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        setInterval(() => {
            if(msgsQueue.length > 0) {
                setMessages(prevState => [
                        msgsQueue[0],
                        prevState[0],
                        prevState[1],
                    ].filter(Boolean))

                    msgsQueue.shift();
            };
        }, 2500);
    }, []);

    useEffect(() => {
        api.get<Message[]>('messages/last3').then(response => {
            setMessages(response.data)
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021"/>

            <ul className={styles.messageList}>

                {messages.map(message => {
                    return (
                    <li key={message.id} className={styles.message}>
                        <p className={styles.messageContent}>{message.text}</p>
                        <div className={styles.messageUser}>
                            <div className={styles.userImage}>
                                <img src={message.user.avatar_url} alt={message.user.name}/>
                            </div>
                            <span>{message.user.name}</span>
                        </div>
                    </li>  
                    )
                })}

            </ul>
        </div>
    )
}