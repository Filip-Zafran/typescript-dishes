import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

export function LandingPage() {
    return (
        <div>
            <Button.Group className='buttons-container'>
                <Link to="/create">
                    <Button>Create Your Dish</Button>
                </Link>

                <Button.Or text='or' />

                <Link to="/list">
                    <Button positive>List of Dishes</Button>
                </Link>
            </Button.Group>
        </div>
    )
}
