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

function CallHistory() {
  const [isLoading, setLoading] = useState(false);

  const data = [
    {
      date: "2025-01-05",
      from: "+1234567890",
      to: "+0987654321",
      totalDuration: "15 mins",
      callType: "Audio",
      totalSpend: "30 Coins",
    },
    {
      date: "2025-01-06",
      from: "+1234567891",
      to: "+0987654322",
      totalDuration: "20 mins",
      callType: "Video",
      totalSpend: "50 Coins",
    },
    {
      date: "2025-01-06",
      from: "+1234567892",
      to: "+0987654323",
      totalDuration: "10 mins",
      callType: "Audio",
      totalSpend: "20 Coins",
    },
    {
      date: "2025-01-07",
      from: "+1234567893",
      to: "+0987654324",
      totalDuration: "25 mins",
      callType: "Video",
      totalSpend: "70 Coins",
    },
    {
      date: "2025-01-07",
      from: "+1234567894",
      to: "+0987654325",
      totalDuration: "5 mins",
      callType: "Audio",
      totalSpend: "10 Coins",
    },
    {
      date: "2025-01-08",
      from: "+1234567895",
      to: "+0987654326",
      totalDuration: "30 mins",
      callType: "Video",
      totalSpend: "100 Coins",
    },
  ];

  const columns = useMemo(() => [
    {
      Header: "Date",
      accessor: "date",
      filterable: true,
    },
    {
      Header: "From",
      accessor: "from",
      filterable: true,
    },
    {
      Header: "To",
      accessor: "to",
      filterable: true,
    },
    {
      Header: "Total Duration",
      accessor: "totalDuration",
      filterable: true,
    },
    {
      Header: "Audio/Video",
      accessor: "callType",
      filterable: true,
    },
    {
      Header: "total Coins Spend",
      accessor: "totalSpend",
      filterable: true,
    },
  ]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Col>
            <Row>
              <CardTitle className="text mb-4">Call History</CardTitle>
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

export default CallHistory;
