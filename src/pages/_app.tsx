import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.scss'


const _App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
          <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
export default _App