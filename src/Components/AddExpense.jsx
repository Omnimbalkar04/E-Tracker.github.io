/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  Box,
  Button,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  Grid
} from "@mui/material";
import { IoIosNotifications } from "react-icons/io";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { LiaCoinsSolid } from "react-icons/lia";
import { BiCategory, BiRupee } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { BsFillFuelPumpFill} from "react-icons/bs";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useContext, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";
import { useBuget } from "./SmallComponents/BugetContext";

const initialValues = {
  enterAmount: "",
  reason:"",
  paid:"",
  category:"",

}

const userSchema = yup.object().shape({
  enterAmount: yup.number().required("required").typeError("Amount must be a number"),
  reason: yup.string().required("required"),
  paid: yup.string().required("required"),
  category: yup.string().required("required"),
})

const AddExpense = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [loading, setLoading] = useState(false);
  const { ecards, setEcard } = useContext(ExpenseContext);
  const navigate = useNavigate();
  const { buget } = useBuget();

  const { ecards: userExpense } = useContext(ExpenseContext);
  const post = [...userExpense];

  const totalSpent = post.reduce(
    (total, ecard) => total + (parseFloat(ecard.enterAmount) || 0),
    0
  );
  const totalIncome = buget.setIncome;
  const balance = totalIncome - totalSpent;

