import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const DropdownMenu = ({classes}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className='dropdown-container'>
            <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
                <Icon className={classes.dropdown}>menu</Icon>
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}><Link to='/' className='link-styles'>Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/apollo' className='link-styles'>Apollo</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/orion' className='link-styles'>Orion</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/milkyway' className='link-styles'>Milky Way</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/nebula' className='link-styles'>Nebula</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/galaxy' className='link-styles'>Galaxy</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/stars' className='link-styles'>Stars</Link></MenuItem>
            </Menu>
        </div>
    );
}

const styles = {
    dropdown: {
        color: '#FFF',
        fontSize: '30px'
    }
}

export default withStyles(styles)(DropdownMenu);