import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ChakraProvider, Box, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import * as Yup from 'yup';

// export default function Forms(){

// }
const validationSchema = Yup.object({
  fname: Yup.string().required('First Name is required'),
  mname: Yup.string().required('Last Name is required'),
  lname: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

const Forms = () => {
  const initialValues = {
    fname: '',
    lname: '',
    mname: '',
    email: '',
    technology: '',
    level: '',
    phone: '',
    reference: '',
    status: '',
    salary:'',
    resume:'',
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };
  
  return(
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
    
    <Form>
        <Box>
          <Field name="fname">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.fname && form.touched.fname}>
                <FormLabel htmlFor="fname">First Name</FormLabel>
                <Input {...field} id="fname" placeholder="First Name" />
                <FormErrorMessage>{form.errors.fname}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Box>

        <Box>
          <Field name="lname">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.lname && form.touched.lname}>
                <FormLabel htmlFor="lname">Last Name</FormLabel>
                <Input {...field} id="lname" placeholder="Last Name" />
                <FormErrorMessage>{form.errors.lname}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Box>

        <Box>
          <Field name="email">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="Email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Box>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
  export default Forms;








































// // // import { Formik, Form, Field } from 'formik';
// // // import * as Yup from 'yup';
// // // import { FormControl, FormLabel, Input, Text} from '@chakra-ui/react';

// // // const initialValues = {
// // //   firstName: "",
// // //   middleName: "",
// // //   lastName: "",
// // //   email: "",
// // //   phoneNumber: "",
// // //   level: "",
// // //   technology: [],
// // //   references: "",
// // //   status: "",
// // //   expectedSalary: "",
// // //   resume: "",
// // // }

// // // const validationSchema = Yup.object().shape({
// // //   firstName: Yup.string()
// // //     .matches(/^[A-Za-z]+$/, 'First Name should contain only alphabets')
// // //     .required('First Name is required'),

// // //   middleName: Yup.string()
// // //     .matches(/^[A-Za-z]+$/, 'Middle Name should contain only alphabets'),

// // //   lastName: Yup.string()
// // //     .matches(/^[A-Za-z]+$/, 'Last Name should contain only alphabets')
// // //     .required('Last Name is required'),

// // //   phoneNumber: Yup.string()
// // //     .matches(/^\d{10}$/, 'Phone Number should contain only 10 digits'),
// // // });

// // // const handleSubmit = (values) => {
// // //   console.log(values);
// // // };

// // // const FormOne = () => {
// // //   return (
// // //     <Formik
// // //       initialValues={initialValues}
// // //       validationSchema={validationSchema}
// // //       onSubmit={handleSubmit}
// // //     >
// // //       {({ errors, touched }) => (
// // //         <Form>
// // //           <FormControl id="firstName">
// // //             <FormLabel>First Name</FormLabel>
// // //             <Input type="text" name="firstName" value="firstName" />
// // //             {errors.firstName && touched.firstName ? (
// // //               <Text color="red">{errors.firstName}</Text>
// // //             ) : null}
// // //           </FormControl>

// // //           <FormControl id="middleName">
// // //             <FormLabel>Middle Name</FormLabel>
// // //             <Input type="text" name="middleName" value="middleName" />
// // //             {errors.middleName && touched.middleName ? (
// // //               <Text color="red">{errors.middleName}</Text>
// // //             ) : null}
// // //           </FormControl>

// // //           <FormControl id="lastName">
// // //             <FormLabel>Last Name</FormLabel>
// // //             <Input type="text" name="lastName" value="lastName" />
// // //             {errors.lastName && touched.lastName ? (
// // //               <Text color="red">{errors.lastName}</Text>
// // //             ) : null}
// // //           </FormControl>

// // //           <FormControl id="phoneNumber">
// // //             <FormLabel>Phone Number</FormLabel>
// // //             <Input type="text" name="phoneNumber" value="phoneNumber" />
// // //             {errors.phoneNumber && touched.phoneNumber ? (
// // //               <Text color="red">{errors.phoneNumber}</Text>
// // //             ) : null}
// // //           </FormControl>

// // //           <button type="submit">Submit</button>
// // //         </Form>
// // //       )}
// // //     </Formik>
// // //   );
// // // };

// // // export default FormOne;
// // import { Formik, Form, Field } from "formik";
// // import { FormControl, FormLabel, Input, Button, FormErrorMessage } from "@chakra-ui/react";
// // import * as Yup from "yup";

// // const ValidationSchema = Yup.object().shape({
// //   firstName: Yup.string().required("First name is required"),
// //   lastName: Yup.string().required("Last name is required"),
// //   email: Yup.string().email("Invalid email address").required("Email is required"),
// //   password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
// // });

// // function AddForm() {
// //   return (
// //     <Formik
// //       initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
// //       validationSchema={ValidationSchema}
// //       onSubmit={(values, actions) => {
// //         setTimeout(() => {
// //           alert(JSON.stringify(values, null, 2));
// //           actions.setSubmitting(false);
// //         }, 1000);
// //       }}
// //     >
// //       {(props) => (
// //         <Form>
// //           <Field name="firstName">
// //             {({ field, form }) => (
// //               <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
// //                 <FormLabel htmlFor="firstName">First Name</FormLabel>
// //                 <Input {...field} id="firstName" placeholder="First Name" />
// //                 <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
// //               </FormControl>
// //             )}
// //           </Field>
// //           <Field name="lastName">
// //             {({ field, form }) => (
// //               <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
// //                 <FormLabel htmlFor="lastName">Last Name</FormLabel>
// //                 <Input {...field} id="lastName" placeholder="Last Name" />
// //                 <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
// //               </FormControl>
// //             )}
// //           </Field>
// //           <Field name="email">
// //             {({ field, form }) => (
// //               <FormControl isInvalid={form.errors.email && form.touched.email}>
// //                 <FormLabel htmlFor="email">Email</FormLabel>
// //                 <Input {...field} id="email" placeholder="Email" />
// //                 <FormErrorMessage>{form.errors.email}</FormErrorMessage>
// //               </FormControl>
// //             )}
// //           </Field>
// //           <Field name="password">
// //             {({ field, form }) => (
// //               <FormControl isInvalid={form.errors.password && form.touched.password}>
// //                 <FormLabel htmlFor="password">Password</FormLabel>
// //                 <Input {...field} id="password" type="password" placeholder="Password" />
// //                 <FormErrorMessage>{form.errors.password}</FormErrorMessage>
// //               </FormControl>
// //             )}
// //           </Field>
// //           <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
// //             Submit
// //           </Button>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // }
// // export default AddForm;