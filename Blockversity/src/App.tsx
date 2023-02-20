import{Navbar, Welcome, Admin, Exchange} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App: React.FC = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="/admin" element={<Admin />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);

export default App;

