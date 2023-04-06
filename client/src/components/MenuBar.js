import React from "react";
import Button from '@mui/material/Button';
import MenuPopupState from "./MenuPopUpState";
import { Stack } from "@mui/material";

function MenuBar() {
    return (
        <Stack direction="row" spacing={2}>
            <Button>Home</Button>
            <MenuPopupState buttonName={'Boygroups'} navList={['ATEEZ', 'BTS', 'NCT127']}/>
            <MenuPopupState buttonName={'Girlgroups'} navList={['NMIXX', 'Blackpink', 'Red Velvet']}/>          
        </Stack>
    );
}
export default MenuBar;