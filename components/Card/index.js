import React from "react";
import { Typography, Box } from "@material-ui/core";
import Link from "next/link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    // backgroundColor: theme.palette.primary.main,
    // backgroundColor: 'silver',
    // width:'90%',
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
    card: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(2),
      border: `3px solid ${theme.palette.primary.dark}`,
      borderRadius: theme.shape.borderRadius * 2,
    },
  },
}));

const Card = ({ title, img, number, post, highlighted }) => {
  const classes = useStyles();

  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={img} alt="avatar image" width="150" height="150" />
        <Typography>
          <Link href="posts/[id]" as={`/posts/${post}`}>
            <a>{title}</a>
          </Link>
          <Typography>{number}</Typography>
        </Typography>
      </Box>
    </div>
  );
};

export default Card;
