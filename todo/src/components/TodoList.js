import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
border: solid black 1px;
margin: 2%;
`;

export default function TodoList(props) {

    return (
        <>  
        <Container>
        {props.data.map((item, index) => (
            <Todo data = {item} key = {index} toggleStatus = {props.toggleStatus}/>
        ))}
        </Container>
        </>
    )
}