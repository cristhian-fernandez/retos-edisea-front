import { Route, Routes} from 'react-router-dom';
import './App.css';
import LandingSistemas from './views/LandingPage/LandingSistemas';
import PageNotFound from './views/PageNotFound/PageNotFound';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<LandingSistemas />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;