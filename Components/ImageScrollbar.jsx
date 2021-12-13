import { useContext } from "react";
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1" display={["none" , "none", "flex", "flex"]}>
            <Icon   
            as={BsFillArrowLeftCircleFill} 
            onClick={()=>scrollPrev()} 
            fontSize="2xl" 
            cursor="pointer"
            color='gray.400'
            _hover={{
                color: "gray.600",
                transition : "all 0.2s ease-in-out"
            }}
            />
        </Flex>
    )
}
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1" display={["none" , "none", "flex", "flex"]}>
            <Icon 
            as={BsFillArrowRightCircleFill} 
            onClick={()=>scrollNext()} 
            fontSize="2xl" 
            cursor="pointer"
            color='gray.400'
            _hover={{
                color: "gray.600",
                transition : "all 0.2s ease-in-out"
            }}
            />
        </Flex>
    )
}

const ImageScrollbar = ({ data }) => (
    
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} height="100%">
        {data.map((item) => (
            <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1" height="auto">
                <Image  className="scroll-image"
                alt="property"
                placeholder="blur" 
                blurDataURL={item.url} 
                src={item.url} 
                width={1000} height={500} 
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                />
             
            </Box>
        ))}
    </ScrollMenu>
);

export default ImageScrollbar
