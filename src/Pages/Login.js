import { Button, TextField } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';
import { FormControlLabel } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';

const Login=()=> {
    return (
      <div>
          <div className="icon">
              <div className="icon_class">
                  <PersonAddIcon fontSize="large"/>
              </div>
              <div className="text">Log in</div>
          </div>
         <div className="row m-2">
         <TextField id="email" className="p-2" type="text" varaint="outlined" label="Enter Email" fullWidth/>
         <TextField id="password" className="p-2" type="text" varaint="outlined" label="Enter Password" fullWidth/>
         <FormControlLabel 
                  control={
                      <Checkbox
                           icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                           checkedIcon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                           name="checked"
                           />
                  }
                  label="Remember me"
            />
         <Button varaint="contained" color="primary">Log in</Button>
         </div>
         <Divider variant="middle"/>
             <p className="text-center">
                <Link to="signup" className="text-black-50">
                    <h5>Create Account?</h5>
                </Link>
             </p>
    </div>
  )
}
export default Login