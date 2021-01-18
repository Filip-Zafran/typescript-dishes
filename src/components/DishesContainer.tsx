import React from 'react'
import { Header, Image } from 'semantic-ui-react'

export function DishesContainer() {
  return (
    <div className="dishes-container">
      <Header as='h2'>List of Dishes</Header>
      <ul>
        <li>
          <p>Dish 1  </p>
          <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F67%2FEataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg%2F1200px-Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg&f=1&nofb=1' size='small' />
        </li>

        <li>
          <p>Dish 2  </p>
          <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fips.plug.it%2Fcips%2Fbuonissimo.org%2Fcms%2F2012%2F02%2Fsarma.jpg%3Fw%3D712%26a%3Dc%26h%3D406&f=1&nofb=1' size='small' />
        </li>

        <li>
          <p>Dish 3  </p>
           <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F32%2F188132-050-E4D1C04E%2FHaggis.jpg&f=1&nofb=1' size='small' />
         </li>
      </ul>

    </div>
  );
}
