import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Select,
  CheckboxGroup,
  HStack,
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';



export default function Forms() {
  // const [cvValue,setCvValue]=useState({
  //   fname:"",
  //   mname:"",
  //   lname: "",
  //   email: "",
  //   phone:"",
  //   reference:"",
  //   status:"",
  //   salary:"",
  //   resume:"",

  // });

  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [technology, setTechnology]= useState([]);
  const [level, setLevel] = useState("");
  const [phone, setPhone] = useState("");
  const [reference, setReference] = useState("");
  const [status, setStatus] = useState("");
  const [salary, setSalary] = useState("");
  const [resume, setResume] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:4000/Applicant',{
      fname: fname,
      mname: mname,
      lname: lname,
      email: email, 
      technology: technology, 
      level: level,
      phone: phone,
      reference: reference,
      status: status,
      salary: salary,
      resume: resume,

    }).then(()=>{
      navigate('/');
    })
    .catch((err)=>{
      console.log(err)
    });
  }

  // const[sValue, setSValue]=useState(
  //   JSON.parse(localStorage.getItem('cvlist'))
  // );
  // const submitData=()=>
  //   {
  //     localStorage.setItem('cvlist',JSON.stringify([...sValue,cvValue]))
  //   }

  // const getData=(e)=>
  // {
  //   const{name,value}=e.target;
  //   setCvValue(()=>
  //   {
  //     return {
  //       ...cvValue, [name]: value
  //     }
      
  //   })
  //   console.log(cvValue)
  //   console.log(sValue);
  // }
  return (
    <form onSubmit={handleSubmit}>
    <Flex
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8}
      >
      <Stack align={'center'}> 
      </Stack>
      
        <Box
          rounded={'sm'}
          bg={'#ffffff'}
          boxShadow={'lg'}
           p={8}
          >
          <Stack spacing={4}>
          <HStack>
              <Box>
              <FormControl>
              <FormLabel>FirstName</FormLabel>
              <Input onChange={(e)=>setFname(e.target.value)} name='fname' type="text"/>
              </FormControl>
              </Box>

              <Box>
              <FormControl>
              <FormLabel>MiddleName</FormLabel>
              <Input onChange={(e)=>setMname(e.target.value)} name='mname' type="text" />
              </FormControl>
              </Box>

              <Box>
              <FormControl>
              <FormLabel>LastName</FormLabel>
              <Input onChange={(e)=>setLname(e.target.value)}  name='lname'type="text" />
              </FormControl>
            </Box>
            </HStack>

              <FormControl>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)} name='email' type="email" />
              </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input onChange={(e)=>setPhone(e.target.value)} name='phone' type="tel" />
            </FormControl>

            <FormControl>
              <FormLabel>Level</FormLabel>
              <Select onChange={(e)=>setLevel(e.target.value)}>
                  <option value = " ">Select Level</option>
                  <option value = "junior ">Junior</option>
                  <option value = "mid ">Mid</option>
                  <option value = "senior ">Senior</option>

              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Technology</FormLabel>
              <CheckboxGroup value={technology} onChange={(values)=>setTechnology(values)}>
                  <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  <Checkbox value = "ReactJs">ReactJs</Checkbox>
                  <Checkbox value = "DotNet ">Dot Net</Checkbox>
                  <Checkbox value = "QA">QA</Checkbox>
                  <Checkbox value = "DevOps ">DevOps</Checkbox>
                  </Stack>
              </CheckboxGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Refernces</FormLabel>
              <Input onChange={(e)=>setReference(e.target.value)} name='reference' type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Status</FormLabel>
              <Input onChange={(e)=>setStatus(e.target.value)} name='status' type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Expected Salary</FormLabel>
              <Input onChange={(e)=>setSalary(e.target.value)} name='salary' type="number" />
            </FormControl>

            <FormControl>
              <FormLabel>Resume</FormLabel>
              <Input onChange={(e)=>setResume(e.target.value)} name='resume' type="file" />
            </FormControl>
            <Stack spacing={4} direction={'row'} >
          <Button type='submit' 
          onClick={handleSubmit}
          value="Submit"
         
                bg={'#20BF55'}
                color={'white'}
                variant={'outline'}  
                _hover={{bg:'#ffffff', color:'#000000'}}
                >
                Submit</Button>
          <Link to="/">      
          <Button
                bg={'#20BF55'}
                color={'white'}
                variant={'outline'}  
                _hover={{bg:'#ffffff', color:'#000000'}}>Back</Button></Link>
            </Stack>    
          </Stack>
        </Box>        
      </Stack>
    </Flex>
    </form>
  );
}