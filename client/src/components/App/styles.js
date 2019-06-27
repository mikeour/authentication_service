import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Div = styled.div`
  max-width: 500px;
  margin: auto;
  overflow: hidden;
  padding: 40px;
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
  background: #2196f3;
  opacity: 1;

  :hover {
    opacity: 0.8;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  :visited,
  :active,
  :hover {
    color: white;
  }
`;

export { Div, Ul, Li, StyledNavLink };
