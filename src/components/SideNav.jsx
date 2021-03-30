import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { NavLink } from "react-router-dom";
import useStyles from '../materialUIStyles/SideNavStyles';
import Table2 from './pages/members/Table2'

const path = "/member"
const navList = [
  { faculty: "MSME", facultyId: 1 },
  { faculty: "VMS", facultyId: 2 },
  { faculty: "CA", facultyId: 3 },
  { faculty: "VME", facultyId: 4 },
]

function NavItem(props) {
  return (
    <div>
      <NavLink to={{
        pathname: path,
        state: { id: props.id, facultyName: props.faculty }
      }}
        activeClassName="active" className="nav-link text-dark">
        <p className="h5">{props.faculty}</p>
      </NavLink>
    </div>
  );
}

export default function SideNav(props) {
  const classes = useStyles();
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  const handleDrawerClose = () => {
    props.setOpen(false);
  };

  return (
    // <div className={classes.root}>
    <Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar style={{backgroundColor: "#485d84"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography> */}
        </Toolbar >
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Typography className="ml-3"  style={{color: "grey"}} variant="h5" noWrap>
          Faculty
        </Typography>
        <Divider />
        <List>
          {navList.map((navItem) => (
            <NavItem faculty={navItem.faculty} id={navItem.facultyId} key={navItem.facultyId} />
          ))}
        </List>
      </Drawer>

      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Table2 />
      </main> */}
    {/* </div> */}
    </Fragment>
  );
}
