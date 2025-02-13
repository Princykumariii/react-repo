import React, {useState} from "react"
import { Box,Input,Button,List,ListItem,IconButton,Flex,Text } from  "@chakra-ui/react";
 //import { DeleteIcon } from "@chakra-ui/icons";

const Todo=()=>{
    const[tasks,setTasks] =useState([]);
    const [input, setInput] = useState("");
    const addTask = () => {
        if (input.trim() === "") return;
        setTasks([...tasks, Input]);
        setInput("");
      };
     
      
    return(
        <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Flex mb={4}>
            <Input placeholder="Enter a Task" value={input} onChange={(e) => setTask(e.target.value)}
          mr={2}
        />
        <Button colorScheme="blue"  onClick={addTask}>Add</Button>
        </Flex>
        
        </Box>
    )
}

export default Todo;