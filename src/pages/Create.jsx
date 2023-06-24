import { Box, Heading, SimpleGrid, Image,Text  } from "@chakra-ui/react";

export default function Create() {
  return (
    <SimpleGrid columns={4}  >
      
      <Box width="270px" h="300" bg="white"><Heading mt="20px" ml="20px" color="gray.600" fontSize="22px"> Amazing <br /> exclusive design</Heading><Heading color="gray.700" mt="10px" ml="20px" fontWeight="15px" fontSize="16px">introducing an extraordinary and exclusive design that captivates with its sheer brilliance. This exceptional creation combines exquisite craftsmanship, meticulous attention to detail, and unparalleled innovation. Every element has been meticulously curated to embody elegance and sophistication.</Heading></Box>
      <Box width="270px" h="300" bg="white"><Image mt="10px"  src="https://myblogdeco.fr/wp-content/uploads/2023/01/2-deco-salon-beige-vert-nature.jpg " /><br /></Box>
      <Box width="270px" h="300" bg="white"><Image h="285px" mt="10px" src="https://www.deco-et-ambiances.fr/wp-content/uploads/2023/04/32salon-moderne-vert-emeraude-etsy.jpg " /></Box>
      <Box width="270px" h="300" bg="white"><Image mt="11px" w="300px" h="282px" src="https://www.mydomaine.com/thmb/N06dyIsKaQXVYBWlxwAEBxTiTq0=/1125x0/filters:no_upscale():strip_icc()/__ArborCo.1Sage-75490b29bbec4b88a84afdb9aeaea2cc.jpg "/></Box>
      
      <Box bg="white" h="50px"></Box>
      <Box bg="white" h="55px"><Text ml="8px" fontSize="20px" color="gray.600" fontWeight="30px"> Decorative panel <br /> $399.000 </Text></Box>
      <Box bg="white" h="50px"><Text ml="8px" fontSize="20px" color="gray.600" fontWeight="30px" > Comfortable sofa <br />$755.000</Text></Box>
      <Box bg="white" h="50px"><Text ml="8px" fontSize="20px" color="gray.600" fontWeight="30px">Two places bed <br />$950.000</Text></Box>
      
      <Box width="270px" h="390" bg="white"><Image ml="20px" mt="50px" h="300px" src="https://cdn.rona.ca/webassets/images/330851308_AlternateImage2_l.jpg " /></Box>
      <Box width="270px" h="390" bg="white"><Heading ml="7px" mt="90px" fontSize="16px" fontWeight="15px">Crafted for those who appreciate the finer things in life, these designs set new standards of luxury and refinement. It stands as a symbol of prestige and sophistication, showcasing the epitome of style and taste.</Heading></Box>
      <Box width="270px" h="390" bg="white"><Image mt="50px" h="300px" w="270px" src="https://arayofsunlight.com/wp-content/uploads/2019/11/emerald-green-painted-dresser-1-683x1024.jpg " /></Box>
      <Box width="270px" h="390" bg="white"><Image h="300px" mt="50px" src=" https://secure.img1-cg.wfcdn.com/im/57686738/resize-h380-w380%5Ecompr-r70/2002/200218965/Lampe+sur+pied+%C3%A0+bras+articul%C3%A9+65+po+Hosby.jpg" /></Box>
   
      <Box bg="white" h="55px"> <Text mt="-30px" ml="26px" fontSize="20px" color="gray.600" fontWeight="30px"> Living mode sofa <br /> $425.000 </Text></Box>
      <Box bg="white" h="55px"></Box>
      <Box bg="white" h="50px"><Text mt="-30px" ml="8px" fontSize="20px" color="gray.600" fontWeight="30px" > chest of drawers <br />$505.000</Text></Box>
      <Box bg="white" h="50px"><Text mt="-30px" ml="8px" fontSize="20px" color="gray.600" fontWeight="30px">floor lamp <br />$299.000</Text></Box>
       

      <Box width="270px" h="390" bg="white"><Image ml="20px"  h="300px" src="https://ii2.pepperfry.com/media/catalog/product/m/o/800x880/modern-fabric-chaise-lounger-in-olive-green-colour-modern-fabric-chaise-lounger-in-olive-green-colou-ov359a.jpg " /></Box>
      <Box width="270px" h="390" bg="white"><Image h="300px" ml="18px" src=" https://m.media-amazon.com/images/I/81WrByB64OL._AA360_AC_QL70_.jpg" /></Box>
      <Box width="270px" h="390" bg="white"><Heading ml="7px" mt="90px" fontSize="16px" fontWeight="15px" > From its flawless contours to its meticulously selected materials, these design are a true testament to artistic ingenuity. With a harmonious blend of modern aesthetics and timeless charm, it radiates a unique allure that is impossible to resist.</Heading></Box>
      <Box width="270px" h="390" bg="white"><Image h="300px" w="300px"  mt="-5px" src="https://imagescdn.simons.ca/images/5387-2221120-10-A1_2/large-modern-grooved-vase.jpg?__=2" /></Box>
   
      <Box bg="white" h="55px"> <Text mt="-78px" ml="26px" fontSize="20px" color="gray.600" fontWeight="30px"> Lounger chair <br /> $345.000 </Text></Box>
      <Box bg="white" h="55px"> <Text mt="-77px" ml="25px" fontSize="20px" color="gray.600" fontWeight="30px" > Cofee taable <br />$370.000</Text></Box>
      <Box bg="white" h="50px"></Box>
      <Box bg="white" h="50px"><Text mt="-84px" ml="10px" fontSize="20px" color="gray.600" fontWeight="30px">Modern grooved vase <br />$120.000</Text></Box>


    </SimpleGrid>
  )
}