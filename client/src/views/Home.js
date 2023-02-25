import { Typography } from "@mui/material";
import MenuBar from "../components/MenuBar";
import ProductTable from "../components/ProductsTable";

function Home() {
    const userData = JSON.parse(sessionStorage.getItem('userData') || 'null');
    return (
        <>
            <Typography>{`Welcome to the partys: ${userData.firstname}, ${userData.lastname}`}</Typography>
            <MenuBar/>
            {/* TODO: Image carousel */}
            {/* TODO: Products type */}
            <ProductTable/>
        </>
    )

}
export default Home;