import { Button, FormControlLabel } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import React from 'react';

const Signup=()=> {
    return (
    <div>
        <div className="icon">
            <div className="icon_class">
                <PersonAddIcon fontSize="large"/>
            </div>
            <div className="text">Sign Up</div>
        </div>
        <div className="row m-2"> 
           <div className="col-6 p-2">
               <TextField id="firstname" type="text" varaint="outlined" label="Enter First Name" fullWidth/>
           </div>
           <div className="col-6 p-2">
               <TextField id="lastname" type="text" varaint="outlined" label="Enter Last Name" fullWidth/>
           </div>
        </div>
        <div className="row m-2">           
            <TextField id="email" className="p-2" type="text" varaint="outlined" label="Enter Email" fullWidth/>
            <TextField id="Password" className="p-2" type="password" varaint="outlined" label="Enter Password" fullWidth/>
            <FormControlLabel 
                  control={
                      <Checkbox
                           icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                           checkedIcon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                           name="checked"
                           />
                  }
                  label="I agree to all terms and conditions."
            />
           <Button variant="contained" color="primary" fullwidth>Create Account</Button> 
        </div>
        <Divider variant="middle"/>
             <p className="text-center">
                <Link to="login" className="text-black-50">
                   <h5>Already have an account?</h5>
                </Link>
                 
             </p>
    </div>
    )
}

export default Signup;
