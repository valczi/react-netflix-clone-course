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
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'

import { fetchData } from './stores/slices/movieSlice';
import Lists from './component/Lists/Lists';
import Card from './component/movieCard/Card';
import TopList from './component/Lists/TopList';
import Watching from './component/watching/watching';
import Banner from './component/banner/banner';
import { MovieInterface } from './entity/movies';

const pagesInit = ['logout'];
const settingInit = ['Home', 'Movies', 'Users', 'who\'s watching'];



export default function App() {

  const dispatch = useAppDispatch();
  const [pages, setPages] = React.useState(pagesInit);
  const [settings, setSettings] = React.useState(settingInit);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState('');
  const bannerMovie = useAppSelector((state: any) => state.movies.films[0]);
  const Allmovies = useAppSelector((state: any) => state.movies.films);
  const search = React.createRef<HTMLInputElement>();

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


  const showMovie = () => {
    if (searchInput === '') {
      return (
        <div className='background'>
          <Banner movie={bannerMovie} height={880} open={false} />
          <TopList />
          <Lists />
        </div>
      );
    } else {
      let filtered: MovieInterface[] = [];
      Allmovies.forEach((movie: MovieInterface) => {
        if (movie.title.includes(searchInput))
          filtered.push(movie);
      })
      return (
        <div className='ResultSearch' >{
          filtered.map(movie => {
            return (
              <Card itemId={movie.id.toString()} movie={movie} />
            )
          })
        }
        </div>
      );
    }
  }



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
                  <Link className='link-item' to={'/' + setting.toLowerCase().replace(' ', '_').replace("\'", "")}>{setting}</Link>
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
            {settings.map((page) => (
              <MenuItem key={page + 'little'} onClick={handleCloseUserMenu}>
                <Link className='link' to={'/' + page.toLowerCase().replace(' ', '_').replace("\'", "")}>{page}</Link>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Input
              sx={{
                color: 'white',
                backgroundColor: 'rgb(92, 92, 92)',
                borderRadius: '10px',
                border: "non",
                m: 2,
                paddingLeft: 2,
                "&:hover": {
                  border: 'none'
                },
                "&:before": {
                  border: "none"
                },
                "&:after": {
                  border: "none"
                }
              }}
              id="standard-adornment-password"
              type={'text'}
              inputRef={search}
              onChange={() => {
                if (search !== null && search.current) {
                  setSearchInput(search.current.value);
                }
              }}
              endAdornment={
                <InputAdornment position='start'>
                  <IconButton>
                    {<SearchIcon sx={{
                      color: '#fff'
                    }} />}
                  </IconButton>
                </InputAdornment>
              }
            />
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
              {pages.map((setting) => (
                <MenuItem key={setting + 'user'} onClick={handleCloseUserMenu}>
                  <Link to={'/' + setting.toLowerCase().replace(" ", "_").replace("\'", "")}>{setting}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Routes>
      <Route path="/whos_watching" element={
        <Watching />
      } />
      <Route path="/home" element={
        <Home />
      } />
      <Route path="/movies" element={
        <div className='background'>
          {showMovie()}
        </div>
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

function Users() {
  return <h2>Users</h2>;
}