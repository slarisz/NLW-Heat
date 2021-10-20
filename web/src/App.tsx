import React from 'react'
import styles from './App.module.scss'
import { MsgList } from './components/MsgList'
import { LoginBox } from './components/LoginBox'

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MsgList />
      <LoginBox />
    </main>
  )
}
