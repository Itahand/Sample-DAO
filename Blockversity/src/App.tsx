import{Navbar, Welcome, Footer} from './components';

const App: React.FC = () => (
  <div>
    <div className="gradient-bg-welcome">
      <Navbar />
       <Welcome /> 
    </div>
    <Footer />
  </div>
);

export default App;

