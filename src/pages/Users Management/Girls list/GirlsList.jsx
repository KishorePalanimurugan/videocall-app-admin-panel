import React, { useMemo, useState } from "react";
// import NewTableContainer from "../../../components/Common/NewTableContainer";
import Spinners from "../../../components/Common/Spinner";
import { Card, CardBody, CardTitle, Row } from "reactstrap";
import TableContainer from "../../../components/Common/TableContainer";

function GirlsList() {
  const [isLoading, setLoading] = useState(false);

  const data = [
    {
      name: "Sophia Johnson",
      gender: "Female",
      phoneNumber: "123-456-7890",
      totalEarnings: 150,
    },
    {
      name: "Emma Brown",
      gender: "Female",
      phoneNumber: "987-654-3210",
      totalEarnings: 200,
    },
    {
      name: "Olivia Davis",
      gender: "Female",
      phoneNumber: "555-123-4567",
      totalEarnings: 120,
    },
    {
      name: "Ava Wilson",
      gender: "Female",
      phoneNumber: "444-987-6543",
      totalEarnings: 170,
    },
    {
      name: "Isabella Taylor",
      gender: "Female",
      phoneNumber: "333-456-7890",
      totalEarnings: 130,
    },
    {
      name: "Mia Harris",
      gender: "Female",
      phoneNumber: "222-654-3210",
      totalEarnings: 180,
    },
    {
      name: "Amelia Martin",
      gender: "Female",
      phoneNumber: "111-987-6543",
      totalEarnings: 140,
    },
    {
      name: "Harper Anderson",
      gender: "Female",
      phoneNumber: "888-123-4567",
      totalEarnings: 160,
    },
    {
      name: "Evelyn White",
      gender: "Female",
      phoneNumber: "777-456-7890",
      totalEarnings: 190,
    },
    {
      name: "Abigail Thompson",
      gender: "Female",
      phoneNumber: "666-654-3210",
      totalEarnings: 210,
    },
  ];

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Total Earnings",
      accessor: "totalEarnings",
    },
  ]);

  return (
    <React.Fragment>
      <div className="page-content">
        <CardTitle className="mb-4">User Management - Girls list</CardTitle>
        <Card>
          <CardBody>
            {isLoading ? (
              <Spinners setLoading={setLoading} />
            ) : (
              <TableContainer
                columns={columns}
                data={data || []}
                isPagination={true}
                iscustomPageSizeOptions={true}
                isShowingPageLength={true}
                customPageSize={10}
                tableClass="table-bordered align-middle nowrap mt-2"
                paginationDiv="col-sm-12 col-md-7"
                pagination="pagination justify-content-end pagination-rounded"
              />
            )}
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default GirlsList;
