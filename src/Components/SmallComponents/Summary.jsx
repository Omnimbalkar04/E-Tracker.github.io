import { Box, Card, CardContent, Typography } from "@mui/material"

const Summary = () => {

  const totalIncome = 5000;
  const totalExpenses = 2000;
  const balance = totalIncome - totalExpenses;

  return (
    <Box  mb={4} >
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Total Income
          </Typography>
          <Typography variant="h4" color="primary">
            ${totalIncome}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Total Expenses
          </Typography>
          <Typography variant="h4" color="error">
            {totalExpenses}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Balance
          </Typography>
          <Typography variant="h4" color={balance >= 0 ? "primary" : "error"}>
           {balance}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Summary