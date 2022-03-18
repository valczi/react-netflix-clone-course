/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './stores/hooks'
import Login from './component/login/login'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'

import { fetchData } from './stores/slices/movieSlice';
import Lists from './component/Lists/Lists';
import Watching from './component/watching/watching';
import Banner from './component/banner/banner';

const pages = ['Home', 'Movies', 'Users'];
const settings = ['Home', 'Movies', 'Users', 'Logout'];



export default function App() {

  const movies = useAppSelector((state: any) => state.movies);
  const dispatch = useAppDispatch();
  const [settings, setSettings] = React.useState(['Home', 'Movies', 'Users', 'Logout'])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  useEffect(() => {
    //localStorage.setItem('myCat');
    dispatch(fetchData());
  }, []);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <Router>
      <AppBar position="static" className='appBar' sx={{
        background: '#0a0909',
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img className='logo'
                src="Logonetflix.png"
                alt="Logo netflix" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting + 'menu'} onClick={handleCloseUserMenu}>
                    <Link className='link-item' to={'/' + setting.toLowerCase()}>{setting}</Link>
                  </MenuItem>

                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <img className='logo'
                src="Logonetflix.png"
                alt="Logo netflix" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <MenuItem key={page + 'little'} onClick={handleCloseUserMenu}>
                  <Link className='link' to={'/' + page.toLowerCase()}>{page}</Link>
                </MenuItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting + 'user'} onClick={handleCloseUserMenu}>
                    <Link to={'/' + setting.toLowerCase()}>{setting}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/watching" element={
          <Watching />
        } />
        <Route path="/home" element={
          <Home />
        } />
        <Route path="/movies" element={
          <Movies />
        } />
        <Route path="/users" element={
          <Users />
        } />
      </Routes>
    </Router >
  );
}

function Home() {
  return <Login />
}

function Movies() {
  return (
    <div>
      <Banner />
      <Lists />
    </div>
  )
}

function Users() {
  return <h2>Users</h2>;
}