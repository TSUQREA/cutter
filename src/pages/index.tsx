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
import { useToast } from '@chakra-ui/react'
import { useDisclosure, Text } from '@chakra-ui/react'


import styles from "../styles/top.module.scss"

const Page = () => {
    const [short, setShort] = React.useState("");
    const [url, setUrl] = React.useState('')
    const handleClick = () => {
        if (url === "") {
            window.alert("No value")
        }
        const saikyouno_url = encodeURIComponent(url)
        fetch(`/api/generate/${saikyouno_url}`)
            .then((response) => response.json()) 
            .then((res) => setShort(res.short_url))
    }
    const adminClick = () =>  {
        window.location.assign(`/admin`)
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                <Button as="a" background='green.500' colorScheme="green" color="gray.100" size="lg" w='100%' marginTop={15} _hover={{ cursor: "pointer "}}  onClick={() => {handleClick();onOpen();}}>
                    Go generate
                </Button>
                <Button as="a" background='blue.500' colorScheme="blue" color="gray.100" size="lg" w='100%' marginTop={15} _hover={{ cursor: "pointer "}}  onClick={() => {adminClick();}}>
                    Go Admin page
                </Button>
                </div>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>ShortURL has been created!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize="lg">{"https://" + process.env.serviceDomain + "/api/u/" + short}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={2} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </main>
        </div>
    )
}


export default Page