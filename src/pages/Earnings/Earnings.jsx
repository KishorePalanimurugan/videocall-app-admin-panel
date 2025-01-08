import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Container,
  Col,
  Spinner,
  Button,
} from "reactstrap";
import React, { useMemo, useState } from "react";
import TableContainer from "../../components/Common/TableContainer";

function Earnings() {
  const [isLoading, setLoading] = useState(false);

  const data = [
    {
      userName: "Alice Johnson",
      gender: "Female",
      totalEarnings: "$1,200",
      contactNumber: "+1234567890",
    },
    {
      userName: "Emily Davis",
      gender: "Female",
      totalEarnings: "$1,850",
      contactNumber: "+1234567891",
    },
    {
      userName: "Sophia Martinez",
      gender: "Female",
      totalEarnings: "$970",
      contactNumber: "+1234567892",
    },
    {
      userName: "Isabella Brown",
      gender: "Female",
      totalEarnings: "$2,400",
      contactNumber: "+1234567893",
    },
    {
      userName: "Mia Wilson",
      gender: "Female",
      totalEarnings: "$1,100",
      contactNumber: "+1234567894",
    },
    {
      userName: "Olivia Anderson",
      gender: "Female",
      totalEarnings: "$2,050",
      contactNumber: "+1234567895",
    },
    {
      userName: "Charlotte Thomas",
      gender: "Female",
      totalEarnings: "$1,700",
      contactNumber: "+1234567896",
    },
    {
      userName: "Amelia White",
      gender: "Female",
      totalEarnings: "$1,300",
      contactNumber: "+1234567897",
    },
    {
      userName: "Harper Moore",
      gender: "Female",
      totalEarnings: "$950",
      contactNumber: "+1234567898",
    },
    {
      userName: "Abigail Taylor",
      gender: "Female",
      totalEarnings: "$2,150",
      contactNumber: "+1234567899",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "userName",
        filterable: true,
      },
      {
        Header: "Gender",
        accessor: "gender",
        filterable: true,
      },
      {
        Header: "Contact Number",
        accessor: "contactNumber",
        filterable: true,
      },
      {
        Header: "Total Earnings",
        accessor: "totalEarnings",
        filterable: true,
      },
      {
        Header: "Action",
        accessor: (row) => (
          <Button
            onClick={() => handleClick(row)}
            style={{ backgroundColor: "#8243D9", borderColor: "#8243D9" }}
          >
            Settle
          </Button>
        ),
      },
    ],
    []
  );
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Col>
            <Row>
              <CardTitle className="text mb-4">Earnings</CardTitle>
            </Row>
          </Col>
          <Row>
            <Card>
              <CardBody>
                {isLoading ? (
                  <Spinner setLoading={setLoading} />
                ) : data.length === 0 ? (
                  <div className="text-center">No Data Available</div>
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
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Earnings;
