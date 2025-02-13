// import { Button,Center,Heading, VStack } from "@chakra-ui/react"
// import {useState} from "react"
// import { Box} from "@chakra-ui/react"
// import { SimpleGrid } from "@chakra-ui/react"
// // import { Center } from "@chakra-ui/react"
// import { FadeLoader} from "react-spinners"
// const Demo = () => {
//     const[loading,setLoading] =useState(true)
//     const handleBtn=()=>{
//       alert("button is clicked")
//     }
//   return (
//     <VStack>
//         <Heading colorPalette={"green"} color={"orange"} fontWeight={"bold"} variant={"subtle"}>Welcome to chakra ui</Heading>
//       <Button  size={"lg"}
//       colorPalette={"red"} 
//       variant={"subtle"} 
//       loading={loading} 
//       loadingText="...Loading"
//        spinnerPlacement="end" 
//     //    spinner={<FadeLoader size={10}/>}
//        >Click me</Button>
//       <Button colorPalette={"teal"} variant={"outline"} onClick={handleBtn}>Click me</Button>
//     </VStack>
//  <SimpleGrid column={3} gap="40px"> 


//      <Box bg="green" w="100%" p="4" color="white">
//     This is the Box
//     </Box>
//     <Box bg="blue" w="100%" p="4" color="white">
//     This is the Box
//     </Box>
//     <Box bg="pink" w="100%" p="4" color="white">
//     This is the Box 

//      </SimpleGrid> 
   

//   )
// }
// export default Demo;

import{Button,HStack} from "@chakra-ui/react";
const Demo =()=>{
  return(
    <HStack>
      <Button>Click me</Button>
      <Button>Click this</Button>
    </HStack>
  )
}
export default Demo;