import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import GridCell from './GridCell';
import Card from './Card';
import CardTitle from './CardTitle';
import CardMain from './CardMain';
import CardActions from './CardActions';
import Button from './Button';

const LandingGrid = () => (

	<Grid>
      <GridCell>
        <Card>
          <CardTitle title="Card Title" subtitle="Card subtitle" />
			<CardMain>
				<Link to="/workouts">Workouts</Link>
			</CardMain>
		  	<CardActions>
				<div className="mdc-card__action-buttons">
					<Button className="mdc-card__action mdc-card__action--button" label="New Set" />
				</div>
	  		</CardActions>
        </Card>
      </GridCell>

      <GridCell span={6}>
       <Card>
          <CardTitle title="Card Title" subtitle="Card subtitle" />
          <CardMain>
            <Link to="/workouts">Workouts</Link>
          </CardMain>
        </Card>
      </GridCell>

      <GridCell span={6}>
        <Card>
          <CardTitle title="Card Title" subtitle="Card subtitle" />
          <CardMain>
            <Link to="/workouts">Workouts</Link>
          </CardMain>
        </Card>
      </GridCell>
    </Grid>

)

export default LandingGrid;
