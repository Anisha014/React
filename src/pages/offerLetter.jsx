import React, {useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { Button, Center } from '@chakra-ui/react';

function OfferLetter() {
  const [value, setValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <>
     <ReactQuill theme="snow" value={value} onChange={setValue} />

     <Center mt={12}>
     <Button type='submit' 
          onClick={handleSubmit}
          value="Submit"
         
                bg={'#20BF55'}
                color={'white'}
                variant={'outline'}  
                _hover={{bg:'#ffffff', color:'#000000'}}
                >Send</Button>
                </Center>
    </>  
  )
}

export default OfferLetter;