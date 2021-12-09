import { Box, Flex, Text} from '@chakra-ui/react';
import { SiNextdotjs } from 'react-icons/si'
const Footer = () =>(
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        <Flex justifyContent="center" alignItems="center" direction={["column", "row", "row", "row"]}>
        <Text  marginRight="2">2021 Premium Estate, Demo </Text> <Text marginRight="2" color="green.600">| haddar.medelhedi@gmail.com |</Text> <Text display="flex" alignItems="center"><SiNextdotjs/>Next.js</Text>
        </Flex>
    </Box>
)

export default Footer
