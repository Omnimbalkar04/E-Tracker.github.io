import { Box, Button, Card, CardContent, Tooltip as MuiTooltip, Typography } from "@mui/material";
import { BiPieChart, BiPlusCircle, BiRupee } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { MdTrendingUp } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";
import { BsSendArrowUpFill } from "react-icons/bs";
import { useBuget } from "./SmallComponents/BugetContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';



const COLORS = ["#00e558",'#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseList = () => {

  const {ecards: userExpense} = useContext(ExpenseContext);
 const post = [...userExpense];
  const navigate = useNavigate();
  const { buget } = useBuget();

  const totalSpent = post.reduce((total, ecard) => total + (parseFloat(ecard.enterAmount) || 0), 0);

  const data = [
    { name: 'Spent', value: totalSpent },
    { name: 'Remaining', value: (parseFloat(buget.setBuget) || 0) - totalSpent},
  ]


  const renderCustomLabel = ({ cx, cy }) => {
    return (
      <text x={cx} y={cy} fill="#00e558" textAnchor="middle" dominantBaseline="central">
        <tspan x={cx} dy="0em" fontSize="18px" fontWeight="bold">{`₹${totalSpent}`}</tspan>
        <tspan x={cx} dy="1.5em" fontSize="14px" fill="#888">{`Spent`}</tspan>
      </text>
    );
  };


  const add = () => {
    navigate("/add-expense");
  }
  return (
    <Box m="20px" 
    sx={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 1)", borderRadius:"10px", height:"100%"}}
    >
      <Box
      sx={{ display:"flex", justifyContent:"space-between", mt:"5px", padding:"10px 20px",}} 
      >
        <MuiTooltip title="Back">
          <Link to="/E-Tracker.github.io/" sx={{ cursor:"pointer"}}>
          <MdOutlineKeyboardBackspace 
            style={{ color:"#00e558", fontSize:"35px",boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
              borderRadius: "10px",backgroundColor: "rgb(42, 40, 40)",
              }}  
          />
          </Link>
        </MuiTooltip>

        <Typography
        sx={{ fontSize:"25px", fontWeight:"bold", color:"#ffeba7"}}
        >Your Expense</Typography>

        <MuiTooltip title="Notification">
          <Link to="/E-Tracker.github.io/" sx={{ cursor:"pointer"}}>
          <IoIosNotifications 
           style={{ color:"#00e558", fontSize:"30px",boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
            borderRadius: "10px",backgroundColor: "rgb(42, 40, 40)"}} 
          />
          </Link>
        </MuiTooltip>
      </Box>
      <Box 
      sx={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" , gap:"12px",}}
      >
        <Typography
        sx={{ color:"rgb(152, 150, 150)" }} 
        >
          Spent in <span style={{ color:"aliceblue"}}>Augest</span> 
        </Typography>

        <Box mt="10px"
        sx={{ display:"flex", justifyContent:"center", alignItems:"center"}} 
        >
          <PieChart width={200} height={250}>
            <Pie
            data={data}
            cy="50%"
            cx="50%"
            // labelLine={false}
            // outerRadius={80}
            // fill="#8884d8"
            // dataKey="value"
          //   cx={120}
          // cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#00C49F"
          paddingAngle={5}
          dataKey="value"
          label={renderCustomLabel}
            >
              { data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend 
              layout="horizontal"  // Set the layout as "horizontal"
              verticalAlign="bottom"  // Align the legend at the bottom
              align="center"  // Center the legend
            />
          </PieChart>
        </Box>

        <Box
          mb="20px"
          display="flex"
          justifyContent="space-between"
          sx={{ borderBottom: "1px solid rgb(152, 150, 150)", pb: 1,  width:"90%", margin:"15px" }}
        >
          <Box>
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              Income
            </Typography>
            <Typography variant="body2" color="aliceblue" textAlign="center">
            <BiRupee /> {buget.setIncome || "0"}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              Buget
            </Typography>
            <Typography variant="body2" color="aliceblue" textAlign="center">
            <BiRupee /> {buget.setBuget || "0"}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              Safe to spend
            </Typography>
            <Typography variant="body2" color="aliceblue" textAlign="center">
             <BiRupee /> {(buget.setBuget / 28).toFixed(0)} /day
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box m="20px"
      sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"15px",

      }}
      >
      <Button
              type="submit"
              variant="contained"
              sx={{
                // fontWeight:"bold" ,
                color:"#ffeba7",
                borderRadius:"20px",
                // backgroundColor:"#151B54",
                backgroundColor: "rgba(42, 40, 40, 0.639)",
                mt:"5px",
                padding:"5px 25px",
                fontSize:"13px",
                gap:"3px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)"
              }}
              ><MdTrendingUp  color="blue" fontSize="25px"/>Trending</Button>
              <Button
              type="submit"
              variant="contained"
              sx={{
                // fontWeight:"bold" ,
                color:"#ffeba7",
                borderRadius:"20px",
                background: "rgba(42, 40, 40, 0.639)",
                mt:"5px",
                padding:"5px 35px",
                fontSize:"13px",
                gap:"3px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)"
              }}
              ><BiPieChart color="#00e558" fontSize="25px" />Catagories</Button>
      </Box>

      <Box m="20px" sx={{ mt:"15px" , boxShadow: "0 4px 10px rgba(0, 0, 0, 1)", borderRadius:"10px", marginBottom:"20px"}}>
        <Box m="20px"  sx={{ display:"flex", justifyContent:"space-between", 
         }}>
          <Typography
          mt="10px"
          sx={{ fontSize:"20px", fontWeight:"bold", color:"#ffeba7",}}
          
          >Recent Transactions</Typography>
          <Button
          
             type="submit"
             variant="contained"
             sx={{
               // fontWeight:"bold" ,
               color:"#ffeba7",
               borderRadius:"20px",
               background: "rgba(42, 40, 40, 0.639)",
               mt:"10px",
              //  padding:"5px 25px",
               fontSize:"13px",
               gap:"3px",
               boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
               cursor:"pointer"
             }}
             onClick={add}
          ><BiPlusCircle color="#00e558" fontSize="20px"/>Add</Button>
        </Box>
        <Box m="20px">
          { post.length === 0 ? (
            <Typography 
           sx={{ fontSize:"20px", fontWeight:"bold", color:"#ffeba7", margin:"10px", textAlign:"center"}}
          > There is no Transaction</Typography> 
        ) : (
          post.map((ecard, index) => (
            <Card
            key={index} 
            sx={{ mb: "10px", boxShadow: "0 0 5px #00e558" ,backgroundColor:"#0d1117", borderRadius:"10px"}}
            
            >
              <CardContent
              
              sx={{
                display:"flex",
                justifyContent:"space-between",
                margin:"10px"
              }}
              >

              <Box
                sx={{
                  display: "flex",
                  flexDirection:"column",
                }}
              >
                <Typography
                  sx={{fontSize:"20px" , color:"#00e558"}}
                >
                  {" "}
                  {ecard.paid || 'paid' }
                </Typography>

                <Typography
                  sx={{ color:"#00e558" }}
                >
                  {" "}
                  {ecard.reason || 'reason' }
                </Typography>
              </Box>

              <Box 
              sx={{
                display:"flex",
                color:"#00e558",
                // justifyContent:"space-evenly"
              }}>
                <Box
                marginTop="5px"
                sx={{
                  display:"flex",
                  flexDirection:"column",
                }}
                >
                  <Typography
                  sx={{ color:"rgb(152, 150, 150)" , textAlign:"center" }}
                >
                  {" "}
                  {ecard.category || 'category' }
                </Typography>

                <Typography
                  sx={{fontWeight:"bold", color:"#00e558"}}
                  gutterBottom
                  >
                   <BiRupee /> {" "}
                    {ecard.enterAmount || 'oe' }
                  </Typography>
                </Box>
                <BsSendArrowUpFill />
                </Box>
                
              </CardContent>
            </Card>
          ))
        )}
           

        </Box>
      </Box>


      <Box
        sx={{
          marginTop:"20px",
          display:"flex",
          justifyContent:"center",
          alignContent:"center",
          marginBottom:"50px",
          height:"100%"
        }}
        >
        <Typography
        fontSize="bold"
        margin-bottom="50px"
        color="aliceblue"
        >
          MADE WITH <FaHeart color="#ffeba7" /> BY <span style={{ color: "#00e558" }}>E</span>-TRACK
        </Typography>
        </Box>
    </Box>
  )
}

export default ExpenseList;