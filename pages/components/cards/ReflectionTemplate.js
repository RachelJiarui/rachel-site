import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import PageContainer from '../common/PageContainer';

const styles = makeStyles((theme) =>
  createStyles({
    reflectionContainer: {
      marginLeft: "10vw",
      marginRight: "10vw"
    },
    imageContainer: {
      maxWidth: '100%',
    },
    image: {
      maxWidth: '100%',
      height: 'auto'
    }
  })
);

const ReflectionTemplate = ( {content} ) => {
  const classes = styles();

  return (
    <PageContainer>
      <div className={classes.reflectionContainer}>
        <Typography variant="h2" className={classes.title}>
          {content.title}
        </Typography>
        <Typography variant="body1" className={classes.date}>
          {content.date}
        </Typography>
        <div>
          <img className={classes.image} src={content.imageUrl} alt="image"/>
        </div>
        {content.sections.map((section, index) => (
          <div key={`section-${index}`}>
            <Typography variant="h4" className={classes.heading}>{section.heading}</Typography>
            {section.paragraphs.map((paragraph, subindex) =>
              {return paragraph.text ?
                <Typography variant="body1" key={`paragraph-${subindex}`} className={classes.text}>{paragraph.text}</Typography> :
                paragraph.unordered ? (
                  <Typography variant="body1" className={classes.list}>
                    <ul>
                      {paragraph.list.map((item, listindex) => (
                        <li key={`listItem-${index}-${listindex}`}>{item}</li>
                      ))}
                    </ul>
                  </Typography>
                ) : (
                  <ol>
                    <Typography variant="body1" className={classes.list}>
                      {paragraph.list.map((item, listindex) => (
                        <li key={`listItem-${index}-${listindex}`}>{item}</li>
                      ))}
                    </Typography>
                  </ol>
                )
              }
            )}
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default ReflectionTemplate;