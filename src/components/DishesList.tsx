import React from 'react'
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Dish from './Dish'


// create a model class for dish.ts
// export interface IActivity {
//   id: string,
//   title: string,
//   description: string,
//   category: string,
//   date: Date,
//   city: string,
//   venue: string,
//   isGoing: boolean, // specific to currentlyLoggedIn user
//   isHost: boolean, // specific to currentlyLoggedIn user
//   attendees: IAttendee[]
//   comments: IComment[]
// }

// create a dish[] : IDish[] you can create 2 or 3 objects
export function DishesList() { // you will get 'id' here

// use this id to get single dish object using filter

  return (
    // map the dish[] 
    <div className="dishes-container">
      <Header as='h2'>List of Dishes</Header>
      <ul>
        <li>
          <Dish />
          <Link to={`/dishesDetails/dish`}>
   
        </Link>
        </li>

        <li>
          <p>Dish 2  </p>
   </li>

        <li>
          <p>Dish 3  </p>
    </li>
      </ul>


    </div>
  );
}
