import styled from 'styled-components'

export const Background = styled.div`
  background: rgb(85,198,234);
  background: linear-gradient(45deg, rgba(85,198,234,1) 0%, rgba(20,138,255,1) 100%);
  height: ${props => props.page ? "30vh" : "100vh"};
  width: 100%;
`;

export const Floater = styled.div`
  background: white;
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: -150px;
`;

export const Divider = styled.svg`
position: absolute;
bottom: 0;
width: 100%;
height: 150px;

transform: rotate(180deg);

path {
  fill: #fff
}

@media (max-width: 1415px) {
  height: 130px;
}

@media (max-width: 900px) {
  height: 80px;
}

@media (max-width: 711px) {
  height: 50px;
}

@media (max-height: 375px) {
  height: 20px;
}
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`;

export const Container = styled.div`
  max-width: 1065px;
  margin: auto;


  @media (max-width: 1415px) {
    padding: 0px 70px;
  }

  @media (max-width: 900px) {
    padding: 0px 55px;
  }

  @media (max-width: 711px) {
    padding: 0px 25px;
  }
`;


export const Header = styled.div`
  padding: 240px 0px;
  color: ${props => props.page ? "#129CDF" : "white"};
  
  h5 {
    margin: 0;
    font-weight: 300;
    font-size: 1.4em;
  }

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 4.2em;
    line-height: 4.2rem;
  }

  @media (max-width: 900px) {

    padding: 200px 0px;

    h5 {
      font-size: 1em;
    }
  
    h2 {
      font-size: 3.7em;
      line-height: 3.7rem;
    }
  }

  @media (max-width: 711px) {

    padding: 240px 0px 80px;

    h2 {
      font-size: 2.8em;
      line-height: 2.8rem;
    }
  }

  @media (max-height: 375px) {

    padding: 140px 0px 20px;

    h2 {
      font-size: 2.8em;
      line-height: 2.8rem;
    }
  }
`;