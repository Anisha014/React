import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure, 
} from '@chakra-ui/react';
import {
  FiHome,  
  FiMenu,
} from 'react-icons/fi';
import {SlEnvolopeLetter} from 'react-icons/sl';
import {BiGroup, BiTask, BiCalendar} from "react-icons/bi";
import { Link } from 'react-router-dom';


const LinkItems = [
    { name: 'Applicants', icon: FiHome, path: '/'},
    { name: 'Interview', icon: BiGroup, path: '/interview' },
    {name: 'Offer Letter',icon: SlEnvolopeLetter, path: '/offerLetter'},
    { name: 'Assessment', icon: BiTask, path: '/assessment' },
    {name: 'Calendar', icon: BiCalendar, path: '/calendar'}
   
    // { name: 'Formone', icon: BiGroup, path: '/formone' },
  ];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={'#ffffff'}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={'#0B4F6C'}
      color={'white'}
      borderRight="5px"
      borderRightColor={'#000000'}
      w={{ base: 'full', md: 60 }}
      pos="absolute"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="1.2rem" fontWeight="semi-bold">
          Amnil Technology<br /> CV Management
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
      <NavItem key={link.name} icon={link.icon}>
        <Link to={link.path}>{link.name}</Link>
      </NavItem>
    ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="sm"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#01baef',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
        };

        const MobileNav = ({ onOpen, ...rest }) => {
            return (
              <Flex
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 24 }}
                height="20"
                alignItems="center"
                bg={useColorModeValue('white', 'gray.900')}
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                justifyContent="flex-start"
                {...rest}
              >
                <IconButton
                  variant="outline"
                  onClick={onOpen}
                  aria-label="open menu"
                  icon={<FiMenu />}
                />
              </Flex>
            );
          };
          