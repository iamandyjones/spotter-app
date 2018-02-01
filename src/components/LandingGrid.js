import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import GridCell from './GridCell';
import Card from './Card';
import CardTitle from './CardTitle';
import CardMain from './CardMain';

const LandingGrid = () => (

	<Grid>
      <GridCell>
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