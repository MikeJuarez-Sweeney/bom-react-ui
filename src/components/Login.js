import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));
  

export const Login = () => {
    const classes = useStyles()
    return (
        <>
        <h2>&nbsp;&nbsp;LOGIN</h2>
        <Grid container spacing={0}>          
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Email" variant="outlined" /><br />
                <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
                <Button variant="outlined" color="primary">Login</Button>
            </form>     
        </Grid>
        </>
    )
}

export default Login