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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle >
        <Typography variant="h5" align="center">Sign in</Typography>
              </DialogTitle>
        <DialogContent>
          <DialogContentText> 
          </DialogContentText>
          <TextField
                margin="normal"
                required
                fullWidth
                name="Association"
                label="עמותה"
                type="Association"
                id="Association"
                autoComplete="Association"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="Name"
                label="שם"
                type="Name"
                id="Name"
                autoComplete="Name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="Email"
                label="אימייל"
                name="Email"
                autoComplete="Email"
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="approve" color="primary" />}
                label="קראתי ואני מאשר/ת את תנאי השימוש ומדיניות הפרטיות"
              />
        </DialogContent>
        <DialogActions>
         <Button  type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }} onClick={handleClose}>4Goodהתחברות ל</Button>
          <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ?שכחת סיסמא
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"יש לכם חשבון? התחברו"}
                  </Link>
                </Grid>
              </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
