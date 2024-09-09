import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import { useState } from "react";
import { useBuget } from "./BugetContext";

const initialValues = {
  setIncome: "",
  setBuget: "",

}

const userSchema = yup.object().shape({
  setIncome: yup.number().required("required"),
  setBuget: yup.number().required("required"),
})

const Buget = () => {

  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setBuget } = useBuget();

  const handleFormSubmit = (values, { resetForm }) => {
    setLoading(true);
    setTimeout(() => {
      setBuget(values);
      console.log(values);
      setLoading(false);
      resetForm();
      alert("Your monthly buget is set");
      navigate("/E-Tracker.github.io/");
    }, 2000);
  };



  return (
    <Box
      m="20px"
      sx={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 1)", borderRadius: "10px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "5px",
          padding: "10px 20px",
        }}
      >
        <Tooltip>
          <Link to="/E-Tracker.github.io/" sx={{ cursor: "pointer" }}>
            <MdOutlineKeyboardBackspace
              style={{
                color: "#00e558",
                fontSize: "35px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                borderRadius: "10px",
                backgroundColor: "rgb(42, 40, 40)",
              }}
            />
          </Link>
        </Tooltip>

        <Typography
          sx={{ fontSize: "25px", fontWeight: "bold", color: "#ffeba7" }}
        >
          Set Buget
        </Typography>

        <Tooltip>
          <Link to="/E-Tracker.github.io/" sx={{ cursor: "pointer" }}>
            <IoIosNotifications
              style={{
                color: "#00e558",
                fontSize: "30px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                borderRadius: "10px",
                backgroundColor: "rgb(42, 40, 40)",
              }}
            />
          </Link>
        </Tooltip>
      </Box>

      <Box
        m="10px"
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
          Set Your Buget
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
          handleSubmit,
          // resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
            sx={{
              display:"grid",
              gridTemplateColumns:"",
              columnGap:"10px",
              rowGap:"15px",
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
            >
              <Box
               sx={{
                gridColumn: "span 1",
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
                 label="Set Income( Monthly )"
                 onBlur={handleBlur}
                 onChange={handleChange}
                 value={values.setIncome}
                 name="setIncome"
                 error={!!touched.setIncome && !!errors.setIncome}
                 helperText={touched.setIncome && errors.setIncome}
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
                aria-label="Set Income( Monthly)"
                />
              </Box>

              <Box
               sx={{
                gridColumn: "span 1",
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
                 label="Set Buget( Monthly Buget)"
                 onBlur={handleBlur}
                 onChange={handleChange}
                 value={values.setBuget}
                 name="setBuget"
                 error={!!touched.setBuget && !!errors.setBuget}
                 helperText={touched.setBuget && errors.setBuget}
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
                aria-label="Set Buget( Monthly Buget)"
                />
              </Box>

              <Box display="flex" justifyContent="center" mt="20px">
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#00e558" ,borderRadius:"15px", backgroundColor: "rgb(42, 40, 40)",boxShadow: "0 4px 10px rgba(0, 0, 0, 1)"}}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Seting..." : "Set"}
            </Button>
          </Box>
            </Box>
          </form>
        )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Buget;
