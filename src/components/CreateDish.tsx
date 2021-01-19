import React from 'react';
import { Header, Input, TextArea, Radio, Checkbox, Dropdown } from 'semantic-ui-react';


export function CreateDish() {

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

    return (
        <div className='create-dish'>
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
        
        </div>

        
    )
}
