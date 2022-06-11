import './App.css';
import SecondPageA from './components/SecondPageA';
import SecondPageB from './components/SecondPageB';
import FirstPage from './components/FirstPage';
import ThirdPage from './components/ThirdPage';
import LastPage from './components/LastPage';
import  { BrowserRouter   ,Routes,Route}from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstPage/>}/> 
        <Route  path="/secondPageA" element={<SecondPageA />} />
        <Route  path="/secondPageB" element={<SecondPageB />} />
        <Route  path="/thirdPage" element={<ThirdPage />} />
        <Route  path="/lastPage" element={<LastPage />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
