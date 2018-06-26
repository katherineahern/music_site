import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ArrowUpward,
  AccessTime
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";

import {
  ChartCard,
  RegularCard,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import {
  Speaker,
  Album,
  SettingsVoice,
  MusicNote
} from "@material-ui/icons";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <a href="https://www.eventbrite.com/o/improvisational-technology-17153874424">
            <RegularCard
              cardTitle="The Internet: Live!"
              cardSubtitle="Get Tickets"
            />
          </a>

        </ItemGrid>
        </Grid>
        <Grid container>
          
            <ItemGrid xs={12} sm={12} md={4}>
              <a href="/roulette">
              <ChartCard
                chart={
                  <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />
                }
                chartColor="green"
                title="Improv Karaoke Roulette"
                text={
                  <span>
                    <span className={this.props.classes.successText}>
                      <ArrowUpward
                        className={this.props.classes.upArrowCardCategory}
                      />{" "}
                      10000%
                    </span>{" "}
                    increase in songwriting.
                  </span>
                }
                statIcon={AccessTime}
                statText="updated when you sing"
              /></a>
            </ItemGrid>

          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="You Are The DJ"
              text="Choose Genre and Emotion"
              statIcon={AccessTime}
              statText="support the scene"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              }
              chartColor="red"
              title="About Us"
              text="Improvisational Technology and All Out Comedy Theater"
              statIcon={AccessTime}
              statText="see us live"
            />
          </ItemGrid>
        </Grid>
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
