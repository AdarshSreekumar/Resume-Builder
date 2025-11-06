import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
    const projectInfo="Meet Resume Builder — the smart resume builder that turns your experience into a professional, interview-ready CV in minutes. Choose a template, customize with AI suggestions, and download a polished PDF that stands out. Build better, faster, get hired sooner."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'brown'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="./icon.jpg" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-white text-decoration-none'>Resume Builder</Link>
          </Typography>
          
          <Tooltip title={projectInfo}><Button color="inherit">About Us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header