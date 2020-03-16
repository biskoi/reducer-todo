import React from 'react';
import styled from 'styled-components';
import './Todo.css';

const Box = styled.div`
border: solid black 1px;
width: 50%;
display: flex;
flex-direction: column;
margin: 2%;
padding: 2%;
`;

export default function Todo(props) {



    return (
        <Box onClick = {() => props.toggleStatus(props.data.id)} className = {props.data.completed ? 'complete' : 'incomplete'}>
            <p>ID: {props.data.id}</p>
            <p>Item: {props.data.item}</p>
            <p>Status: {props.data.completed ? 'Complete' : 'Pending'}</p>
        </Box>
    )

}