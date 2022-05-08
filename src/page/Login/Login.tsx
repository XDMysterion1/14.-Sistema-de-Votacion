import React from 'react'
import Grid       from '@mui/material/Grid';
import Box        from '@mui/material/Box';
import Container  from '@mui/material/Container';
import TextField  from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardOutlinedIcon  from '@mui/icons-material/ArrowForwardOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';


export function Login() {
  return (
    <Grid container spacing={3} >
        <Grid item xs={12}></Grid>
        <Grid item xs={4.5} ></Grid>
        <Grid item xs={3} >
                <Container sx={{ 'border': 'black 2px outset','border-radius': '15px'}} >
                    <form >
                        <Box  display="flex" alignItems="center" justifyContent="center" sx={{ m: 2 , p:1}}>
                            <Typography component="h1" variant="h4">
                                Iniciar sesion
                            </Typography>
                        </Box>
                        <Box  display="flex" alignItems="center" justifyContent="center" sx={{ m: 3 }}>
                            <PersonOutlinedIcon sx={{ height: '5em',width:'5em'}} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 2 }} display="flex" alignItems="center" justifyContent="center" >
                            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-email-sx" label="Correo electronico" variant="standard" autoFocus/>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' , m: 2}} display="flex" alignItems="center" justifyContent="center" >
                            <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-password-sx" label="Contraseña" variant="standard" />
                        </Box>
                        
                        <Box  display="flex" alignItems="center" justifyContent="center"  sx={{ m: 2 }}>
                            <IconButton aria-label="delete"  >
                                <ArrowForwardOutlinedIcon sx={{ 'height': '2em','width':'2em', 'background-color':'#d13639', 'color':'#ffffff', 'border':'1px solid hsl(0deg 0% 100% / 12%)'}} />
                            </IconButton>
                        </Box>
                    </form>
                </Container>
        </Grid>
        <Grid item xs={4.5}></Grid>
    </Grid>
  )
}
