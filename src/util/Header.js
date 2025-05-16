import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Container,
    Dropdown,
    Image, 
    Nav,
    Navbar,
} from 'react-bootstrap';
import { 
    ArrowLeft,
    HouseHeartFill,
    PersonCircle,
    Search,
} from 'react-bootstrap-icons';
import logo from '../pic/logo.png';
import styles from './Header.module.css';
import LoginModal from "../util/LoginModal";
import LogoutModal from "../util/LogoutModal";

const Header = ({back, login}) => {

    const navigate = useNavigate();
    //Modal state
    const [showLogoutModal, setShowLogoutModal] = useState(false);      
    const [showLoginModal, setShowLoginModal] = useState(false);
    //Handle login
    const handleLogin = () => {
        setShowLoginModal(false);
        navigate("/"); // or clear session & redirect to login
    }; 
    //Handle logout
    const handleLogout = () => {
        setShowLogoutModal(false);
        navigate("/logout"); 
    };

    return (
        <>
            {/* Navbar */}
            <Navbar className={styles.navbar}>
                <Container className={styles.navContainer}>
                    {/* Navbar Brand */}
                    <Navbar.Brand className={styles.navBrand} onClick={() => navigate("/")}>
                        <Image src={logo} alt="Logo"className={styles.navLogo}/>                            
                        <div className={styles.navTitle}>KNOWLEDGE BASE</div>
                    </Navbar.Brand>        
                    <div className={styles.navSpace}></div>            
                    {/* Navbar Menu */}
                    <Navbar.Collapse className={styles.navMenu}> 
                        { back ?                     
                            <Nav.Link className={styles.navIcons2} onClick={() => navigate(-1)}><ArrowLeft className={styles.navIcons}/></Nav.Link>                        
                        : <div className={styles.navIcons2}></div> }
                        <Nav.Link className={styles.navIcons2} onClick={() => navigate("/")}><HouseHeartFill className={styles.navIcons}/></Nav.Link>                        
                        <Nav.Link className={styles.navIcons2} onClick={() => navigate("/searched-articles")}><Search className={styles.navIcons}/></Nav.Link>                        
                        { login ? 
                            (<>
                            {/* Profile Dropdown */}
                            <Dropdown className={styles.navIcons2}>
                                <Dropdown.Toggle className={styles.navIcons2} ><PersonCircle className={styles.navIcons}/></Dropdown.Toggle>                                 
                                <Dropdown.Menu align="end" className={styles.dropdownMenu}>
                                    <Dropdown.Item style={{ color: "white", fontSize: "20px" }} onClick={() => navigate("/my-articles")}>My Article</Dropdown.Item>
                                    <Dropdown.Item style={{ color: "white", fontSize: "20px" }} onClick={() => navigate("/add-article")}>Add Article</Dropdown.Item>
                                    <Dropdown.Divider style={{ backgroundColor: "white" }} />
                                    <Dropdown.Item style={{ color: "white", fontSize: "20px" }} onClick={() => setShowLogoutModal(true)}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>  
                            </>)
                        : 
                            (<Nav.Link className={styles.navLogin} onClick={() => setShowLoginModal(true)}><div className={styles.login}>Login</div></Nav.Link>)
                        }                         
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal
                show={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLogin={handleLogin}
            />
            <LogoutModal
                show={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onLogout={handleLogout}
            />
        </>
    );
}
export default Header;