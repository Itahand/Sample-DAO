/** @format */

import { Welcome, Admin } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProposalList from "./components/ProposalList";
import CreateProposal from "./components/CreateProposal";
import Sidebar from "./components/Sidebar";
import Vote from "./components/Vote";
import SellToken from "./components/SellToken";
import Tokenomics from "./components/Tokenomics";
import ManageToken from "./components/ManageToken";
import CreateToken from "./components/CreateToken";
import ICO from "./components/ICO";

type Tokenomics = {
  name: string;
  symbol: string;
  address: string;
  price: number;
  maxSupply: number;
  initialSupply: number;
};

const myTokenomics: Tokenomics = {
  name: 'Blockversity',
  symbol: 'BLK',
  address: '0x00000',
  price: 0.000000000000000000,
  maxSupply: 100000,
  initialSupply: 100000
};

const App: React.FC = () => (
  <div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Sidebar />}>
            <Route
              index
              element={<Welcome />}
            />
            <Route
              path='/admin'
              element={<Admin />}
            />
            <Route
              path='/ico'
              element={<ICO />}
            />
            <Route path='/createToken' element={<CreateToken />} />
            <Route
              path='/sellToken'
              element={<SellToken />}
            />

            <Route
              path='/tokenomics'
              element={<Tokenomics tokenomics={myTokenomics} />}
            />


            <Route
              path='/manageToken'
              element={<ManageToken />}
            />

            <Route
              path='/proposal'
              element={<ProposalList />}
            />

            <Route
              path='/create_proposal'
              element={
                <CreateProposal
                  onSubmit={function (
                    title: string,
                    description: string,
                    options: string[],
                    startAt: number,
                    endAt: number
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
            <Route
              path='/vote'
              element={
                <Vote
                  proposalId={0}
                  tokensOwned={0}
                  onVote={function (proposalId: number, vote: boolean): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