const handleFormSubmit = (values, {resetForm}) => {
  setLoading(true);
  setTimeout(() => {
    setEcard((preveCard) => [values, ...preveCard]);
    setLoading(false);
    resetForm();
    alert("your expense is added");
    navigate("/expense");
  },2000 );
}
  return (
    <Box m="10px"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "5px",
          fontSize: "35px",
          padding: "10px 25px",
        }}
      >
        <Tooltip title="Back">
          <Link to="/" sx={{ cursor: "pointer" }}>
            <MdOutlineKeyboardBackspace 
             style={{ color:"#00e558", fontSize:"35px",boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
              borderRadius: "10px",backgroundColor: "rgb(42, 40, 40)",
              }} 
             />
          </Link>
        </Tooltip>

        <Typography
          fontWeight="bold"
          color="#ffeba7"
          sx={{
            fontSize: "25px",
          }}
        >
          Add Expenses
        </Typography>

        <Tooltip title="Notification">
          <Link to="/" sx={{ cursor: "pointer" }}>
            <IoIosNotifications 
            style={{ color:"#00e558", fontSize:"30px",boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
              borderRadius: "10px",backgroundColor: "rgb(42, 40, 40)"}} 
             />
          </Link>
        </Tooltip>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "18px",
        }}
      >
        <Typography>Current Balance</Typography>
        <Typography
        textAlign="center"
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            color:"#00e558",
          }}
        >
         <BiRupee  /> {balance} 
        </Typography>
        <Typography>increase of 30% from last month</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          // boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
          boxShadow: "0 0 5px #00e558",
          mt: "18px",
          m: "20px",
          mb:"30px",
          borderRadius: "20px",
        }}
      >
        <Typography fontWeight="bold" sx={{ mt: "15px", textAlign: "center", fontSize:"25px" }}>
          Cash Spend
        </Typography>
        <Formik 
        onSubmit={handleFormSubmit}
        validationSchema={userSchema}
        initialValues={initialValues}
        > 
        {({
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange,
        resetForm,

      }) => (
        <form
        onSubmit={handleSubmit} 
        >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                gap: "15px",
                "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
                mt: "10px",
                m: "25px",
              }}
            >
              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  alignItems: "center",
                  // boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                  boxShadow: "0 0 5px #00e558",
                  borderRadius: "25px",
                  mt: "10px",
                }}
              >
                <RiMoneyRupeeCircleFill 
                style={{ color:"#00e558", marginRight:"5px" , fontSize:"30px", marginLeft:"10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                  borderRadius: "10px",backgroundColor: "rgb(42, 40, 40)"}} 
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Enter amount"
                  name="enterAmount"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.enterAmount}
                  error={!!touched.enterAmount && !!errors.enterAmount}
                  helperText={touched.enterAmount && errors.enterAmount}
                  InputProps={{
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffeba7" },
                  }}
                ></TextField>
              </Box>
              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  alignItems: "center",
                  // boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                  boxShadow: "0 0 5px #00e558",
                  borderRadius: "25px",
                  mt: "10px",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="What's this is for?"
                  name="reason"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.reason}
                  error={!!touched.reason && !!errors.reason}
                  helperText={touched.reason && errors.reason}
                  InputProps={{
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffeba7" },
                  }}
                ></TextField>
                
              </Box>

              <Box
                sx={{
                  gridColumn: "span 2",
                  display: "flex",
                  alignItems: "center",
                  // boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                  boxShadow: "0 0 5px #00e558",
                  borderRadius: "25px",
                  mt: "10px",
                }}
              >
                <LiaCoinsSolid
                style={{ color:"#00e558", marginRight:"5px" , fontSize:"30px", marginLeft:"10px",  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                  borderRadius: "10px",backgroundColor: "rgb(42, 40, 40)"}} 
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Paid to"
                  name="paid"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.paid}
                  error={!!touched.paid && !!errors.paid}
                  helperText={touched.paid && errors.paid}
                  InputProps={{
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffeba7" },
                  }}
                ></TextField>
                
              </Box>
              
              <Typography
                fontWeight="bold"
                sx={{ mt: "10px", textAlign: "center",fontSize:"25px" }}
              >
                Category
              </Typography>
              <Box
               sx={{
                gridColumn: "span 2",
                display: "flex",
                // justifyContent:"center",
                alignItems: "center",
                // boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                boxShadow: "0 0 5px #00e558",
                borderRadius: "25px",
                mt: "10px",
                gap:"5px"
              }}
              >  
              <BiCategory
                style={{ color:"#00e558", marginLeft:"15px" , fontSize:"30px", backgroundColor: "rgb(42, 40, 40)", borderRadius:"10x"}} 
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Payment Category:- Cash or Online"
                  name="category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                  error={!!touched.category && !!errors.category}
                  helperText={touched.category && errors.category}
                  InputProps={{
                    style: { color: "aliceblue" },
                    sx: {
                      borderRadius: "8px",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#ffeba7" },
                  }}
                ></TextField>
                
              </Box>


                {/* Category Grid */}
                <Grid container spacing={1} sx={{ mt: "10px", justifyContent: "center" , gap:"15px" }}>
                {[
                  {label: "Food", icon: <MdFoodBank />},
                  {label: "Fuel",icon: <BsFillFuelPumpFill />},
                  {label: "Shopping", icon: <RiShoppingBag3Fill />},
                  {label: "Travel",icon: <MdOutlineTravelExplore />},
                  {label: "Entertainment", icon: <PiTelevisionFill />},
                  {label: "Groceries", icon: <MdLocalGroceryStore />},
                  {label: "EMI", icon: <FaAmazonPay />},
                  {label: "Investment", icon: <MdAccountBalance />},
                  {label: "Health", icon: <MdHealthAndSafety />},
                ].map((category) => (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    key={category.label}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                      borderRadius: "20px",
                      cursor: "pointer",
                      mt:"5px"
                    }}
                  >
                    {category.icon}
                    <Typography sx={{ mt: "5px", color: "#ffeba7",fontSize:"15px" }}>{category.label}</Typography>
                  </Grid>
                ))}

              </Grid>

              <Box
              sx={{
                m:"20px",
                gridColumn:"span 2",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                gap:"15px"
              }} 
              >
              <Button
              type="submit"
              variant="outlined"
              sx={{
                // fontWeight:"bold" ,
                color:"#ffeba7",
                borderRadius:"20px",
                // backgroundColor:"#151B54",
                backgroundColor: "rgba(42, 40, 40, 0.639)",
                mt:"5px",
                padding:"8px 25px",
                fontSize:"18px",
                
              }}
              onClick={resetForm}
              >Cancel</Button>
              <Button
              type="submit"
              variant="contained"
              sx={{
                // fontWeight:"bold" ,
                color:"#ffeba7",
                borderRadius:"20px",
                background: "linear-gradient(100deg, #1a91da, #00e558)",
                mt:"5px",
                padding:"8px 35px",
                fontSize:"18px"
              }}
              disabled={loading}
              >{loading ? "Adding.." : "Add" }</Button>
              </Box>
            </Box>
          </form>
        )}
        </Formik>
        <Box
        sx={{
          display:"flex",
          justifyContent:"center",
          alignContent:"center",
          marginBottom:"70px",
        }}
        >
        <Typography
        fontSize="bold"
        color="aliceblue"
        >
          MADE WITH <FaHeart color="#ffeba7" /> BY <span style={{ color: "#00e558" }}>E</span>-TRACK
        </Typography>
        </Box>
      </Box>
      
    </Box>
  );
};

export default AddExpense;



