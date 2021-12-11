   
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { MdOutlineHotel, MdOutlineBathtub,MdOutlineVideoCameraBack } from 'react-icons/md';
import { BsBoundingBoxCircles } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import  DefaultImage from  '../assets/images/house.jpeg';

const Property = ({property : { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, videoCount  }}) => (  
    
        <Link href={`/property/${externalID}`}>
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-center' cursor='pointer' maxWidth="md">
                <Box borderTopRightRadius="5px" borderTopLeftRadius="5px" overflow="hidden">
                    <Image src={coverPhoto ? coverPhoto.url : DefaultImage } width={400} height={260} alt={title}/>
                </Box>

                <Box w='full' bg="gray.100" p="2" position="relative" borderBottomRightRadius="5px" borderBottomLeftRadius="5px" borderBottom="2px" borderColor="gray.300" >
                    <Flex  alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                       {isVerified &&  <Box paddingRight='3' color='green.400'><GoVerified /></Box>}
                        <Text fontWeight='bold' fontSize='lg'>AED {price && millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box position="absolute" top="-28px" right="20px" border="2px" borderColor="white" borderRadius="50">
                        <Avatar size='md' src={agency?.logo?.url}></Avatar>
                    </Box>
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                        {rooms} <MdOutlineHotel /> | {baths} <MdOutlineBathtub /> | {millify(area)} sqft <BsBoundingBoxCircles /> 

                        <Text fontWeight='bold' fontSize='lg'>{videoCount > 0 && <MdOutlineVideoCameraBack/>}</Text>
                    </Flex>
                    <Text fontSize='lg'>
                    {title.length > 30 ? title.substring(0, 30) + '...' : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    
)

export default Property




