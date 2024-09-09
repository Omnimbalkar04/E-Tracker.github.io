import {
  Avatar,
  Box,
  Button,
  Tooltip as MuiTooltip,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace, MdOutlineNavigateNext } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useUser } from "./UserContext";

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const submit = () => {
    navigate("/signup");
  };

  const todash = () => {
    navigate("/");
  }

  const toAdd = () => {
    navigate("/add-expense");
  }

  const toExp = () => {
    navigate("/expense");
  }

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
            Hey user Create Profile First..!
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
    <Box
      m="20px"
      sx={{
        borderRadius: "10px",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
          mt: "5px",
          padding: "10px 20px",
          borderRadius: "10px",
        }}
      >
        <MuiTooltip title="Back">
          <Link to="/" sx={{ cursor: "pointer" }}>
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
        </MuiTooltip>

        <Typography
          sx={{ fontSize: "25px", fontWeight: "bold", color: "#ffeba7" }}
        >
          Profile
        </Typography>

        <MuiTooltip title="Notification">
          <Link to="/" sx={{ cursor: "pointer" }}>
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
        </MuiTooltip>
      </Box>

   
      <Box
       m="10px"
       sx={{
        // boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
        boxShadow: "0 0 5px #00e558",
           borderRadius: "10px",
       }}
      >
        <Box
         mt="15px"
         sx={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           flexDirection:"column",
           // boxShadow: "0 0 5px #00e558",
           gap:"5px",
           margin: "10px",
         }}
        >
          <Avatar
            src={URL.createObjectURL(user.profilePicture)}
            sx={{
              height: 100,
              width: 100,
              mr: 2,
              border: "3px solid #1DA1F2",
              marginTop:"10px"
            }}
          >
            U
          </Avatar>

          <Typography 
        sx={{
          color:"rgb(152, 150, 150)",
          fontSize:"15px",
          fontWeight:"bold"
        }}
        >Welcome..!</Typography>
        <Typography fontWeight="bold" fontSize="25px">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography fontWeight="bold" fontSize="15px" sx={{ color:"rgb(152, 150, 150)",}}>
          {user.email}
        </Typography>
        </Box>
      </Box>

      <Box
      // m="10px" 
      >
        <Box 
        m="10px"
        sx={{
         boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
            borderRadius: "10px",
            mt: "5px",
          padding: "5px 10px",
        }}
        >
          <Box
          m="10px"
          sx={{
            display:"flex",
            justifyContent:"space-between"
          }} 
          >
          <Typography
          sx={{
            fontSize:"22px",
          fontWeight:"bold"
          }} 
          onClick={todash}
          >
           Dashboard
          </Typography>
          <MdOutlineNavigateNext 
          onClick={todash}
           style={{
                color: "#00e558",
                fontSize: "25px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                borderRadius: "10px",
                backgroundColor: "rgb(42, 40, 40)",
                cursor: "pointer"
              }}/>
          </Box>
        </Box>
      </Box>

      <Box
      // m="10px" 
      >
        <Box 
        m="10px"
        sx={{
         boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
            borderRadius: "10px",
            mt: "5px",
          padding: "5px 10px",
        }}
        >
          <Box
          m="10px"
          sx={{
            display:"flex",
            justifyContent:"space-between"
          }} 
          >
          <Typography
          sx={{
            fontSize:"22px",
          fontWeight:"bold"
          }}
          onClick={toAdd} 
          >
           Add Expenses
          </Typography>
          <MdOutlineNavigateNext 
          onClick={toAdd} 
           style={{
                color: "#00e558",
                fontSize: "25px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                borderRadius: "10px",
                backgroundColor: "rgb(42, 40, 40)",
                cursor: "pointer"
              }}/>
          </Box>
        </Box>
      </Box>

      <Box
      // m="10px" 
      >
        <Box 
        m="10px"
        sx={{
         boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
            borderRadius: "10px",
            mt: "5px",
          padding: "5px 10px",
        }}
        >
          <Box
          m="10px"
          sx={{
            display:"flex",
            justifyContent:"space-between"
          }} 
          >
          <Typography
          sx={{
            fontSize:"22px",
          fontWeight:"bold"
          }} 
          onClick={toExp}
          >
           Your Expenses
          </Typography>
          <MdOutlineNavigateNext 
          onClick={toExp}
           style={{
                color: "#00e558",
                fontSize: "25px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 1)",
                borderRadius: "10px",
                backgroundColor: "rgb(42, 40, 40)",
                cursor: "pointer"
              }}/>
          </Box>
        </Box>
      </Box>
   

    </Box>
  );
};

export default Profile;
