import React, {useState, useEffect }from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import WorldMap from "./WorldMap";
import { NavLink, Route } from "react-router-dom";
// import "./App.css";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import dynamic from "next/dynamic";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const MapWithNoSSR = dynamic(() => import("./WorldMap"), {
    ssr: false
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


 

  return  (<MapWithNoSSR />)
//   (
    // <div className={classes.root}>
      {/* <AppBar position="static" className="app-link-container"> */}
 
        {/* <NavLink exact to="/" activeClassName="activeRoute" className="app-link">
          {" "}
          <div className="app-link-block">Home</div>{" "}
        </NavLink>
        <NavLink to="/map" activeClassName="activeRoute" className="app-link">
          {" "}
          <div className="app-link-block">Map</div>{" "}
        </NavLink>
        <NavLink to="/charts" activeClassName="activeRoute" className="app-link">
          {" "}
          <div className="app-link-block">Charts</div>{" "}
        </NavLink>
        <NavLink to="/about" activeClassName="activeRoute"  className="app-link">
          {" "}
          <div className="app-link-block">About</div>{" "}
        </NavLink> */}
        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
      {/* </AppBar> */}
     

    {/* </div> */}
//   );
  }
