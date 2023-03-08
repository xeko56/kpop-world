import React from "react";
// import {
//     Button, 
//     Container, Grid, Typography, Box

// } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import FormControl from '@mui/material/FormControl';
// import InputAdornment from '@mui/material/InputAdornment';
// import InputLabel from '@mui/material/InputLabel';
// import FilledInput from '@mui/material/FilledInput';
// import IconButton from '@mui/material/IconButton';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import ButtonPage from "./ButtonPage";



function PasswordField({password, onChangedValue}) {
    return (
        <>
            <div className="card flex justify-content-center">
                <Password inputId="password"  placeholder="Password" toggleMask value={password} onChange={(event) => {
                    onChangedValue(event.target.value);
                }} />
            </div>
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
        <div className="card flex justify-content-center">
            <Card title="Log In into your Account">
                <div className="flex justify-content-center">
                    <InputText className = "min-w-15" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <PasswordField password={password} onChangedValue={setPassword}/>
                <ButtonPage/>
            </Card>
        </div>
    )
}

export default LoginForm;