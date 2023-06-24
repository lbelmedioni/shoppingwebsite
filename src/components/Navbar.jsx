import {  Button, Flex, HStack, Heading, Spacer } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return(
     <Flex as="nav" p="10px" bg="whatsapp.800" alignItems="center" color="white">
        <Heading as="h1" ml="88px" color="white">Leen.</Heading>
        <Spacer />
       <HStack spacing="20px">
        <NavLink to="/Dashboard"> Home</NavLink>
        <NavLink to="/Create"  >Blog</NavLink>
        <NavLink to="/Profile" >About us</NavLink>
        <NavLink to="/Aboutus" >Contact us</NavLink>
        <Button colorScheme="green" borderRadius="20px">Login</Button>
        </HStack>
     </Flex>
  )
}

 

