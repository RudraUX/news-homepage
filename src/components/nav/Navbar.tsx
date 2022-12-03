import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
const Nav = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  img {
    width: 2.5rem;
    height: 2rem;
  }
  margin-top: 5rem;

  .nav-links li {
    display: inline-block;
    padding: 0 1rem;

    a {
      color: var(--DarkGrayishBlue);
    }
    a:hover {
      color: var(--SoftRed);
    }
  }
`;
function Navbar() {
  return (
    <>
      <Nav>
        <div>
          <a href='#'>
            <img className='logo' src={Logo} />
          </a>
        </div>
        <div className='nav-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>New</a>
          </li>
          <li>
            <a href='#'>Popular</a>
          </li>
          <li>
            <a href='#'>Tranding</a>
          </li>
          <li>
            <a href='#'>Categories</a>
          </li>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
