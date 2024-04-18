import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';

// project imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'ui-component/Logo';
import { Typography } from '@mui/material';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <Link component={RouterLink} to={DASHBOARD_PATH} style={{textDecoration: 'none'}} aria-label="theme-logo">
        <Typography variant="h2" className="py-2">
            CDR Master
        </Typography>
    </Link>
);

export default LogoSection;
