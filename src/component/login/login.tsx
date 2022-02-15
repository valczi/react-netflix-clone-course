import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Styles from './login.module.css';

interface LoginInterface {

}

export default function BasicCard({ }: LoginInterface) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
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
    );
}
