import React, {useState} from 'react';
import {Flex, Box, FormControl, FormLabel, Input, Link, Stack, Button} from '@chakra-ui/react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

function Interview() {
  
  const [interviewDate, setInterviewDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
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
        

              <FormControl>
              <FormLabel>Applicant Name</FormLabel>
              <Input name='name' type="text" />
              </FormControl>

              <FormControl>
                  <FormLabel>Date</FormLabel>
                  <DatePicker
                    selected={interviewDate}
                    onChange={(date) => setInterviewDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select a date"
                  />
                </FormControl>

            <FormControl>
              <FormLabel>Interviewer Name</FormLabel>
              <Input  name='interviewer' type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Position</FormLabel>
              <Input  name='position' type="text" />
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
                Set Interview</Button>
          {/* <Link to="/">      
          <Button
                bg={'#20BF55'}
                color={'white'}
                variant={'outline'}  
                _hover={{bg:'#ffffff', color:'#000000'}}>Back</Button></Link> */}
            </Stack>    
          </Stack>
        </Box>        
      </Stack>
    </Flex>
    </form>
    
    </>
  )
}

export default Interview;