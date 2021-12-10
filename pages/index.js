import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../Components/Property';

import  CoverHouseRentFiltered from "../assets/images/coverHouseRentFiltered.jpg";
import  CoverHouseSaleFiltered from "../assets/images/coverHouseSaleFiltered.jpg";


export const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl})=> (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' my='10' mx="2"  borderRadius="5"  position="relative" overflow="hidden" bg="gray.100">
    <Box position="absolute"  overflow="hidden" style={{zIndex: "0"}} width="100%" height="100%" backgroundImage={`url("${imageUrl.src}")`} 
    backgroundRepeat="none" backgroundSize="cover" backgroundPosition="center">
    </Box>
    <Box p='5' textAlign="center" style={{zIndex: "10"}} margin="4" >
     
      <Text color='gray.300' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl'  color='white' fontWeight='bold'>{title1} {title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.200'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl' colorScheme='blue' >
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
)

const Home = ({propertiesForSale, propertiesForRent}) => (
    <Box>
        <Banner 
        purpose={'RENT A HOME'}
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl={CoverHouseRentFiltered}

        />
        <Flex flexWrap="wrap" justifyContent="center">
           {propertiesForRent.length > 0 ? propertiesForRent.map((property) => <Property property={property} key={property.id}/>) : "" }
        </Flex>
        <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl={CoverHouseSaleFiltered}
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale.length > 0 ? propertiesForSale.map((property) => <Property property={property} key={property.id}/>) : ""}
      </Flex>
    </Box>
  )


  export default Home;
  
  export async function getStaticProps(){
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`);
    const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`);
    return {
      props : {
        propertiesForSale: propertyForSale?.hits || { },
        propertiesForRent: propertyForRent?.hits || { }
      },
      revalidate: 1,
    };
  }