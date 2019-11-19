import styled from "styled-components";

const primary = "orange";
const secondary = "orange";

export const Button = styled.button`
  color: ${primary};
  margin: 2rem;
  text-transform: uppercase;
  width: ${props => props.width};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 1fr);
`;
