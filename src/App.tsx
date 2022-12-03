import styled from 'styled-components';
import './App.css';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Navbar from './components/nav/Navbar';
import GlobalStyle from './globalStyle/globalStyle';

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  /* overflow: auto;
  padding: 0 40px; */
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <Hero />
        <Info />
      </Wrapper>
    </div>
  );
}

export default App;
