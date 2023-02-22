import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import LogoFundoAzul from "../../assets/logo/logo-fundo-azul.jpeg";
import { Link } from 'react-router-dom';
import UserAvatar from './avatares/UserAvatar';

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
        <header>
        <nav class="navbar navbar-expand-lg fixed-top" style={{ flexWrap: 'nowrap' }}>
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              <img
                class="d-flex logo img-fluid"
                src={LogoFundoAzul}
                alt="logo"
              />
            </Link>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ px: 10 }} >
                <UserAvatar />
              </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px', ml: '100px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to="/" class="nav-link" aria-current="page" style={{color: 'black'}}>
                            Help
                        </Link>
                        </li>
                    
                        <li class="nav-item">
                        <Link to="/" class="nav-link" style={{color: 'black'}}>
                            Logout
                        </Link>
                        </li>
                    </ul>
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
        </nav>
      </header>
  );
}
export default ResponsiveAppBar;