import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }



function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const theme = createTheme();



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
};

  return (<div>
    <Button 
     style={{
       backgroundColor: '#428BCA', 
       color: '#FFFFFF', 
       border: 'none', 
       padding:'12px 65px',
      textAlign: 'center',
    textDecoration:'none',
  display: 'inline-block',
  fontSize: '10px',
  borderRadius: '3px',
  fontWeight: 'bold',
  justifyContent: 'center'}} 
     onClick={handleClickOpen}>
      להצטרפות
    </Button>
    <Dialog open={open}  onClose={handleClose} >
      <DialogActions>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="לקוחות חדשים? הירשמו" {...a11yProps(0)} />
          <Tab label="יש לכם חשבון? התחברו" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <ThemeProvider theme={theme}>
      <Grid container component="main">
        <CssBaseline />
        <Grid>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <TextField
                required
                name="Association"
                label="עמותה"
                type="Association"
                id="Association"
                autoComplete="Association"
              />
              <Grid>
              <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=65160137356-4k8h5c3hrpogoim4ugphh3lnlfdhb82p.apps.googleusercontent.com&redirect_uri=http://localhost:5000/api/login&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline">
              <Button
                //type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Google התחברות באמצעות 
              </Button>
              </a>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <ThemeProvider theme={theme}>
      <Grid container component="main">
        <CssBaseline />
        <Grid>
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
            <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=65160137356-4k8h5c3hrpogoim4ugphh3lnlfdhb82p.apps.googleusercontent.com&redirect_uri=http://localhost:5000/api/login&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              Google התחברות באמצעות 
              </Button>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
      </TabPanel>
    </Box>
      </DialogActions>
    </Dialog>
  </div>
  );
}

