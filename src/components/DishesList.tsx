import React from 'react'
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {Dish} from './Dish'

export function DishesList() {


  return (
    <div className="dishes-container">
      <Header as='h2'>List of Dishes</Header>
      <ul>
        <li>
          <Dish />
          <Link to="/dishesDetails/Dish-1">
   
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
