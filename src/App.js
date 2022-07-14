
import styled from 'styled-components';
import './App.css';
import { Home } from './page/home';

function App() {
  return (
    <Container  >
      <Home />
    </Container >
  );
}

export default App;
const Container =  styled.div`
::before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -150;
    background: rgba(0, 0, 0, 0.02);
  }`
