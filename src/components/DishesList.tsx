import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Dish from './Dish'
 

// create a model class for dish.ts

interface IDish {
  key: any;
  name: string;
  lenght?: number;
  ingredience?: string[];
  cook?: string;
  info?: string;
  vegan?: boolean;
}


// create a dish[] : IDish[] you can create 2 or 3 objects

const dishExampleArray: any[] = [
 { key: 'test1', 
  name: 'Pizza',
  lenght: 30,
  ingredience: ['test'],
  cook: 'bake',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  vegan: true}, 
  
  { key: 'test2', 
  name: 'Burito',
  lenght: 20,
  ingredience: ['ingrediend1', 'ingrediend2'],
  cook: 'bake',
  info: 'Lorem ipsum dolor sit amet, ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  vegan: false
  }, 
   
  { key: 'test3', 
  name: 'Lasagne',
  lenght: 20,
  ingredience: ['ingrediend1', 'ingrediend2', 'ingrediend2'],
  cook: 'cook',
  info: 'Lorem ipsum dolor sit amet,',
  vegan: true
  }
   
]


export function DishesList() { // you will get 'id' here

// use this id to get single dish object using filter


  return (
    // map the dish[] 

    // {
    //   dishExampleArray.map((dish) => {
    //     return (
    //       {dishExampleArray.name}
    //     )
    //   })
    
    // }

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
