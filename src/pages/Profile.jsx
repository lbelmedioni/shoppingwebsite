import { Box,Text, Heading, SimpleGrid,Image } from "@chakra-ui/react";

export default function Profile() {
  return (
    <SimpleGrid h="300px" columns={4}>

      <Box h="150px"  w="550px"  ><Heading ml="55px" >Why Choose Us</Heading><Text ml="60px" mt="20px" fontSize="15px">When it comes to selecting the best, there are countless reasons to choose us. We stand out from the rest, offering a truly exceptional experience that exceeds expectations. Here are just a few compelling reasons why you should choose us:</Text></Box>
      <Box h="20px" w="20px"  bg="white"></Box>
      <Box h="200px" w="450px"><Image ml="100px" w="500px" h="300px" src=" https://i.etsystatic.com/11606131/c/1229/976/0/5/il/eea668/2468111685/il_340x270.2468111685_p9av.jpg" /></Box>
      <Box h="50px" w="50px"  ml="90px"></Box>


      <Box mt="-80px" h="30px" w="150px"  ml="60px"><Image mt="55px" w="15px" h="17px" src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" /><Heading fontSize="15px" ml="25px" mt="-18px" >High Quality  </Heading> <br /><Image mt="15px" w="15px" h="17px" src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" /><Heading fontSize="15px" ml="25px" mt="-18px" >Fast delivery </Heading></Box>
      <Box h="30px" ml="-120px" mt="-80px" w="150px"  ><Image mt="55px" w="15px" h="17px" src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" /><Heading fontSize="15px" ml="25px" mt="-18px" >Low fee </Heading><br /><Image mt="15px" w="15px" h="17px" src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" /><Heading fontSize="15px" ml="25px" mt="-18px" >H24 Support  </Heading></Box>
      <Box h="150px"  mt="50px"w="150px"  ml="-150px"></Box>
      <Box h="250px" w="250px" mt="50px"  ml="150px"></Box>

    </SimpleGrid>
  )
}
