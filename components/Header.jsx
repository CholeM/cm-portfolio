import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  Drawer,
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography 
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => {
  const { projects, client, about, contact } = props;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const drawer = (
    <Box
      role='presentation'
      sx={{ width: 250 }}
    >
      <List disablePadding>
        <ListItem>
          <ListItemButton component="a" href="/projects">
            <ListItemText primary='Projects' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/work">
            <ListItemText primary='Client Work' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/about">
            <ListItemText primary='About' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/contact">
            <ListItemText primary='Contact' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'success', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              display: { xs: 'none', md: 'block' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Chole M
          </Typography>
          <Typography
            variant='h5'
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Chole Dev
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer 
              anchor='right'
              open={open}
              onClose={handleDrawerClose}
            >
              {drawer}
            </Drawer>
            {/*<Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href='/projects'>Projects</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href='/work'>Client Work</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href="/about">About</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href='/contact'>Contact</Link>
                </Typography>
              </MenuItem>
            </Menu>*/}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              href='/projects'
              //onClick={handleCloseNavMenu}
              sx={{
                my: 2, 
                color: projects ? '#B1CEFB' : 'white', 
                display: 'block',
                '&:hover': {
                  color: '#B1CEFB',
                },
              }}
            >
              Projects
            </Button>
            <Button
              href='/work'
              //onClick={handleCloseNavMenu}
              sx={{
                my: 2, 
                color: client ? '#B1CEFB' : 'white', 
                display: 'block',
                '&:hover': {
                  color: '#B1CEFB',
                },
              }}
            >
              Client Work
            </Button>
            <Button
              href="/about"
              //onClick={handleCloseNavMenu}
              sx={{
                my: 2, 
                color: about ? '#B1CEFB' : 'white', 
                display: 'block',
                '&:hover': {
                  color: '#B1CEFB',
                },
              }}
            >
              About
            </Button>
            <Button
              href='/contact'
              //onClick={handleCloseNavMenu}
              sx={{
                my: 2, 
                color: contact ? '#B1CEFB' : 'white', 
                display: 'block',
                '&:hover': {
                  color: '#B1CEFB',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;