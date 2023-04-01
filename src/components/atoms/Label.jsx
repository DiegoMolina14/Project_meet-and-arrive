import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #000000;
`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
    );
}


export default Label;