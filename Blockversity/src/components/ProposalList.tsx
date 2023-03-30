/** @format */

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { getProposals } from "../Flow/GovernanceActions";

type Proposal = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  tokens_required: string;
  options: string[];
};


export default function ProposalList() {
  const [showActiveProposals, setShowActiveProposals] = useState(true);
  const [proposalData, setProposalData] = useState<Proposal[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getProposals();
      setProposalData(data);
    }

    fetchData();
  }, []);

  console.log(proposalData, "Called in the frontend");

  const proposals = proposalData

  console.log(proposals, "proposals");
  console.log(proposalData, "proposalData");
  console.log(showActiveProposals, "showActiveProposals");
  return (
    <div className='flex justify-center items-center'>
      <div className='px-4 pt-3 pb-4 flex flex-col text-white'>
        <div className='flex-1'>
          <div className='flex justify-center mb-3'>
            <button
              className={`mr-3 py-1 px-2 border-b-2 ${showActiveProposals
                ? "border-blue-500 font-semibold"
                : "border-transparent"
                }`}
              onClick={() => setShowActiveProposals(true)}>
              Active Proposals
            </button>
            <button
              className={`py-1 px-2 border-b-2 ${!showActiveProposals
                ? "border-blue-500 font-semibold"
                : "border-transparent"
                }`}
              onClick={() => setShowActiveProposals(false)}>
              Past Proposals
            </button>
          </div>
          <div>
            <table className='w-full' style={{ tableLayout: "fixed" }}>
              <thead className='border border-gray-200 rounded-full my-3 custom-thead'>
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>DESCRIPTION</th>
                  <th>START DATE</th>
                  <th>END DATE</th>
                  <th>
                    TOKENS
                    <br />
                    REQUIRED
                  </th>
                  <th>OPTIONS</th>
                </tr>
              </thead>
              <tbody className='border border-gray-200 bg-slate-500 rounded-sm mt-3 text-center'>



                {proposals.map((proposal: Proposal) => (
                  <tr key={proposal.id}>
                    <td>#{proposal.id}</td>
                    <td>{proposal.title}</td>
                    <td>{proposal.description}</td>
                    <td>
                      {proposal.start_date}
                    </td>
                    <td>
                      {proposal.end_date}
                    </td>
                    <td>{proposal.tokens_required}</td>
                    <td>{proposal.options ? "Accept" : "Reject"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

}
