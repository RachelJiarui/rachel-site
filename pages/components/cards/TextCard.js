import { makeStyles, createStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = makeStyles((theme) =>
  createStyles({
    text: {
      paddingTop: '10vw',
      paddingBottom: '10vw',
      paddingRight: '2vw',
      paddingLeft: '2vw',
    }
  })
);

const TextCard = ({ header, text }) => {
  const classes = styles();

  return (
    <div className={classes.text}>
      {header && (
        <Typography variant="body2">
          {header}
        </Typography>
      )}
      <Typography variant="body1">
        {text}
      </Typography>
    </div>
  );
};

export default TextCard;
