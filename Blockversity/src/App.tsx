import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
       <Welcome /> 
    </div>
    <Footer />
  </div>
);

export default App;

