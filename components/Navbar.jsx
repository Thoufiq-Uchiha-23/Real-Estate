import Link from "next/link";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { Flex, Box, Spacer, Button, IconButton } from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <Flex p={2} borderBottom="1px" borderColor="gray.100" alignItems="center">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" passHref>
          <Box px={2}>Realtor</Box>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              <IoMenu className="w-[40px] h-[40px] border-none"/>
            </Button>
          </MenuTrigger>
          <MenuContent>
            <Link href="/" passHref>
              <MenuItem><FcHome />Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem><BsSearch />Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem><FcAbout />Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem><FiKey />Rent Property</MenuItem>
            </Link>
          </MenuContent>
        </MenuRoot>
      </Box>
    </Flex>
    // <div>Hello World</div>
  );
};

export default Navbar;
