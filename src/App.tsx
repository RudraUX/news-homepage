import styled from 'styled-components';
import './App.css';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Navbar from './components/nav/Navbar';
import GlobalStyle from './globalStyle/globalStyle';

const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 1440px;
  padding-right: 4rem;
  padding-left: 4rem;
  margin-right: auto;
  margin-left: auto;
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
