import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'relative',
    },
    list: {
        width: 250,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        marginRight: 20,
    },
});

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} color='inherit'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit' aria-label='Menu' onClick={() => { }}>
                        <MenuIcon />
                    </IconButton>
                    <strong>
                        <Link className={classes.link} href="/">Home</Link>
                        <Link className={classes.link} href="/todo">Todo</Link>
                        <Link className={classes.link} href="/counter">Counter</Link>
                    </strong>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
