import React, { Fragment } from 'react';
import { Button, Header, Input, TextArea, Radio, Checkbox, Dropdown, Container, Grid } from 'semantic-ui-react';



const ingredience = [
  {
    key: 'Cook',
    text: 'Cook',
    value: 'Cook'
  },
  {
    key: 'Bake',
    text: 'Bake',
    value: 'Bake'
  },
  {
    key: 'Fry',
    text: 'Fry',
    value: 'Fry'
  },
  {
    key: 'Heat up',
    text: 'Heat up',
    value: 'Heat up'
  },
]

// create a model class for dish.ts

interface IDish {
  key: any;
  name: string;
  lenght?: number;
  ingredience?: string;
  cook?: string;
  info?: string;
  vegan?: boolean;
}


function submitDish(event: any) {
  event.preventDefault();
  console.log('create dish', CreateDish)
}

const CreateDish = ({ name = 'Dish name' }: IDish) => {
  return (
    <Fragment>
      <Container>

        <form id='test' onSubmit={submitDish}> 

        <Grid.Row>
          <Grid.Column width={5}>
            
          </Grid.Column>


          <Grid.Column width={6}>
            <Header as='h2'>Create your Dish</Header>
            <Input label='Create Name:' placeholder='ex. "Broccoli extravaganza"' />

            <h4>How long does it take to make it?</h4>
            <Radio label='10min - 20min' />
            <Radio label='20min - 30min' />
            <Radio label='30min - 40min' />
            <Radio label='40min - 50min' />
            <Radio label='50min - 80min' />

            <h4>Choose your ingredience:</h4>
            <Checkbox label='Bread' />
            <Checkbox label='Vegetables' />
            <Checkbox label='Meat' />
            <Checkbox label='Spices' />
            <Checkbox label='Butter' />
            <Checkbox label='Milk' />
            <Checkbox label='Pasta' />
            <Checkbox label='Rice' />
            <Checkbox label='Potatoes' />


            <h4>Do you need to:</h4>
            <Dropdown
              placeholder='Select Friend'
              fluid
              selection
              options={ingredience}
            />



            <h4>Tell us a bit about the dish</h4>
            <TextArea placeholder='Dish background' />
          </Grid.Column>

            <h4>Is it a vegan dish:</h4>
            <Checkbox label='Yes' />
          <br />
          <br/>
          <Button type="submit">Save Dish</Button>
          <br/>
          <br/>
          <Grid.Column width={5}>
            
          </Grid.Column>
        </Grid.Row>

        </form>
        

      </Container>
    </Fragment>
    
  )
}

export default CreateDish;