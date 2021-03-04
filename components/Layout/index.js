import { Children } from "react";

import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

import Link from "next/link";

import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    minHeight: 300,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1614183259136-da6339ccd662)",
    backgroundSize: "cover fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color:'#FFFFFF'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage:
    //   "url(https://images.unsplash.com/photo-1614183259136-da6339ccd662)",
    // backgroundSize: "cover fixed",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    flex: "0",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const Layout = ({ children }) => {
  const sections = [
    {
      title: "GitHub",
      url: "http://www.github.com/deniavsa",
    },
    {
      title: "LinkedIn",
      url: "http://www.linkedin.com/in/deniavsa",
    },
    {
      title: "GitHub",
      url: "http://www.github.com/deniavsa",
    },
    {
      title: "LinkedIn",
      url: "http://www.linkedin.com/in/deniavsa",
    },
    {
      title: "GitHub",
      url: "http://www.github.com/deniavsa",
    },
    {
      title: "LinkedIn",
      url: "http://www.linkedin.com/in/deniavsa",
    },
    {
      title: "GitHub",
      url: "http://www.github.com/deniavsa",
    },
    {
      title: "LinkedIn",
      url: "http://www.linkedin.com/in/deniavsa",
    },
  ];

  const post = {
    title: "Welcome to my blog",
    description: "Here you can see very things about tecnology",
    // linkText: "Go ahead",
    image: "url(https://images.unsplash.com/photo-1614183259136-da6339ccd662)",
  };

  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small"></Button> */}
        <Typography
          component="h2"
          variant="h3"
          
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Deni.Dev - Blog
        </Typography>
        {/* <IconButton><SearchIcon /></IconButton> */}
        {/* <Button variant="outlined" size="small">
          LinkedIn
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <a
            href={section.url}
            rel="noreferrer"
            target="_blank"
            className={classes.toolbarLink}
          >
            {section.title}
          </a>
        ))}
      </Toolbar>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {
          <img
            style={{ display: "none" }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <div className={classes.overlay} />

        <div className={classes.mainFeaturedPostContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Container>
        </div>
      </Paper>
      {children}
      <AppBar position="static" color="primary">
        <Container maxWidth="xs">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 - Denilson Santos
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Layout;
