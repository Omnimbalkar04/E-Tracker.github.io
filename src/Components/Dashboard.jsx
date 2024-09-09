import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Tooltip as MuiTooltip,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { IoIosNotifications } from "react-icons/io";
import { useBuget } from "./SmallComponents/BugetContext";
import { BiPlusCircle, BiRupee } from "react-icons/bi";
import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";
import { Cell, Pie, PieChart, Tooltip, Legend } from "recharts";
import { FaHeart } from "react-icons/fa";
import { BsSendArrowUpFill } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";

const COLORS = ["#00e558", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const { user } = useUser();
  const { buget } = useBuget();
  const navigate = useNavigate();

  const { ecards: userExpense } = useContext(ExpenseContext);
  const post = [...userExpense];

  const totalSpent = post.reduce(
    (total, ecard) => total + (parseFloat(ecard.enterAmount) || 0),
    0
  );
  const totalIncome = buget.setIncome;
  const balance = totalIncome - totalSpent;

  const data = [
    { name: "Spent", value: totalSpent },
    {
      name: "Remaining",
      value: (parseFloat(buget.setBuget) || 0) - totalSpent,
    },
  ];

  const renderCustomLabel = ({ cx, cy }) => {
    return (
      <text
        x={cx}
        y={cy}
        fill="#00e558"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan
          x={cx}
          dy="0em"
          fontSize="18px"
          fontWeight="bold"
        >{`₹${totalSpent}`}</tspan>
        <tspan x={cx} dy="1.5em" fontSize="14px" fill="#888">{`Spent`}</tspan>
      </text>
    );
  };

  const submit = () => {
    navigate("/signup");
  };

  const add = () => {
    navigate("/add-expense");
  };

  if (!user) {
    return (
      <Box
        m="20px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
        sx={{
          boxShadow: "0 4px 10px rgba(0,0,0,1)",
          borderRadius: "8px",
          p: "20px",
        }}
      >
        <Box textAlign="center">
          <Typography
            fontWeight="bold"
            color="#00e558"
            // color="#1DA1F2"
            sx={{ mb: "10px", ml: "10px", fontSize: "30px" }}
          >
            Hey user for best expeirence Create Profile First..!
          </Typography>
          <Button
            variant="outlined"
            borderRadius="10px"
            sx={{
              color: "#00e558",
              background: "#4f4e4e",
              borderBlockColor: "#00e558",
              // outline: "none",
              // border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,1)",
              letterSpacing: "3px",
              fontWeight: "bold",
            }}
            onClick={submit}
          >
            Create
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box m="10px">
      <Box>
        <Box
          mt="15px"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "80px",
            boxShadow: "0 0 5px #00e558",
            // boxShadow: "0 0 5px #1DA1F2",
            // boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // gap:"15px",
              margin: "10px",
            }}
          >
            <Box>
              <Avatar
                src={URL.createObjectURL(user.profilePicture)}
                sx={{
                  height: 50,
                  width: 50,
                  mr: 2,
                  border: "3px solid #1DA1F2",
                }}
              >
                U
              </Avatar>
            </Box>
            <Box
            // sx={{
            //   display:"flex",
            //   justifyContent:"center",
            //   alignItems:"center",
            // }}
            >
              <Typography
                sx={{
                  color: "rgb(152, 150, 150)",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Welcome..!
              </Typography>
              <Typography fontWeight="bold" fontSize="20px">
                {user.firstName} {user.lastName}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MuiTooltip title="Notifications">
              <Link to="/E-Tracker.github.io/" sx={{ cursor: "pointer" }}>
                <IoIosNotifications
                  style={{
                    color: "#00e558",
                    fontSize: "30px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                    borderRadius: "10px",
                    backgroundColor: "rgb(42, 40, 40)",
                    margin: "10px",
                  }}
                />
              </Link>
            </MuiTooltip>
          </Box>
        </Box>

        <Box
          mt="15px"
          sx={{
            display: "flex",
            justifyContent: "space-between",

            borderRadius: "10px",
            margin: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                letterSpacing: "1px",
                mt: "5px",
                fontSize: "12px",
              }}
            >
              INCOME
            </Typography>

            <Typography textAlign="center" fontSize="20px" fontWeight="bold">
              <BiRupee fontSize="15px" /> {buget.setIncome || "0"}
            </Typography>
          </Box>

          <Box>
            <Link to="/buget">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  // fontWeight:"bold" ,
                  color: "#ffeba7",
                  borderRadius: "20px",
                  background: "linear-gradient(100deg, #1a91da, #00e558)",
                  mt: "5px",
                  padding: "8px 25px",
                  fontSize: "18px",
                }}
              >
                Set Buget
              </Button>
            </Link>
            <Typography sx={{ textAlign: "center" }}>
              Your Buget: {buget.setBuget || "0"}
            </Typography>
          </Box>
        </Box>

        <Box
          mt="10px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,1)",
            margin: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography
            fontWeight="bold"
            color="#00e558"
            sx={{ mt: "15px", textAlign: "center", fontSize: "25px" }}
          >
            Expense Analysis
          </Typography>

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
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal" // Set the layout as "horizontal"
              verticalAlign="bottom" // Align the legend at the bottom
              align="center" // Center the legend
            />
          </PieChart>
        </Box>

        <Box
        m="20px"
        sx={{
          boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
          borderRadius: "10px",
        }} 
        >
          <Box
            mt="15px"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <Box m="5px">
              <Typography
                variant="h5"
                component="div"
                textAlign="center"
                sx={{
                  color: "#00e558",
                  fontWeight: "bold",
                }}
              >
                Transactions <MdOutlineNavigateNext sx={{ cursor: "pointer" }}/>
              </Typography>
            </Box>
            <Box m="5px">
              <Typography variant="h6" component="div" textAlign="center"
               sx={{ fontWeight: "bold", color: "#ffeba7" }} 
              >
                Balance
              </Typography>
              <Typography
                variant="h5"
                textAlign="center"
                color={balance >= 0 ? "primary" : "error"}
              >
                <BiRupee variant="h5" /> {balance}
              </Typography>
            </Box>
          </Box>

          <Box
            m="5px"
            sx={{
              mt: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <Box
              m="10px"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
              textAlign="center"
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#ffeba7" }}
              >
                Recent Transactions
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  // fontWeight:"bold" ,
                  color: "#ffeba7",
                  borderRadius: "20px",
                  background: "rgba(42, 40, 40, 0.639)",
                  mt: "10px",
                  //  padding:"5px 25px",
                  fontSize: "13px",
                  gap: "3px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                  cursor: "pointer",
                }}
                onClick={add}
              >
                <BiPlusCircle color="#00e558" fontSize="20px" />
                Add
              </Button>
            </Box>
            <Box m="20px">
              {post.length === 0 ? (
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#ffeba7",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  There is no Transaction
                </Typography>
              ) : (
                post.map((ecard, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: "10px",
                      boxShadow: "0 4px 10px rgba(0,0,0, 1)",
                      backgroundColor: "#0d1117",
                      borderRadius: "10px",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography sx={{ fontSize: "20px", color: "#00e558" }}>
                          {" "}
                          {ecard.paid || "paid"}
                        </Typography>

                        <Typography sx={{ color: "#00e558" }}>
                          {" "}
                          {ecard.reason || "reason"}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          color: "#00e558",
                          // justifyContent:"space-evenly"
                        }}
                      >
                        <Box
                          marginTop="5px"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "rgb(152, 150, 150)",
                              textAlign: "center",
                            }}
                          >
                            {" "}
                            {ecard.category || "category"}
                          </Typography>

                          <Typography
                            sx={{ fontWeight: "bold", color: "#00e558" }}
                            gutterBottom
                          >
                            <BiRupee /> {ecard.enterAmount || "oe"}
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
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: "50px",
          height: "100%",
        }}
      >
        <Typography fontSize="bold" margin-bottom="50px" color="aliceblue">
          MADE WITH <FaHeart color="#ffeba7" /> BY{" "}
          <span style={{ color: "#00e558" }}>E</span>-TRACK
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
