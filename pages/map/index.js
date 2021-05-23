import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import WorldMap from "./WorldMap";
import Wrapper from "../../components/shared/Wrapper/Wrapper";
import { NavLink, Route, BrowserRouter } from "react-router-dom";
// import "./App.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Navbar } from "../../components/shared/Navbar/Navbar";
import { useRouter } from "next/router";
import { Button } from "../../components/shared/Button/Button";

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
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const MapWithNoSSR = dynamic(
    () => import("../../components/map/WorldMap/WorldMap"),
    {
      ssr: false,
    }
  );

  //   const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  //   const handleClick = () => setClick(!click);
  //   const closeMobileMenu = () => setClick(false);

  //   const showButton = () => {
  //     if (window.innerWidth <= 960) {
  //       setButton(false);
  //     } else {
  //       setButton(true);
  //     }
  //   };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Wrapper>
        <MapWithNoSSR />
      </Wrapper>
    </div>
  );
}
