import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Container, Grid, Card, CardMedia, CardContent } from '@mui/material'; // Adjust the library import based on your setup

import './Home.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 'calc(1em + ${theme.spacing(4)})',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const destinations = [
    {
      id: 1,
      name: ' Stocks Left',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoK54ehsQBBeeJ-CuVckAJGO0ZeOQYTLUGnIpR995vLpUkM0-I4Q0IwtgSRKT8OyxJpo&usqp=CAU',
    },
    {
      id: 2,
      name: 'Customer Orders',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bZ_8hn0lMYdesKXV7x80vQqyEm_SPfkgpQ&usqp=CAU',
    },
    {
      id: 3,
      name: 'Dealers',
      image: 'https://c0.wallpaperflare.com/preview/635/391/583/handshake-autokaufmann-auto-buy.jpg',
    },
   
    {
      id: 1,
      name: ' Stocks On Sale ',
      image:'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbGV8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      name: 'Sponsorships',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIpojMS3-2fmc-xhzOIebSatl8miBYWDX2w&usqp=CAU',
    },
    {
      id: 3,
      name: 'Batch Tracking',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUHA6c1MaIWe6SVLo5x7GP12IrIlN-tt6z88Etqgy0SVaXvf0BexomFFKQfOkFar0DRc&usqp=CAU',
    },
   
  ];

export default function Home1() {
  return (
    <div className='ars'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 5 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
     <pre><b>Stock Management</b>      </pre>                                    
          </Typography>
          <div className='ar'>
            <Link to='/register'>

          <Button variant="contained" color='inherit' style={{width:"80px"}} >Register</Button>
            </Link>
            </div>
          <div className='as'>
            <Link to='/login'>
          <Button variant="contained" color='inherit'>Login</Button>
            </Link>
            </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box >
    <Container>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5,height:"80vh"}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id}>
            <Card style={{ width:"300px" }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>


    <footer class="site-footer" >
          
        
          <div class="social-icons" style={{marginLeft:"35%"}}>
              <a href="#" class="text-white"><InstagramIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><FacebookIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><LinkedInIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><TwitterIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white2"><YouTubeIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white3"><WhatsAppIcon style={{height:"50px",width:"70px"}}/></a>
          </div>
          
</footer>
    </div>

  );
}