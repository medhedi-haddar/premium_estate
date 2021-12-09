import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavbarMobile from './NavbarMobile'
import Footer from './Footer'

const Layout = ({children})=> {
    return (

        <>
      <Head>
        <title>PREMIUM ESTATE</title>
      </Head>
      <Box maxWidth='1280px' m='auto' position="relative">
        <header>      
          <NavbarMobile/>        
          </header>
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </Box>
    </>
)
}
export default Layout;