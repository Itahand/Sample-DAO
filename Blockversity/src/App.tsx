/** @format */

import { Welcome, Admin } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProposalList from "./components/ProposalList";
import CreateProposal from "./components/CreateProposal";
import Sidebar from "./components/Sidebar";
import Vote from "./components/Vote";
import SellToken from "./components/SellToken";
import Tokenomics from "./components/Tokenomics";
import ManageToken from "./components/manageToken";
import CreateToken from "./components/CreateToken";
import Admine from "./components/Admine";

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
              path='/admine'
              element={<Admine />}
            />
            <Route path='/createToken' element={<CreateToken />} />
            <Route
              path='/sellToken'
              element={<SellToken />}
            />

            <Route
              path='/tokenomics'
              element={<Tokenomics />}
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
