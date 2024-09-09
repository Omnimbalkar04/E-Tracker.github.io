/* eslint-disable no-unused-vars */

import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

// Initial Values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePicture: null,
};

// User schema: Use for validation by using yup
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid Email").required("required"),
  password: yup
    .string()
    .required("required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  profilePicture: yup.mixed().required("A Profile picture is required"),
});

const Signup = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleFormSubmit = (values, { resetForm }) => {
    setLoading(true);
    setTimeout(() => {
      setUser(values);
      setLoading(false);
      resetForm();
      alert("Login Details is submitted");
      navigate("/");
    }, 2000);
  };

  const log = () => {
    navigate("/login");
  }

  return (
    <Box
      m="20px"
      // marginBottom="20px"
      sx={{
        borderRadius: "8px",
        padding: "40px 20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
      }}
    >
      <Typography
        fontWeight="bold"
        color="#ffeba7"
        sx={{
          mb: "20px",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Create <span style={{ color: "#00e558" }}>E</span>-Track Account
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          handleSubmit,
          // resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              columnGap="10px"
              rowGap="15px"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  InputProps={{
                    style: { color: "aliceblue" },
                    // style: { color: "#000000" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#00e558" },
                  }}
                  aria-label="First Name"
                />
              </Box>

              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  InputProps={{
                    // style: { color: "#000000" },
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    // style: { color: "#1DA1F2" },
                    style: { color: "#00e558" },
                  }}
                  aria-label="Last Name"
                />
              </Box>

              <Box
                sx={{
                  gridColumn: "span 4",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    // style: { color: "#000000" },
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    // style: { color: "#1DA1F2" },
                    style: { color: "#00e558" },
                  }}
                  aria-label="Email"
                />
              </Box>

              <Box
                sx={{
                  gridColumn: "span 4",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Set Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    // style: { color: "#000000" },
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    // style: { color: "#1DA1F2" },
                    style: { color: "#00e558" },
                  }}
                  aria-label="Set Password"
                />
              </Box>

              <Box
                sx={{
                  gridColumn: "span 4",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={!!touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  InputProps={{
                    // style: { color: "#000000" },
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    // style: { color: "#1DA1F2" },
                    style: { color: "#00e558" },
                  }}
                  aria-label="Confirm Password"
                />
              </Box>

              <Box
                sx={{
                  gridColumn: "span 4",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                }}
              >
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-profile-picture"
                  type="file"
                  onChange={(event) => {
                    setFieldValue(
                      "profilePicture",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                <label htmlFor="upload-profile-picture">
                  <Box
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ color: "#00e558" }}
                    component="span"
                  >
                    Upload Photo
                  </Box>
                </label>
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                variant="contained"
                sx={{ color: "#00e558" ,borderRadius:"15px", backgroundColor: "rgb(42, 40, 40)",boxShadow: "0 4px 10px rgba(0, 0, 0, 1)"}}
                // sx={{ color: "#ffffff", backgroundColor: "#1DA1F2" }}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Creating..." : "Create New User"}
              </Button>
            </Box>

          </form>
        )}
      </Formik>
      <Box
            sx={{
              mt:"15px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              marginBottom:"20px"
            }} 
            >
              <Typography 
              sx={{ 
                fontSize:"20px"
              }}
              >
                Already have an account?
              </Typography>

              <Button
              onClick={log} 
              sx={{
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                color:"#00e558",
                marginTop:"10px"
              }}
              >
                Login
              </Button>
            </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "50px",
        }}
      >
        <Typography
          fontSize="bold"
          margin-bottom="50px"
          color="aliceblue"
          marginTop="20px"
        >
          MADE WITH <FaHeart color="#ffeba7" /> BY <span style={{ color: "#00e558" }}>E</span>-TRACK
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
