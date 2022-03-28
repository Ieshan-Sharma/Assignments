import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    padding: "40px",
    paddingRight: "40px",


  }
});


export const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />

      <Grid
        container
        className={classes.gridContainer}
        justify="center"

      >
        <Grid item xs={12} sm={6} md={4}>
          <Card title="Dev Stack"
            one="Development and Build configuration"
            two="Typechecking"
            three="Eslint"
            four="Testing"
            five="CICD" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>

          <Card title="Application Core"
            one="State Management"
            two="Data Flow"
            three="Middlewares"
            four="Localization"
            five="Helpers" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card title="Interface"
            one="Components"
            two="Styling & Theming"
            three="Responsivity"
            four="Tracking"
            five="Misc" />
        </Grid>

      </Grid>

    </div>
  );
}

