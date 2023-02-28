import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

type Proposal = {
    id: string
    title: string
    end_date: string
}

const recentData: Proposal[] = [
    {
        id: '1',
        title: 'chicken nuggets',
        end_date: '2022-05-17T03:24:00',
    },
    // ...
]

export default function ProposalList() {
    return (
        <div className='flex justify-center items-center'>
            <div className='px-4 pt-3 pb-4 flex flex-col text-white blue-glassmorphism'>
                <div className="flex-1">
                    <strong className="font-medium">Proposals</strong>
                    <div className="border-x border-gray-200 rounded-sm mt-3">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>Proposal ID</th>
                                    <th>Proposal Title</th>
                                    <th>End Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentData.map((proposal: Proposal) => (
                                    <tr key={proposal.id}>
                                        <td>
                                            <Link to={`/proposal/${proposal.id}`}>#{proposal.id}</Link>
                                        </td>
                                        <td>
                                            <Link to={`/proposal/${proposal.id}`}>{proposal.title}</Link>
                                        </td>
                                        <td>{format(new Date(proposal.end_date), 'dd MMM yyyy')}</td>
                                        <td>
                                            <Link to={`/proposal/${proposal.id}/vote`} className="px-2 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Vote</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
