import{Navbar, Welcome, Footer} from './components';

const App: React.FC = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
       <Welcome /> 
    </div>
  </div>
);

export default App;

