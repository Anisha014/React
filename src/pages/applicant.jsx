import { Box, Input, Button, Table, Tbody, Thead, Tr, Th, Td, SimpleGrid, ButtonGroup, IconButton, useBreakpointValue, AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,} from "@chakra-ui/react";
import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";


const Dashboard = () =>{
    const [searchQuery, setSearchQuery] = useState("");
    const [apiData, setApiData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);


    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        filterData();
    }, [apiData, searchQuery]);

    function getData(){
        axios.get('http://localhost:4000/Applicant').then((response) =>{
            setApiData(response.data);
        }).catch((err) =>{
            console.log(err);
        });
    }


    function handleDelete(id) {
        setDeleteItemId(id);
        setIsDeleteAlertOpen(true);
      }
    
      function confirmDelete() {
        axios
          .delete(`http://localhost:4000/Applicant/${deleteItemId}`)
          .then(() => {
            getData();
          })
          .catch((err) => {
            console.log(err);
          });
        setIsDeleteAlertOpen(false);
      }
    
      function cancelDelete() {
        setDeleteItemId(null);
        setIsDeleteAlertOpen(false);
      }
      const cancelRef = React.useRef();

    //  function handleDelete(id){
    //     axios.delete(`http://localhost:4000/Applicant/${id}`).then(() =>{
    //         getData();
    //  }).catch((err)=>{
    //     console.log(err);
    //  });
    // }
   
    //search filtering
    function filterData() {
        const filteredData = apiData.filter((item) => {
            const fullName = `${item.fname} ${item.mname} ${item.lname}`.toLowerCase();
            const technology = `${item.technology}`.toLowerCase();
            const status = `${item.status}`.toLowerCase();
            return (
                fullName.includes(searchQuery.toLowerCase()) ||
                technology.includes(searchQuery.toLowerCase()) ||
                status.includes(searchQuery.toLowerCase())
            );
        });
        setFilteredData(filteredData);
    }

    const tableSize = useBreakpointValue({ base: "sm", md: "md" });





    // const [cvListap, setCvList] = useState(
    //     JSON.parse(localStorage.getItem("cvlist"))
    // )
    // console.log(cvListap);
    // const handleSearchQueryChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };

    // const handleDelete = (index) => {
    //     const newCvList = [...cvListap];
    //     newCvList.splice(index, 1);
    //     setCvList(newCvList);
        
    // }
    // const handleSearch = () =>{
    //     const filteredcvList = apiData.filter(
    //         (item) =>
    //         item.name.toLowerCase().includes(searchQuery.toLowerCase())||
    //         item.technology.toLowerCase().includes(searchQuery.toLowerCase())||
    //         item.status.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    //     setCvList(filteredcvList);
    // };
return(
    <SimpleGrid>
    <Box>
      
       <Input type="text" mr={2} placeholder="Search CV" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} mb={10} borderWidth="3px"/>
       <Button bg={'#20BF55'} variant={'outline'} _hover={{bg: '#ffffff', color:'#000000'}} color={'white'}  mt={6}>Search</Button>
       <Link to="/addApplicant">
        <Button ml={2} mt={6}  bg={'#20BF55'} variant={'outline'}  _hover={{bg:'#ffffff', color:'#000000'}} color={'white'} onClick={() => setSearchQuery('')}>
            Add 
        </Button>
       </Link>

       {/* <Link to="/formone">
        <Button ml={2} mt={6} colorScheme="whatsapp">
            Validate 
        </Button>
       </Link> */}
            <Table varient = 'simple' display="contents" colorScheme='purple' style={{borderCollapse:"separate", borderSpacing:"1rem 0" }}>
                <Thead >
                    <Tr>
                        <Th>name</Th>
                        <Th>phone</Th>
                        <Th>email</Th>
                        <Th>technology</Th>
                        <Th>references</Th>
                        
                        <Th>salaryExpectaions</Th>
                        <Th>level</Th>
                        <Th>status</Th>
                        {/* <Th>experience</Th> */}
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((item, id) => (
                        <Tr key={id}>
                        <Td>{item.fname} {item.mname} {item.lname}</Td>
                        <Td>{item.phone}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.technology}</Td>
                        <Td>{item.reference}</Td>
                       
                        <Td>{item.salary}</Td>
                        <Td>{item.level}</Td> 
                        <Td>{item.status}</Td>
                        {/* <Td>{item.resume}</Td> */}  
                        <Td>
                            <ButtonGroup>
                                <IconButton as={Link}
                                to={`/edit`}
                                icon={<EditIcon/>}
                                aria-label="Edit"
                                />

                                <IconButton as={Link}
                                onClick={()=>handleDelete(item.id)}
                                icon={<DeleteIcon/>}
                                aria-label="Delete"
                                />
                            </ButtonGroup>
                        </Td>
                        </Tr>
                   ))}
                </Tbody>

                
<AlertDialog
  isOpen={isDeleteAlertOpen}
  leastDestructiveRef={cancelRef}
  onClose={cancelDelete}
>
  <AlertDialogOverlay>
    <AlertDialogContent>
      <AlertDialogHeader fontSize="lg" fontWeight="bold">
        Delete Confirmation
      </AlertDialogHeader>

      <AlertDialogBody>
        Are you sure you want to delete this item?
      </AlertDialogBody>

      <AlertDialogFooter>
        <Button ref={cancelRef} onClick={cancelDelete}>
          Cancel
        </Button>
        <Button bg={'#20BF55'}
                color={'white'}
                variant={'outline'}  
                _hover={{bg:'#ffffff', color:'#000000'}} onClick={confirmDelete} ml={3}>
          Delete
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogOverlay>
</AlertDialog>
            </Table> 
    </Box> 
    </SimpleGrid>
)};
export default Dashboard;