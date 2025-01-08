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

function Payments() {
  const [isLoading, setLoading] = useState(false);

  const data = [
    {
      order_id: "ORD123456",
      contact: "123-456-7890",
      amount: "100.00",
      method: "Credit Card",
      currency: "USD",
    },
    {
      order_id: "ORD123457",
      contact: "987-654-3210",
      amount: "250.00",
      method: "PayPal",
      currency: "EUR",
    },
    {
      order_id: "ORD123458",
      contact: "555-123-4567",
      amount: "150.50",
      method: "Debit Card",
      currency: "GBP",
    },
    {
      order_id: "ORD123459",
      contact: "444-987-6543",
      amount: "80.00",
      method: "UPI",
      currency: "INR",
    },
    {
      order_id: "ORD123460",
      contact: "333-456-7890",
      amount: "300.75",
      method: "Net Banking",
      currency: "CAD",
    },
    {
      order_id: "ORD123461",
      contact: "222-654-3210",
      amount: "120.00",
      method: "Cash",
      currency: "AUD",
    },
    {
      order_id: "ORD123462",
      contact: "111-987-6543",
      amount: "220.00",
      method: "Credit Card",
      currency: "JPY",
    },
    {
      order_id: "ORD123463",
      contact: "888-123-4567",
      amount: "75.00",
      method: "Debit Card",
      currency: "CHF",
    },
    {
      order_id: "ORD123464",
      contact: "777-456-7890",
      amount: "200.25",
      method: "UPI",
      currency: "CNY",
    },
    {
      order_id: "ORD123465",
      contact: "666-654-3210",
      amount: "400.00",
      method: "PayPal",
      currency: "USD",
    },
  ];

  const columns = useMemo(() => [
    {
      Header: "Order ID",
      accessor: "order_id",
      filterable: true,
      Cell: ({ value }) => value || "N/A",
    },
    {
      Header: "Contact Number",
      accessor: "contact",
      filterable: true,
      Cell: ({ value }) => value || "N/A",
    },
    {
      Header: "Amount",
      accessor: "amount",
      filterable: true,
      Cell: ({ value }) => (value ? `${value}` : "N/A"),
    },
    {
      Header: "Method",
      accessor: "method",
      filterable: true,
      Cell: ({ value }) => value || "N/A",
    },
    {
      Header: "Currency",
      accessor: "currency",
      filterable: true,
      Cell: ({ value }) => value || "N/A",
    },
  ]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Col>
            <Row>
              <CardTitle className="text mb-4">Payments</CardTitle>
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

export default Payments;
