import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import './login.css';

interface LoginInterface {

}

export default function BasicCard({ }: LoginInterface) {
    return (
        <div className='body'>
            <Card className='card'>
                <CardContent className='cardContent' >
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Input id="component-simple" />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Input id="component-simple" />
                    </FormControl>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
