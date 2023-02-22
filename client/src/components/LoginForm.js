import React from "react";
import {
    Button, 
    TextField,
    Container, Grid, Typography, Box

} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';

function Password({show, onChangedValue}) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };    
    return (
        <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
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
                    onChange={
                        (event) => {
                            onChangedValue(event.target.value);
                        }
                    }                    
                />
            </FormControl>            
        </>
    )
}

function LoginForm({onSubmit, reEnter}) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [submittable, setSubmittable] = React.useState(!reEnter);
    const conditionalCheck = (value) => {
        if (reEnter && value === password) {
            setSubmittable(true);
            setPassword(value);
        }
    };
    return (
    <Container sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}>
        <Grid container justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%' }}>
            <Box display='flex' flexDirection='column' component='form' noValidate autoComplete='off' sx={{ paddingRight: { sm: '3rem' } }}>
                <Typography variant='h6' component='h1' sx={{ textAlign: 'center', mb: '1.5rem' }}>
                Log into your account
                </Typography>

                {/* <TextField id="fname" label="First name:" variant="standard" name="fname" onChange={(event) => {
                    setUsername(event.target.value);
                }}/> */}
                <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                    <InputLabel htmlFor="filled-username">Username</InputLabel>
                    <FilledInput
                        id="filled-username"
                        type={'text'}
                        onChange={
                            (event) => {
                                setUsername(event.target.value);
                            }
                        }                    
                    />
                </FormControl>                 
                <Password onChangedValue={setPassword}/>
                {reEnter ? "Please reenter your password" : ""}
                {reEnter && <Password onChangedValue={conditionalCheck}/>}
                <Button ></Button>
                <Button variant='contained'
                onClick={() => submittable && onSubmit(username, password)}
                >
                Login
                </Button>
            </Box>
        </Grid>
      </Container>      
    )
}

export default LoginForm;
