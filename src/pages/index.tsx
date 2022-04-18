import * as React from "react"

import Link from "next/link"
import Head from "next/head"


import styles from "../styles/top.module.scss"

const Page = () => {
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <Head>
                <title key="site:title">cutter | Shortcut URL generator service for developers</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.hero}>
                <h1 className={styles.title_text}>cutter</h1>
                <p>Shortcut URL generator service for developers.</p>
                </div>
            </main>
        </div>
    )
}


export default Page