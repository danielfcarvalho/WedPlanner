import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import {FaBook, FaCalculator, FaUtensils, FaHome, FaSignInAlt} from "react-icons/fa";
import "./index.css"

function MyNavbar({user}) {

    const location = useLocation()

    const title = (
        <Button variant="light">
            <span className="navbar-toggler-icon"></span>
        </Button>
    )

    return (
        <>
            {location.pathname === "/Login" ?
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                    <Link to="/Home" className="navbar-brand">Wed<b>Planner</b></Link>
                </nav> : 
                <Navbar bg="light" expand="lg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2">
                                <NavDropdown title={title} id="basic-nav-dropdown">
                                    <NavDropdown.Header className="text-center header"><h5>Welcome {user}</h5></NavDropdown.Header>
                                    <NavDropdown.Divider className="m-0"/>
                                    <div className="row row1">
                                        <div className="col p-0 home">
                                            <Link to="/Home" className="link text-center">
                                                <NavDropdown.ItemText className="home">
                                                    <FaHome size={25}/>
                                                    <h5 className="mt-2">Home</h5>
                                                </NavDropdown.ItemText>
                                            </Link>
                                        </div>
                                        <div className="col p-0 guest">
                                            <Link to="/GuestList" className="link text-center">
                                                <NavDropdown.ItemText className="guest">
                                                    <FaBook size={25}/>
                                                    <h5 className="mt-2">Guest List</h5>
                                                </NavDropdown.ItemText>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row row2">
                                        <div className="col p-0 budget">
                                            <Link to="/Budget" className="link text-center">
                                                <NavDropdown.ItemText className="budget">
                                                    <FaCalculator size={25}/>
                                                    <h5 className="mt-2">Budget</h5>
                                                </NavDropdown.ItemText>
                                            </Link>
                                        </div>
                                        <div className="col p-0 services">
                                            <Link to="/Services" className="link text-center">
                                                <NavDropdown.ItemText className="services">
                                                    <FaUtensils size={25}/>
                                                    <h5 className="mt-2">Services</h5>
                                                </NavDropdown.ItemText>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-0">
                                            <Link to="/Login" className="link text-center">
                                                <NavDropdown.ItemText className="logout">
                                                    <FaSignInAlt size={25}/>
                                                    <h5 className="mt-2">Logout</h5>
                                                </NavDropdown.ItemText>
                                            </Link>
                                        </div>
                                    </div>
                                </NavDropdown>
                            </div>
                            <div className="col">
                                <Navbar.Text className="d-flex align-items-bottom mt-1">
                                    <Link to="/Home" className="link">
                                        <h4>Monica & Michael's Wedding</h4>
                                    </Link>
                                </Navbar.Text>
                            </div>
                        </div>
                        <Navbar.Brand>
                            <Link to="/Home" className="navbar-brand">Wed<b>Planner</b></Link>
                        </Navbar.Brand>
                    </div>
                </Navbar>
            }
        </>
    );
}

export default MyNavbar;