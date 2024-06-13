import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = ({ storeData, submitForm, loginError }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="form">
            <p className='title'>LogIn</p>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '85%', mt: 4 },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Email ID" variant="outlined" onChange={(e) => storeData('email', e.target.value)} />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        onChange={(e) => storeData('password', e.target.value)}
                        label="Password"
                    />
                </FormControl>
                <Button variant="contained" color="secondary" style={{ width: '30%' }} onClick={submitForm}>Login</Button>
                <div>
                    not have an account? &nbsp;
                    <Link to='/signup' className='text-decoration-none'>
                        <span className='link_span'>SignUP</span>
                    </Link>
                </div>

                {
                    loginError
                    &&
                    <p className='sub_content error'>
                        {loginError}
                    </p>
                }
            </Box>

        </div>
    )
}

export default LoginForm