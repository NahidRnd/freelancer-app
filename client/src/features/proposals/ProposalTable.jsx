import React from 'react'
import useProposals from './useProposals'
import Loading from '../../ui/Loading';
import Table from '../../ui/Table';
import ProposalRow from './ProposalRow';
import Empty from '../../ui/Empty';

function ProposalTable() {
    const {isLoading, proposals} = useProposals();
    console.log("proposals:", proposals);

    if(isLoading) return <Loading />

    if(!proposals.length) return <Empty resourceName="درخواستی" />

    
  return (
    <div>
      <Table>
        <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
        </Table.Header>
        <Table.Body>
            {
                proposals.map((proposal, index) => {
                    return <ProposalRow key={proposal._id} proposal={proposal} index={index} /> 
                })
            }
        </Table.Body>
      </Table>
    </div>
  )
}

export default ProposalTable
