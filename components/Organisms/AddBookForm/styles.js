import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (min-width: 1068px){
    width: 70%;
    padding-top: 50px;

  }
`;

export const Form = styled.form`
display: flex;
height: 150vh;
flex-direction: column;
justify-content: space-around;
padding-top: 25px;
padding-bottom: 20vh;
@media only screen and (min-width: 1068px){
  padding-top: 50px;

}
`

export const Load = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
`;