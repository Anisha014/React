import { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {signInWithPopup} from "firebase/auth"
import {auth, provider} from "./components/google/config"
import Dashboard from './pages/applicant';
import Sidebar from './components/sidebar';
import Forms from './components/form';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';
import AddForm from './components/file1';
import Edit from './components/edit';
import OfferLetter from './pages/offerLetter';
import Calendar from './pages/calendar';
import Interview from './pages/interview';


const Signin = () => {
  const [value, setValue] = useState("")
  const handleClick =() => {
      signInWithPopup(auth, provider).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem("email", data.user.email)
      });}
          useEffect(()=> {
              setValue(localStorage.getItem('email'))
          });
return(
<>
{value ? (
  <BrowserRouter>
  <NavBar />
  <Sidebar>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path="/addApplicant" element={<Forms/>}  />
      <Route path="/edit" element={<Edit />}  />
      <Route path="/offerLetter" element={<OfferLetter/>}/>
      <Route path="/calendar" element={<Calendar/>} />
      <Route path="/interview" element={<Interview/>} />
      {/* <Route path="/formone" element={<Formone />}  /> */}
      </Routes>
      </Sidebar>
    
  
  </BrowserRouter>
) : (
  <Center p={80}>
      <Button
      onClick={handleClick}
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
) 
}
</>
);};
function App() {
  return (
    <>
    <Signin/>
    </>
  );
}

export default App;
