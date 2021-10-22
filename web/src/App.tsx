import React, { useContext } from 'react'
import styles from './App.module.scss'
import { MsgList } from './components/MsgList/MsgList'
import { LoginBox } from './components/LoginBox/LoginBox'
import { AuthContext } from './contexts/auth';
import { SendMsgForm } from './components/SendMsgForm/SendMsgForm';

export function App() {
  const { user } = useContext(AuthContext);
  return (
    <main className={!!user ? styles.contentSigned : ''}>
      <div className={styles.contentWrapper}>
        <MsgList />
        { !!user ? <SendMsgForm/> : <LoginBox/> }
      </div>
    </main>
  )
}
