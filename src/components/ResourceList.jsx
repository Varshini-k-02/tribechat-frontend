import * as React from 'react';
import {useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import AddRes from './AddRes';
import EditRes from './EditRes';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import { getRes } from '../axios';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color:'black',
  };

function ResourceList() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const columns=[
    //     {title:"Name", field:"name"}
    // ]
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
useEffect(() => {
    getRes(localStorage.getItem('currentRoom')).then((res)=>{
        setRows(res.data)
    })
},[])
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const openPage=(link)=>{
    console.log(link)
      return(
        <iframe width="100%" height="100%" target="_blank" src={link} name="page">
        </iframe>
      );
  }


  return (
    <>
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <AddRes closeEvent={handleClose}/>
        </Box>
      </Modal>
      <Stack  direction="row" spacing={2} className=" my-2 mb-2">
            <Button style={{marginLeft:"650px"}} variant="contained"  onClick={handleOpen} endIcon={<AddCircleIcon />}>
              Add
            </Button>
   </Stack>
   <Box sx={style}>
           <EditRes closeEvent={handleClose}/>
        </Box>
      </div>

    <Paper sx={{ width: '100%', overflow: 'hidden', marginLeft:"50px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{ minWidth: "50px" }}>
          <TableCell
                 
                 align="left"
                 style={{ minWidth: "50px" }}
               > Name
                 
               </TableCell>
               <TableCell
                
                align="left"
                style={{ minWidth: "50px" }}
              > Link
                
              </TableCell>
              <TableCell
                
                align="left"
                style={{ minWidth: "50px" }}
              > Rating
                
              </TableCell>
            
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow style={{ minWidth: "50px" }} hover role="checkbox" tabIndex={-1}>
                    <TableCell key={row.id}>
                        {row.name}
                    </TableCell>
                     <TableCell key={row.id}>
                     
                     <button onClick={()=>openPage(row.link)}>Link</button>
                     
                    </TableCell>
                    <TableCell key={row.id}>
                        {row.rating}
                    </TableCell>
                    <TableCell align="left">
                        
                        <EditIcon
                            style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                            }}
                            className="cursor-pointer" closeEvent={handleClose}
                            // onClick={() => editUser(row.id)}
                        />
                        <DeleteIcon
                            style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                            }}
                            // onClick={() => {
                            // deleteUser(row.id);
                            // }}
                        />
                        
                        </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    {/* <MaterialTable 
    title = "Resources"
    data={data}
    columns={columns}
    /> */}
    </>
  );
}
export default ResourceList;