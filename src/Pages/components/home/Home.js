import Menu from "./menu/Menu"
import Navbar from "./navbar/Navbar"
import Header from "./header/Header"
import Catagory from "./catogaries/Catagory"
import Table from "./table/Table"


export default function Home(){
    return(
        <>
        <Navbar/>
        <Menu/>
        <Header/>
        <Catagory/>
        <Table/>
        </>
    )
}