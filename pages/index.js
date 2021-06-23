import styles from "../styles/Home.module.css";
import { Grid, Typography, Box } from "@material-ui/core";

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={styles.container}
    >
      <div className={styles.heading}>
        <span className={styles.headingBackground}>
          <Box fontWeight="fontWeightBold" variant="h3">
            Very very carefully chosen tutors
          </Box>
        </span>
      </div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={styles.content}
      >
        <Typography variant="h5" className={styles.contentHeading}>
          Cambridge & IB Mathematics Subject Choice
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          className={styles.courses}
        >
          <Grid>
            <Typography
              variant="h6"
              component="li"
              className={styles.courseName}
            >
              IGCSE - Mathematics
            </Typography>
            <Typography variant="subtitle1" component="li">
              Mathematics Core/Extended 0580
            </Typography>
            <Typography variant="subtitle1" component="li">
              International Mathematics 0607
            </Typography>
            <Typography variant="subtitle1" component="li">
              Additional Mathematics 0606
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              component="li"
              className={styles.courseName}
            >
              AS-A Level
            </Typography>
            <Typography variant="subtitle1" component="li">
              Mathematics 9709
            </Typography>
            <Typography variant="subtitle1" component="li">
              Mathematics Further 9231
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              component="li"
              className={styles.courseName}
            >
              IBDP
            </Typography>
            <Typography variant="subtitle1" component="li">
              Mathematics: AA SL
            </Typography>
            <Typography variant="subtitle1" component="li">
              Mathematics: AA HL
            </Typography>
            <Typography variant="subtitle1" component="li">
              Mathematics: AI SL
            </Typography>
            <Typography variant="subtitle1" component="li">
              Mathematics: AI HL
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
