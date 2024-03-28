import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import { IconMenu2 } from '@tabler/icons-react';
import Categories from 'layout/Categories/Categories';

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ height: '48px', marginBottom: '8px' }}>
        <Toolbar>
          <Box
            sx={{
              width: 228,
              display: 'flex',
              [theme.breakpoints.down('md')]: {
                width: 'auto'
              }
            }}
          >
            <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
              <LogoSection />
            </Box>
            <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.mediumAvatar,
                  transition: 'all .2s ease-in-out',
                  background: theme.palette.secondary.light,
                  color: theme.palette.secondary.dark,
                  '&:hover': {
                    background: theme.palette.secondary.dark,
                    color: theme.palette.secondary.light
                  }
                }}
                onClick={handleLeftDrawerToggle}
                color="inherit"
              >
                <IconMenu2 stroke={1.5} size="1.3rem" />
              </Avatar>
            </ButtonBase>
          </Box>

          <SearchSection />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1 }} />
          <NotificationSection />
          <ProfileSection />
        </Toolbar>
      </AppBar>

      <AppBar position="fixed" elevation={0} style={{ top: '80px', height: '40px', backgroundColor: '#f0f0f0', width: '100%', left: 0 }}>
        <Toolbar>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              padding: '30px'
            }}
          >
            <IconButton>
              <Categories />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
