import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Container,
  Col,
  Spinner,
} from "reactstrap";
import React, { useMemo, useState } from "react";
import TableContainer from "../../components/Common/TableContainer";

function SettleMents() {
  const [isLoading, setLoading] = useState(false);

  const data = [
    {
      userName: "Alice Johnson",
      phoneNumber: "+1234567890",
      totalEarnings: "$5,000",
      totalSettlement: "$4,500",
      balance: "$500",
    },
    {
      userName: "Bob Smith",
      phoneNumber: "+1234567891",
      totalEarnings: "$3,200",
      totalSettlement: "$3,000",
      balance: "$200",
    },
    {
      userName: "Catherine Lee",
      phoneNumber: "+1234567892",
      totalEarnings: "$4,800",
      totalSettlement: "$4,300",
      balance: "$500",
    },
    {
      userName: "Daniel Brown",
      phoneNumber: "+1234567893",
      totalEarnings: "$6,000",
      totalSettlement: "$5,700",
      balance: "$300",
    },
    {
      userName: "Emma Wilson",
      phoneNumber: "+1234567894",
      totalEarnings: "$7,500",
      totalSettlement: "$7,200",
      balance: "$300",
    },
    {
      userName: "Frank Garcia",
      phoneNumber: "+1234567895",
      totalEarnings: "$2,900",
      totalSettlement: "$2,700",
      balance: "$200",
    },
  ];

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "userName",
      filterable: true,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
      filterable: true,
    },
    {
      Header: "Total Settlement",
      accessor: "totalSettlement",
      filterable: true,
    },
    {
      Header: "Balance Settlement",
      accessor: "balance",
      filterable: true,
    },
  ]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Col>
            <Row>
              <CardTitle className="text mb-4">Settlements</CardTitle>
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

export default SettleMents;
