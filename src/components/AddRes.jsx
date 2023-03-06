import React from 'react';
import {useState,useEffect} from 'react';
import CloseIcon from "@mui/icons-material/Close";
import {Typography,Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { addRes } from '../axios';
import Swal from "sweetalert2";

function AddRes({closeEvent}) {
    const [name,setName] = useState("");
    const [link,setLink] = useState("");
    const [rating,setRating] = useState(0);
    const [room, setRoom] = useState();
   const [user, setUser] = useState();
    // const [timest, setTimest]=useState("");
    useEffect(()=>{
        setRoom(localStorage.getItem('currentRoom'))
        setUser(localStorage.getItem('currentUser'))
    },[])
    const createUser = () => {
       addRes(name,link,rating,room,user)
       closeEvent();
       Swal.fire("Resource successfully added");
    }
  return (
    <>
    <Box sx={{m:2}} />
    <Typography variant="h5" align="center">
        Add Resource
    </Typography>
    <IconButton style={{position:"absolute",top:"0",right:"0"}} 
    onClick={closeEvent}>
        <CloseIcon />
    </IconButton>
    <Box height={20} /> 
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField onChange={(e)=>{
            setName(e.target.value)
        }} id="outlined-basic" label="Name" variant="outlined" size="small" sx={{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs={12}>
        <TextField onChange={(e)=>{
            setLink(e.target.value)
        }} id="outlined-basic" label="Link" variant="outlined" size="small" sx={{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs={6}>
        <TextField onChange={(e)=>{
            setRating(e.target.value)
        }} id="outlined-basic" label="Rating" variant="outlined" size="small" sx={{minWidth:"100%"}}/>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h5" align="center">
                <Button variant="contained" onClick={createUser}>
                    Submit
                </Button>
            </Typography>
        </Grid>
    </Grid>
    <Box sx={{m:4}} />
    </>
  )
}

export default AddRes;