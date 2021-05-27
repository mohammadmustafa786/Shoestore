import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from "react-router-dom";
// import LinkBar from './Components/LinkBar';



export default function NavBar() {


    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                  
                        <MenuItem>
                             <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">Home</Link>
                        </MenuItem> 
             
                    <MenuItem>
                            <Link style={{ color: 'inherit', textDecoration: 'inherit', margin: '2%' }} to="/product">Product</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link style={{ color: 'inherit', textDecoration: 'inherit', padding: '3%' }} to="/about">About Us</Link>
                    </MenuItem>
                </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}