/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import {
//   Box,
//   Button,
//   TextField,
//   Tooltip,
//   Typography,
//   useMediaQuery,
//   Grid
// } from "@mui/material";
// import { IoIosNotifications } from "react-icons/io";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { LiaCoinsSolid } from "react-icons/lia";
// import { BiCategory } from "react-icons/bi";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { MdFoodBank, MdOutlineTravelExplore, MdLocalGroceryStore, MdAccountBalance, MdHealthAndSafety } from "react-icons/md";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { RiShoppingBag3Fill } from "react-icons/ri";
// import { PiTelevisionFill } from "react-icons/pi";
// import { FaAmazonPay, FaHeart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { Formik } from "formik";
// import * as yup from "yup";
// import { useContext, useState } from "react";
// import { ExpenseContext } from "./ExpenseContext";

// const initialValues = {
//   enterAmount: "",
//   reason: "",
//   paid: "",
//   category: "",
// };

// const userSchema = yup.object().shape({
//   enterAmount: yup.number().required("required").typeError("Amount must be a number"),
//   reason: yup.string().required("required"),
//   paid: yup.string().required("required"),
//   category: yup.string().required("required"),
// });

// const AddExpense = () => {
//   const isNonMobile = useMediaQuery("(min-width: 600px)");
//   const [loading, setLoading] = useState(false);
//   const { ecards, setEcard } = useContext(ExpenseContext);
//   const navigate = useNavigate();

//   const handleFormSubmit = (values, { resetForm }) => {
//     setLoading(true);
//     setTimeout(() => {
//       setEcard((prevCards) => [values, ...prevCards]);
//       setLoading(false);
//       resetForm();
//       alert("Your expense is added");
//       navigate("/expense");
//     }, 2000);
//   };

//   const handleCategorySelect = (category, setFieldValue) => {
//     setFieldValue("category", category);
//   };

//   return (
//     <Box m="10px">
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           mt: "5px",
//           fontSize: "35px",
//           padding: "10px 25px",
//         }}
//       >
//         <Tooltip title="Back">
//           <Link to="/" sx={{ cursor: "pointer" }}>
//             <MdOutlineKeyboardBackspace
//               style={{
//                 color: "#00e558",
//                 fontSize: "35px",
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                 borderRadius: "10px",
//                 backgroundColor: "rgb(42, 40, 40)",
//               }}
//             />
//           </Link>
//         </Tooltip>

//         <Typography
//           fontWeight="bold"
//           color="#ffeba7"
//           sx={{
//             fontSize: "25px",
//           }}
//         >
//           Add Expenses
//         </Typography>

//         <Tooltip title="Notification">
//           <Link to="/" sx={{ cursor: "pointer" }}>
//             <IoIosNotifications
//               style={{
//                 color: "#00e558",
//                 fontSize: "30px",
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                 borderRadius: "10px",
//                 backgroundColor: "rgb(42, 40, 40)",
//               }}
//             />
//           </Link>
//         </Tooltip>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           mt: "18px",
//         }}
//       >
//         <Typography>Current Balance</Typography>
//         <Typography
//           sx={{
//             fontSize: "35px",
//             fontWeight: "bold",
//             color: "#00e558",
//           }}
//         >
//           $50,00,000
//         </Typography>
//         <Typography>Increase of 30% from last month</Typography>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//           mt: "18px",
//           m: "20px",
//           mb: "30px",
//           borderRadius: "20px",
//         }}
//       >
//         <Typography fontWeight="bold" sx={{ mt: "15px", textAlign: "center", fontSize: "25px" }}>
//           Cash Spend
//         </Typography>
//         <Formik onSubmit={handleFormSubmit} validationSchema={userSchema} initialValues={initialValues}>
//           {({ values, errors, touched, handleSubmit, handleBlur, handleChange, resetForm, setFieldValue }) => (
//             <form onSubmit={handleSubmit}>
//               <Box
//                 sx={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
//                   gap: "15px",
//                   "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
//                   mt: "10px",
//                   m: "25px",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     gridColumn: "span 2",
//                     display: "flex",
//                     alignItems: "center",
//                     boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                     borderRadius: "25px",
//                     mt: "10px",
//                   }}
//                 >
//                   <RiMoneyRupeeCircleFill
//                     style={{
//                       color: "#00e558",
//                       marginRight: "5px",
//                       fontSize: "30px",
//                       marginLeft: "10px",
//                       boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                       borderRadius: "10px",
//                       backgroundColor: "rgb(42, 40, 40)",
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="number"
//                     label="Enter amount"
//                     name="enterAmount"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.enterAmount}
//                     error={!!touched.enterAmount && !!errors.enterAmount}
//                     helperText={touched.enterAmount && errors.enterAmount}
//                     InputProps={{
//                       style: { color: "aliceblue" },
//                       sx: {
//                         borderRadius: "8px",
//                       },
//                     }}
//                     InputLabelProps={{
//                       style: { color: "#ffeba7" },
//                     }}
//                   ></TextField>
//                 </Box>
//                 <Box
//                   sx={{
//                     gridColumn: "span 2",
//                     display: "flex",
//                     alignItems: "center",
//                     boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                     borderRadius: "25px",
//                     mt: "10px",
//                   }}
//                 >
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="What's this is for?"
//                     name="reason"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.reason}
//                     error={!!touched.reason && !!errors.reason}
//                     helperText={touched.reason && errors.reason}
//                     InputProps={{
//                       style: { color: "aliceblue" },
//                       sx: {
//                         borderRadius: "8px",
//                       },
//                     }}
//                     InputLabelProps={{
//                       style: { color: "#ffeba7" },
//                     }}
//                   ></TextField>
//                 </Box>

//                 <Box
//                   sx={{
//                     gridColumn: "span 2",
//                     display: "flex",
//                     alignItems: "center",
//                     boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                     borderRadius: "25px",
//                     mt: "10px",
//                   }}
//                 >
//                   <LiaCoinsSolid
//                     style={{
//                       color: "#00e558",
//                       marginRight: "5px",
//                       fontSize: "30px",
//                       marginLeft: "10px",
//                       boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                       borderRadius: "10px",
//                       backgroundColor: "rgb(42, 40, 40)",
//                     }}
//                   />
//                   <TextField
//                     fullWidth
//                     variant="filled"
//                     type="text"
//                     label="Paid for"
//                     name="paid"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     value={values.paid}
//                     error={!!touched.paid && !!errors.paid}
//                     helperText={touched.paid && errors.paid}
//                     InputProps={{
//                       style: { color: "aliceblue" },
//                       sx: {
//                         borderRadius: "8px",
//                       },
//                     }}
//                     InputLabelProps={{
//                       style: { color: "#ffeba7" },
//                     }}
//                   ></TextField>
//                 </Box>
//               </Box>

//               <Box sx={{ mt: "20px", textAlign: "center", color: "#ffeba7" }}>
//                 <Typography fontWeight="bold">Category</Typography>
//               </Box>
//               <Grid container spacing={2} sx={{ mt: "10px" }}>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("food", setFieldValue)}>
//                     <Tooltip title="Food">
//                       <MdFoodBank
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("travel", setFieldValue)}>
//                     <Tooltip title="Travel">
//                       <MdOutlineTravelExplore
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("grocery", setFieldValue)}>
//                     <Tooltip title="Grocery">
//                       <MdLocalGroceryStore
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("bank", setFieldValue)}>
//                     <Tooltip title="Bank">
//                       <MdAccountBalance
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("health", setFieldValue)}>
//                     <Tooltip title="Health">
//                       <MdHealthAndSafety
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("fuel", setFieldValue)}>
//                     <Tooltip title="Fuel">
//                       <BsFillFuelPumpFill
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("shopping", setFieldValue)}>
//                     <Tooltip title="Shopping">
//                       <RiShoppingBag3Fill
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//                 <Grid item xs={3}>
//                   <Button onClick={() => handleCategorySelect("entertainment", setFieldValue)}>
//                     <Tooltip title="Entertainment">
//                       <PiTelevisionFill
//                         style={{
//                           color: "#00e558",
//                           fontSize: "35px",
//                           boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                           borderRadius: "50%",
//                           backgroundColor: "rgb(42, 40, 40)",
//                         }}
//                       />
//                     </Tooltip>
//                   </Button>
//                 </Grid>
//               </Grid>

//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-evenly",
//                   mt: "20px",
//                   mb: "20px",
//                   alignItems: "center",
//                 }}
//               >
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   disabled={loading}
//                   sx={{
//                     fontWeight: "bold",
//                     padding: "5px 25px",
//                     borderRadius: "10px",
//                     boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                     backgroundColor: "#00e558",
//                     color: "#ffeba7",
//                   }}
//                 >
//                   {loading ? "Adding..." : "Add"}
//                 </Button>

//                 <Button
//                   onClick={resetForm}
//                   variant="outlined"
//                   color="secondary"
//                   sx={{
//                     fontWeight: "bold",
//                     padding: "5px 25px",
//                     borderRadius: "10px",
//                     boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
//                     backgroundColor: "rgb(42, 40, 40)",
//                     color: "#ffeba7",
//                   }}
//                 >
//                   Cancel
//                 </Button>
//               </Box>
//             </form>
//           )}
//         </Formik>
//       </Box>
//     </Box>
//   );
// };

// export default AddExpense;
