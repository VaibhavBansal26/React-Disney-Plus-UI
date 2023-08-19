import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            &copy; Disney Plus 2021 - Vaibhav Bansal 
        </Container>
    )
}

export default Footer;


const Container = styled.div`
    height:40px;
    position:relative;
    color:blue;
    font-size:16px;
    font-weight:400;
    bottom:0;
    background-color:transparent;
    text-align:center;
    padding-bottom:10px;
    margin:2px auto;
`
