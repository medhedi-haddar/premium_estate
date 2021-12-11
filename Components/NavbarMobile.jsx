import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Text,useDisclosure,Button,Flex,Box,Spacer} from '@chakra-ui/react'
import { FcMenu, FcHome, FcBookmark ,FcSearch, FcKey} from 'react-icons/fc';

import Logo from '../assets/images/logo.png'

function NavbarMobile() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()


return (
    <Flex p='2' borderColor='gray.100' 
        bg="gray.100" 
        margin="2"
        marginTop="4"
        borderRadius="5"
        alignItems="center"
        boxShadow='sm'>
        <Box fontSize='2xl' color='blue.600' fontWeight='bold'>
            <Link href='/'>
                <Box paddingLeft='2'  
                _hover={{
                color: "blue.700",
                transition : "all 0.2s ease-in-out"
                }}
                display="flex"
                justifyContent="center" 
                alignItems="center"
                cursor="pointer"
                >
                    <Image src={Logo} height="45px" width="224px"/>
                </Box>
            </Link>
        </Box>
            <Spacer/>
            <Button 
            display={{ base: "block", md: "none" }}
            size='sm'
            variant='outline'  ref={btnRef} color='teal' onClick={onOpen}>{<FcMenu/>}</Button>

            <Flex alignItems="center" borderColor='gray.100'
            display={{ base: "none", md: "flex" }} paddingRight="2"> 

                <Link href='/' passHref >
                    <Box display={{ base: "none", md: "inline-block" }}
                    _hover={{
                        background: "white",
                        color: "gray.600",
                        transition : "all 0.2s ease-in-out"
                    }}
                    padding="2"
                    cursor="pointer"
                    borderRadius="5"
                    display="flex"
                    justifyContent="center" 
                    alignItems="center"
                    ml="3"> 
                    <FcHome />
                    <Text marginLeft="1" > Home</Text>  
                    </Box>
                </Link>

                <Link href='/search' passHref >
                <Box display={{ base: "none", md: "inline-block" }}
                    _hover={{
                        background: "white",
                        color: "gray.600",
                        transition : "all 0.2s ease-in-out"
                    }}
                    padding="2"
                    cursor="pointer"
                    borderRadius="5"
                    display="flex"
                    justifyContent="center" 
                    alignItems="center"
                    ml="3"> 
                        <FcSearch />
                        <Text marginLeft="1"> Search</Text>  
                        </Box>
                </Link>

                <Link href='/search?purpose=for-sale' passHref >
                    <Box display={{ base: "none", md: "inline-block" }}
                        _hover={{
                            background: "white",
                            color: "gray.600",
                            transition : "all 0.2s ease-in-out"
                        }}
                        padding="2"
                        cursor="pointer"
                        borderRadius="5"
                        display="flex"
                        justifyContent="center" 
                        alignItems="center"
                        ml="3"> 
                        <FcKey />
                        <Text marginLeft="1"> Buy Property</Text> 
                    </Box>
                </Link>

                <Link href='/search?purpose=for-rent' passHref >
                    <Box display={{ base: "none", md: "inline-block" }}
                        _hover={{
                            background: "white",
                            color: "gray.600",
                            transition : "all 0.2s ease-in-out"
                        }}
                        padding="2"
                        cursor="pointer"
                        borderRadius="5"
                        display="flex"
                        justifyContent="center" 
                        alignItems="center"
                        ml="3">
                        <FcBookmark />
                        <Text marginLeft="1"> Rent Property</Text> 
                    </Box>
                </Link> 

            </Flex>
        <Box>
            <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Real estate</DrawerHeader>
                <DrawerBody>
                    <Flex paddingTop='4' flexDirection="column" borderColor='gray.100'> 
                        <Link href='/' passHref textDecoration="none">
                            <Button  width="100%" marginBottom="2" color="gray.500" onClick={onClose}><FcHome/><Spacer/>Home</Button>
                        </Link>
                        <Link href='/search' passHref>
                            <Button  width="100%" marginBottom="2" color="gray.500" onClick={onClose}><FcSearch/><Spacer/>Search</Button>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <Button  width="100%" marginBottom="2" color="gray.500" onClick={onClose}><FcKey/><Spacer/>Buy Property</Button>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <Button  width="100%" marginBottom="2" color="gray.500" onClick={onClose}><FcBookmark/><Spacer/>Rent Property</Button>
                        </Link> 
                    </Flex>
                </DrawerBody>
                <DrawerFooter justifyContent="center" bg="gray.100">
                    <Text color="gray.500">medhedi.haddar@gmail.com</Text>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
        </Box>
    </Flex>
)
}

  export default NavbarMobile;