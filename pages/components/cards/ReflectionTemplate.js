import React from 'react';
import { makeStyles, createStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import PageContainer from '../common/PageContainer';

const styles = makeStyles((theme) =>
  createStyles({
    reflectionContainer: {
      paddingLeft: "12vw",
      paddingRight: "12vw"
    }
  })
);

const ReflectionTemplate = ( {content} ) => {
  const classes = styles();

  return (
    <PageContainer>
      <div className={classes.reflectionContainer}>
        <div className={classes.title}>
          {content.title}
        </div>
        <div className={classes.date}>
          {content.date}
        </div>
        <div className={classes.image}>
          <img src={content.imageUrl} alt="image"/>
        </div>
        {content.sections.map((section, index) => (
          <div key={`section-${index}`}>
            <div className={classes.heading}>{section.heading}</div>
            {section.paragraphs.map((paragraph, subindex) =>
              {return paragraph.text ?
                <div key={`paragraph-${subindex}`} className={classes.text}>{paragraph.text}</div> :
                paragraph.unordered ? (
                  <div className={classes.list}>
                    <ul>
                      {paragraph.list.map((item, listindex) => (
                        <li key={`listItem-${index}-${listindex}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ol>
                    <div className={classes.list}>
                      {paragraph.list.map((item, listindex) => (
                        <li key={`listItem-${index}-${listindex}`}>{item}</li>
                      ))}
                    </div>
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