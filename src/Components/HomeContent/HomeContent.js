import React from "react";
import { Image, Grid, Icon } from "semantic-ui-react";
import "./HomeContent.css";

import WelcomeImage from "../../img/work_img.png";

export default function HomeContent() {
  return (
    <div className="usuarios-data-grid">
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column textAlign="center" width={10}>
            <div className="text-container">
              <span>
                <b> Bienvenido</b>
              </span>
            </div>
          </Grid.Column>
          <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={14}>
              <Image src={WelcomeImage} width={850} centered />
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
