import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Courses', 'ContactUs'];

const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'red', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
        YK Career College
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'red',
                  fontFamily: 'Arial, sans-serif',
                  textTransform: 'uppercase',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',
          animation: `${slideDown} 0.8s ease-out`,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.68)',
          borderBottom: '3px solid red',
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
              <MenuIcon sx={{ color: 'red', fontSize: '2rem' }} />
            </IconButton>
          )}

          <Typography
            variant="h5"
            fontWeight="bold"
            noWrap
            component="div"
            sx={{
              color: 'red',
              flexGrow: 1,
              fontFamily: 'Arial, sans-serif',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            YK Career College
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: 'red',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    mx: 2,
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
                    position: 'relative',
                    '&:hover': {
                      color: '#ff6b6b',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '3px',
                        backgroundColor: '#ff6b6b',
                        bottom: '-6px',
                        left: 0,
                      },
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#f8f9fa',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
