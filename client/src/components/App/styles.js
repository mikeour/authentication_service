import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Div = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const Li = styled.li`
  padding: 10px;
  margin: 15px;
  border: 1px solid black;
  border-radius: 5px;
  background: yellow;

  :hover {
    background: blue;
    opacity: 0.7;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: yellow;

  :visited,
  :active,
  :hover {
    color: red;
  }
`;

export { Div, Ul, Li, StyledNavLink };
