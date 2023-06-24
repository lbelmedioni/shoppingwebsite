import { Box,Heading,Image } from "@chakra-ui/react";

export default function Aboutus() {
  return (
      <Box h="150px" bg="whatsapp.800" ><Heading color="white"  mt="90px" ml="600px">Leen.</Heading>
      
      <a href=""><Image  ml="600px" mt="37px" borderRadius="20px" w="30px" src="data:image/png;base64,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" />
      </a>
      <a href=""><Image borderRadius="20px" w="30px" mt="-30px"  ml="550px" src="https://thumbs.dreamstime.com/b/logo-instagram-noir-et-blanc-en-arri%C3%A8re-plan-blancs-fond-pour-le-web-l-impression-165850353.jpg " /></a>
      <a href=""><Image w="30px" borderRadius="20px" ml="650px" mt="-28px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /></a>
      
      <a href=""><Image w="30px" mt="-30px" ml="700px" src="data:image/png;base64,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" /></a>
      </Box>
    
    
  )
}