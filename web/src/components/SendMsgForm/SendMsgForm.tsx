import React, { useContext, useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api';
import styles from './SendMsgForm.module.scss'

export function SendMsgForm() {
    const { user, signOut } = useContext(AuthContext);
    const [message, setMessage] = useState('');

    async function hadleSendMsg(event: FormEvent) {
        event.preventDefault();

        if(!message.trim()) {
            return alert('Vish.. Se você não digitar nada não poderemos enviar sua mensagem para o mundo. Digite alguma coisa!');
        }

        await api.post('messages', { message })

        setMessage('');
    }

    return (
        <div className={styles.sendMsgFormWrapper}>
            <button onClick={signOut} className={styles.signOutButton}>
                <VscSignOut size='32'/>
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size='16'/>
                    {user?.login}
                </span>
            </header>

            <form className={styles.sendMsgForm} onSubmit={hadleSendMsg}>
                <label htmlFor="message">Mensagem</label>
                <textarea 
                    name="message" 
                    id="message" 
                    placeholder="Qual sua expectativa para o evento?" 
                    onChange={event => setMessage(event.target.value)}
                    value={message}                    
                />
                <button className={styles.buttonSend} type="submit">Enviar mensagem</button>
            </form>
        </div>
    )
};