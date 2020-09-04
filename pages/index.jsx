import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextAuth example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>This is an example of NextAuth</h1>
        <p>Checkout the documentation of NextAuth & Nextjs</p>
        <p>Nextjs: <a href="https://nextjs.org/docs/getting-started" title="Getting started with Nextjs">https://nextjs.org/docs/getting-started</a></p>
        <p>NextAuth: <a href="https://next-auth.js.org/">https://next-auth.js.org/</a></p>
        <button className={styles.btn}>Click to sign in</button>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
