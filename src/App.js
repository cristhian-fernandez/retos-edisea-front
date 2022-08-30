import { Route, Routes} from 'react-router-dom';
import './App.css';
import LandingSistemas from './views/LandingPage/LandingSistemas';
import PageNotFound from './views/PageNotFound/PageNotFound';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<LandingSistemas />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;