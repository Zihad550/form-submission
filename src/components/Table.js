import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

const DataTable = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fierce-taiga-31205.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        width: "80vw",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <TableContainer component={Paper}>
        <Table size="large">
          <TableHead>
            <TableRow sx={{ background: "gray" }}>
              <TableCell sx={{ color: "white" }}>Project Name</TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Client Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Panel Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Page Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Section Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                Events Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow
                key={d._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {d.projectName}
                </TableCell>
                <TableCell align="right">{d.clientName}</TableCell>
                <TableCell align="right">{d.panelName}</TableCell>
                <TableCell align="right">{d.pageName}</TableCell>
                <TableCell align="right">{d.sectionName} </TableCell>
                <TableCell align="right">{d.eventsName} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DataTable;
