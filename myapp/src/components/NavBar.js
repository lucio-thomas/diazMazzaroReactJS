import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget/CartWidget'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../App.css'

//import { useNavigate } from 'react-router-dom';


const pages = [ 'Contacto', 'Nosotros', ];

const NavBar = () => {
  
  //const history = useNavigate();

    function goToProds(e) {
      //e.preventDefault();
      //history('/productos');
      console.log('Bienvenido a Productos');
    }

    const [prodList, setProdList] = React.useState('');

    const handleChange = (event) => {
      setProdList(event.target.value);
    };

  return(
    <div>
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <Link to="/" id="brand" className='noDecoLinkBold'>
                  MyReactApp
                </Link>
              </Typography>

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginBottom:3,}}>
              <InputLabel id="demo-simple-select-standard-label" style={{color:'white'}}>Producto</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={prodList}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'teclado'}>
                  <Link to="/productos/teclado" className='noDecoLink' style={{color:'black'}}>Teclado</Link>
                </MenuItem>
                <MenuItem value={'headset'}>
                  <Link to="/productos/headset" className='noDecoLink' style={{color:'black'}}>Auriculares</Link>
                </MenuItem>
                <MenuItem value={'webcam'}>
                  <Link to="/productos/webcam" className='noDecoLink' style={{color:'black'}}>Webcam</Link>
                </MenuItem>
              </Select>
            </FormControl>
              

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={goToProds}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>


              <CartWidget style={{paddingLeft: 10,}} />
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  )
}

export default NavBar;



{/*               
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button>
                    <Link to="/productos/teclado" className='noDecoLink'>Teclado</Link>
                  </Button>
              </Box> 
              
              <Link to="/productos/teclado" className='noDecoLink'>Teclado</Link>
              <Link to="/productos/headset" className='noDecoLink'>Auriculares</Link>
              <Link to="/productos/webcam" className='noDecoLink'>Webcam</Link>
              */}