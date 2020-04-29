import React from 'react';
import { Box } from '@chakra-ui/core';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button
} from '@chakra-ui/core';

const Register = () => {
  return (
    <div>
      <Box bg="gray.300" w="600px" mx="auto" color="gray.600">
        <h2 style={{ textAlign: 'center', paddingTop: '2rem' }}>
          Create your account
        </h2>
        <FormControl w="450px" mx="auto">
          <Stack spacing={2}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input placeholder="Enter your name" border="none" />
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input placeholder="Enter email" border="none" />
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input placeholder="Enter password" border="none" type="password" />
            <FormLabel htmlFor="email">Confirm password</FormLabel>
            <Input placeholder="Enter password" border="none" type="password" />
          </Stack>
          <Button variantColor="green" my={4} border="none">
            Submit
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default Register;
