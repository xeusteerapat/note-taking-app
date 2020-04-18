import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/core';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon
} from '@chakra-ui/core';

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
};

const Navbar = () => {
  return (
    <Box
      bg="#48BB78"
      w="100%"
      p={2}
      color="white"
      mx="auto"
      display={{ md: 'flex' }}
    >
      <Box maxW="1200px" mx="auto" flexShrink="0">
        <Breadcrumb
          spacing="8px"
          separator={<Icon color="gray.300" name="chevron-right" />}
        >
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <Link style={linkStyle}>
                <Icon name="edit" size="24px" /> Awesom Note
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link style={linkStyle}>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link style={linkStyle}>Create Note</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link style={linkStyle}>Create accout</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </Box>
  );
};

export default Navbar;
