import styled from 'styled-components';

export const Card = styled.div`
  width: 1200px;
  max-width: 1080px;
  background-color: #49798c;
  border-radius: 10px;
  padding: 3em;
`;

export const Shelf = styled.div`
  background: #283940;
  border: 1px solid #03a6a6;
  padding: 2em 1em;
  border-radius: 10px;
  position: relative;
  height: 170px;

  & + div {
    margin-top: 3em;
  }

  h1 {
    position: absolute;
    top: -35px;
    color: #f29d35;
    font-family: 'Fredoka One', cursive;
  }
`;
