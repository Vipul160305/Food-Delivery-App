import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  });

  const onSubmit = (values) => {
    console.log("Signup Data:", values);
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />

          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <label>Confirm Password:</label>
          <Field type="password" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
