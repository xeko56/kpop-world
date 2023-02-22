import React from "react";
import {
    Button, 
    TextField,
    Container, Grid, Typography, Box

} from '@mui/material'

function Password({show, onChangedValue}) {
    return (
        <>
            <TextField  id="lname" name="passwd" label="Password:" variant="standard" onChange={
                (event) => {
                    onChangedValue(event.target.value);
                }
            }/>
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

                <TextField id="fname" label="First name:" variant="standard" name="fname" onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
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
