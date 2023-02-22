import { Typography } from "@mui/material";
import MenuBar from "../components/MenuBar";

function Home() {
    const userData = JSON.parse(sessionStorage.getItem('userData') || 'null');
    return (
        <>
            <Typography>{`Welcome to the party: ${userData.firstname}, ${userData.lastname}`}</Typography>
            <MenuBar/>
            {/* TODO: Image carousel */}
            {/* TODO: Products type */}
        </>
    )

}
export default Home;