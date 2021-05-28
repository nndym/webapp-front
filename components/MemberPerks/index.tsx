import React from 'react'
import styled from 'styled-components'
import Button from '../Input/Button';


const PerkGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 15px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

const Perk = styled.div`
    padding: ${props => props.big ? "10px" : "25px"};
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: ${props => props.background};
    color: #fff;

    ${props => props.big ? "grid-column-start: 1;grid-column-end: 4;" : ""}

    @media (max-width: 1100px) {
        ${props => props.big ? "grid-column-start: 1;grid-column-end: 3;" : ""}
    }

    @media (max-width: 850px) {
        ${props => props.big ? "grid-column-start: 1;grid-column-end: 2;" : ""}
    }


    i {
        font-size: 50px;
        padding-right: 14px;
    }

    h4 {
        margin: 0;
        font-size: 20px
    }
`;

const Main = styled.main`
  margin: 15px 0px;
  margin-bottom: 50px;


  h2 {
      font-size: 2.5rem;
      margin: 15px 0px;
      line-height: 2.5rem;
      font-weight: 800;
  }
`;

const WhiteInner = styled.div`
    margin: 0px;
    background: white;
    color: black;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    font-size: 1.8rem;

    h3 {
        margin:8px;
    }
`;

const ButtonHolder = styled.div`
    display: inline-flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    margin: 20px 0px;

    @media (max-width: 930px) {
        flex-direction: column;

    }
`

function MemberPerks() {
    return (
        <Main>
            <h2>Become <br/>a member</h2>
            <PerkGrid>
                <Perk background="linear-gradient(327deg, rgba(255,0,0,1) 0%, rgba(242,111,11,1) 100%);">
                    <i className="las la-swatchbook"></i>
                    <h4>Exclusive Content</h4>
                </Perk>
                <Perk background="linear-gradient(327deg, rgba(0,136,255,1) 0%, rgba(26,11,242,1) 100%);">
                    <i className="las la-pen-alt"></i>
                    <h4>Early Sign Up's</h4>
                </Perk>
                <Perk background="linear-gradient(327deg, rgba(255,0,87,1) 0%, rgba(242,11,142,1) 100%);">
                    <i className="las la-people-carry"></i>
                    <h4>Seva Opportunities</h4>
                </Perk>
                <Perk background="linear-gradient(327deg, rgba(255,98,98,1) 0%, rgba(255,0,0,1) 100%);">
                    <i className="las la-calendar-day"></i>
                    <h4>Exclusive Events</h4>
                </Perk>
                <Perk background="linear-gradient(327deg, rgba(98,138,255,1) 0%, rgba(43,213,0,1) 100%);">
                    <i className="las la-apple-alt"></i>
                    <h4>Extra Perks</h4>
                </Perk>
                <Perk background="linear-gradient(327deg, rgba(142,98,255,1) 0%, rgba(255,0,125,1) 100%);">
                    <i className="las la-globe"></i>
                    <h4>And more!</h4>
                </Perk>
                <Perk big background="linear-gradient(327deg, rgba(0,34,255,1) 0%, rgba(150,11,242,1) 100%);">
                    <WhiteInner>
                        <h3>100% Free</h3>
                    </WhiteInner>
                </Perk>
            </PerkGrid>
            <ButtonHolder>
                <Button primary href="/register">
                    Become a Member
                </Button>
                <Button href="/member">
                    Learn More
                </Button>
            </ButtonHolder>
        </Main>
    )
}

export default MemberPerks
