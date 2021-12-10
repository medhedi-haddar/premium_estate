import { useState } from 'react'; 
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';

import noresult from '../assets/images/noresult.svg'
import { fetchApi, baseUrl } from '../utils/fetchApi';

const Search = ({properties}) => {

    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
            cursor="pointer"
            bg="gray.100"
            borderBottom="1px"
            borderColor="gray.200"
            p="2"
            fontWeight="black"
            fontSize="lg"
            justifyContent="center"
            alignItems="center"
            marginRight="2"
            marginLeft="2"
            onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Text> Search Property by Filters</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}/>
            </Flex>
           
            {!searchFilters && <SearchFilters/>}
          
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            {properties?.error && (<Text fontSize="sm" p="4" fontWeight="400">
                Properties {properties.error}
            </Text>) }
            <Flex flexWrap="wrap">
                {properties.length && properties.map((property) => <Property property={property} key={property.id}/>)}
            </Flex>
            {properties.length === 0 && ( 
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Image alt="no Result" src={noresult}/>
                    <Text fontSize="2xl" marginTop="3">No Result Found</Text>
            </Flex>
            )}
        </Box>
    )
}


export async function getServerSideProps({ query }){
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const priceMin = query.priceMin || '0';
    const priceMax = query.priceMax || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    const hasVideo = query.hasVideo || '';

    const data  = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&rentFrequency=${rentFrequency}&priceMin=${priceMin}&priceMax=${priceMax}&roomsMin=${roomsMin}&bathsMin=${bathsMin}&sort=${sort}&areaMax=${areaMax}&hasVideo=${hasVideo}`);

     return {
      props : {
        properties: data?.hits || {error : "Some filters were not accepted"},
      }
    };
  }
  
  export default Search;
