import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'


const NavBar = () => {
    return (
        <Menu>
            <Link to="/">
                <Menu.Item>
                    Home
                </Menu.Item>
            </Link>
            <Link to="/about">
                <Menu.Item>
                    About
                </Menu.Item>
            </Link>
            <Link to="/workers">
                <Menu.Item>
                    Service Providers
                </Menu.Item>
            </Link>
            <Icon name='sign language' size='large'   />
        </Menu>
    
    )
}



export default NavBar;



