import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
 import Logo1 from '../../../assets/logo/Logo Files/For Web/png/Black_logo_no_background.png';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      
      <img width={150} src={Logo1} alt='...'/>
      {/* <Typography variant='h2'>National Book Store</Typography> */}
    </ButtonBase>
  );
};

export default LogoSection;
