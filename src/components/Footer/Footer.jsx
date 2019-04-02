/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import Button from "components/CustomButtons/Button.jsx";

import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            
            <ListItem className={classes.ListItem}>
              <Link to={"/"} color="white">
                <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
                >
                Home
                </Button>
                
              </Link>
            </ListItem>

          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , Site is made by{" "}
           by{" "}
          <a
            href="https://reactjs.org/"
            className={aClasses}
            target="_blank"
          >
            React Framework
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
