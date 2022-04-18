import * as React from "react"

import Link from "next/link"
import Head from "next/head"
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import styles from "../styles/top.module.scss"

const Page = () => {
    const [url, setUrl] = React.useState('')
    const handleClick = () =>  {
        if (url == "") {
            window.alert("No value")
        }
        window.location.assign(`/api/generate/${url}`)
    }
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <Head>
                <title key="site:title">cutter | Google Spreadsheet-based ShortURL Service</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.hero}>
                <h1 className={styles.title_text}>cutter</h1>
                <p>Google Spreadsheet-based ShortURL Service</p>
                <Input variant='outline' placeholder='paste url'  value={url} onChange={(e) => setUrl(e.target.value)} />
                <Button as="a" background='blue.500' colorScheme="blue" color="gray.100" size="lg" w='100%' marginTop={15} onClick={handleClick}>
                    Go generate
                </Button>
                </div>
            </main>
        </div>
    )
}


export default Page