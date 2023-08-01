import { makeStyles, createStyles } from "@mui/styles";
import Masonry from '@mui/lab/Masonry';
import PageContainer from "./components/common/PageContainer";
import InspoPhiloHeader from "./components/InspoPhiloHeader";
import ImageCard from "./components/cards/ImageCard";
import TextCard from "./components/cards/TextCard";

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: '2vw'
    },
  })
);

const items = [
  {
    text: "welcome to the end of the world, mr. loverman."
  },
  {
    image: "/images/cat_comp_projects.png",
  },
  {
    header: "this is weird",
    text: "this is an interesting little thing I wonder what kind of rats live in the house. this is an interesting little thing I wonder what kind of rats live in the house. this is an interesting little thing I wonder what kind of rats live in the house. this is an interesting little thing I wonder what kind of rats live in the house. this is an interesting little thing I wonder what kind of rats live in the house. this is an interesting little thing I wonder what kind of rats live in the house."
  },
  {
    image: "/images/face_comp_cat.png"
  }
]

const InspoPhilo = () => {
  const classes = styles();

  return (
    <PageContainer>
      <div className={classes.container}>
        <InspoPhiloHeader/>
        <Masonry columns={{ xs: 1, md: 2, xl: 3 }} spacing={2}>
          {items.map((item, index) => (
            item.text ? (
              <TextCard key={`inspo-philo-text-${index}`} header={item.header ? item.header : ""} text={item.text}/> ) : (
              <ImageCard key={`inspo-philo-image-${index}`} href={item.image}/> )
          ))}
        </Masonry>
      </div>
    </PageContainer>
  );
};

export default InspoPhilo;