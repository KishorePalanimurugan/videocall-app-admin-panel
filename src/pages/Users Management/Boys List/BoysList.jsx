import React, { useMemo, useState } from "react";
// import NewTableContainer from "../../../components/Common/NewTableContainer";
import Spinners from "../../../components/Common/Spinner";
import { Card, CardBody, CardTitle, Row } from "reactstrap";
import TableContainer from "../../../components/Common/TableContainer";

function BoysList() {
  const [isLoading, setLoading] = useState(false);

  const data = [
    {
      name: "John Doe",
      gender: "Male",
      phoneNumber: "123-456-7890",
      totalCoins: 120,
    },
    {
      name: "Michael Smith",
      gender: "Male",
      phoneNumber: "987-654-3210",
      totalCoins: 80,
    },
    {
      name: "James Brown",
      gender: "Male",
      phoneNumber: "555-123-4567",
      totalCoins: 95,
    },
    {
      name: "David Johnson",
      gender: "Male",
      phoneNumber: "444-987-6543",
      totalCoins: 150,
    },
    {
      name: "Robert Wilson",
      gender: "Male",
      phoneNumber: "333-456-7890",
      totalCoins: 60,
    },
    {
      name: "William Taylor",
      gender: "Male",
      phoneNumber: "222-654-3210",
      totalCoins: 70,
    },
    {
      name: "Charles Anderson",
      gender: "Male",
      phoneNumber: "111-987-6543",
      totalCoins: 130,
    },
    {
      name: "Thomas White",
      gender: "Male",
      phoneNumber: "888-123-4567",
      totalCoins: 100,
    },
    {
      name: "Christopher Harris",
      gender: "Male",
      phoneNumber: "777-456-7890",
      totalCoins: 110,
    },
    {
      name: "Matthew Martin",
      gender: "Male",
      phoneNumber: "666-654-3210",
      totalCoins: 140,
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
      Header: "Total Coins",
      accessor: "totalCoins",
    },
  ]);

  return (
    <React.Fragment>
      <div className="page-content">
        <CardTitle className="mb-4">User Management - Boys list</CardTitle>
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

export default BoysList;
