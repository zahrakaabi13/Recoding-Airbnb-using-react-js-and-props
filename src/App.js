import './App.css'
import TopBar from './components/Topbar'
import Landingpage from "./components/Landingpage"
import Environs from './components/Environs'
import ChezVous from './components/ChezVous'
import DevenezHote from './components/DevenezHote'
import Experiences from './components/Experiences'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <TopBar/>
    <Landingpage/>
    <Environs/>
    <ChezVous/>
    <DevenezHote/>
    <Experiences/>
    <Footer/>
    </div>
  );
}

export default App;
