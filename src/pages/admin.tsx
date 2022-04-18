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
    const homeClick = () =>  {
        window.location.assign(`/`)
    }
    const setupClick = () =>  {
        fetch("/api/setup")
    }
    const cleanClick = () =>  {
        fetch("/api/clean")
    }
    const accessClick = () =>  {
        window.location.assign(`https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}#gid=1919810`)
    }
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <Head>
                <title key="site:title">admin | cutter</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.hero}>
                <h1 className={styles.title_text}>cutter</h1>
                <p>Google Spreadsheet-based ShortURL Service</p>
                <Button as="a" background='blue.500' colorScheme="blue" color="gray.100" size="lg" w='100%' marginTop={15} _hover={{ cursor: "pointer "}}  onClick={homeClick}>
                    Go Home
                </Button>
                <Button as="a" background='green.500' colorScheme="green" color="gray.100" size="lg" w='100%' marginTop={15} _hover={{ cursor: "pointer "}}  onClick={setupClick}>
                    Go Setup
                </Button>
                <Button as="a" background='yellow.500' colorScheme="yellow" color="gray.100" size="lg" w='100%' marginTop={15} _hover={{ cursor: "pointer "}} onClick={cleanClick}>
                    Go Clean
                </Button>
                <Button as="a" background='green.300' colorScheme="green" color="gray.100" size="lg" w='100%' marginTop={15} _hover={{ cursor: "pointer "}} onClick={accessClick}>
                    Access Google Spreadsheet
                </Button>
                </div>
            </main>
        </div>
    )
}


export default Page