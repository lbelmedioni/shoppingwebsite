import { Image, Box,  Heading,  SimpleGrid, Button} from "@chakra-ui/react";


export default function Dashboard() {
  return (
    <SimpleGrid columns={2}>
      <Box  bg="whatsapp.800" h="520px" w="400" border="1px solid"  borderColor="whatsapp.800" ><Heading mt="60px" ml="95px" color="white" size="xl" >Furniture that <br />every one <br /> Loves <br /><Heading fontWeight="26px" fontSize="16px" mt="18px">Modern high quality and comfortable <br />available on our stores</Heading></Heading> <br /> <Button ml="90px" mt="30px" borderRadius="20px" colorScheme="green">Buy now</Button><Button borderColor="red" ml="25px" borderRadius="20px" mt="30px" colorScheme="green.200">Explore</Button></Box>
      <Box  bg="whatsapp.800" h="520px" border="1px solid" borderColor="whatsapp.800"><Image mt="50px" w="240px" h="400px" src="https://i.pinimg.com/736x/48/7f/39/487f395919b75cdf8a877f3dc5805721.jpg" /><Image ml="250px" mt="-400px" w="240px" h="400px" src="https://i.pinimg.com/564x/66/be/80/66be80f260c0e0c419995ca23f2f1bd5.jpg"  /> </Box>
      


    </SimpleGrid>

    
  )
}
