import { Navbar, Welcome, Admin, Exchange } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProposalList from './components/ProposalList';
import CreateProposal from './components/CreateProposal';
import Sidebar from './components/Sidebar';
import Vote from './components/Vote';

const App: React.FC = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sidebar />} >
            <Route index element={<Welcome />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/proposal" element={<ProposalList />} />
            <Route path="/create_proposal" element={<CreateProposal />} />
            <Route path="/vote" element={<Vote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);

export default App;

