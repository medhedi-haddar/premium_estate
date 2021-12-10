import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { MdOutlineHotel, MdOutlineBathtub } from 'react-icons/md';
import { BsBoundingBoxCircles } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify'; 
import ImageScrollbar from '../../components/ImageScrollbar';
import { fetchApi, baseUrl } from '../../utils/fetchApi';


const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos, coverVideo, videoCount } }) => {

    if(videoCount){
        const splitedCoverVideo = coverVideo.url.split('/');
        coverVideo.url = splitedCoverVideo[splitedCoverVideo.length-1]
    }

    return(
    
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos}/>}
            <Box w="full" p="6">
                <Flex paddingTop="2" alignItems='center'>
                    <Box paddingRight="3" color="green.400">
                        {isVerified && <GoVerified/>}
                    </Box>
                    <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text> 
                    <Spacer/>
                    <Box>
                        {/* <Avatar size='sm' src={agency?.logo?.url}></Avatar> */}
                        <img src={agency?.logo?.url} style={{ width:'50px' , height:'auto'}}/>
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                        {rooms} <MdOutlineHotel /> | {baths} <MdOutlineBathtub /> | {millify(area)} sqft <BsBoundingBoxCircles />
                </Flex>
                <Box paddingTop="5">
                    <Text fontSize='xl' fontWeight="bold" marginBottom="2">{title}</Text>
                    <Text lineHeight='2' color='gray.600' dangerouslySetInnerHTML={{__html: description}}/>
                </Box>
                <Flex flexWrap="wrap"  textTransform="uppercase" justifyContent="space-between" >
                    <Flex justifyContent="start" width="400px" borderBottom="1px" marginTop="3" paddingBottom="2" borderColor="gray.300">
                        <Text>Type : </Text>
                        <Text fontWeight="bold" marginLeft="2">{type}</Text>
                    </Flex>
                    <Flex justifyContent="start" width="400px" borderBottom="1px" marginTop="3" paddingBottom="2"  borderColor="gray.300">
                        <Text>Purpose : </Text>
                        <Text fontWeight="bold" marginLeft="2">{purpose}</Text>
                    </Flex>
                    {furnishingStatus && (
                        <Flex justifyContent="start" width="400px" borderBottom="1px" marginTop="3" paddingBottom="2" borderColor="gray.300">
                        <Text>Furnishing Status : </Text>
                        <Text fontWeight="bold" marginLeft="2">{furnishingStatus}</Text>
                    </Flex>
                    )} 
                    {videoCount > 0 && 
                        <Box width="100%">
                            
                            <iframe
                                width="100%"
                                height="480"
                                src={ `https://www.youtube.com/embed/${coverVideo.url}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </Box>
                    }
                </Flex>
            
                {amenities.length > 0 &&  <Text fontSize="2xl" fontWeight="black" marginTop="5">Amenities</Text> } 
                <Flex flexWrap="wrap">
                    {amenities?.map((item)=> (
                        item.amenities.map((amenity) =>(
                            <Text key={amenity.text} fontWeight='bold' color='blue.600' fontSize='sm' p='2' paddingLeft="5" paddingRight="5" bg='gray.200' m='1' borderRadius='50'>
                            {amenity.text}
                        </Text>
                        ))
                    ))}
                </Flex>
            </Box>
        </Box>
    );
}

export async function getServerSideProps({ params : { id }}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props : {
            propertyDetails : data
        }
    }
}
export default PropertyDetails;
