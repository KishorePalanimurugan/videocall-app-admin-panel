import PropTypes from "prop-types";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const Dashboard = (props) => {
  const DashboardProperties = createSelector(
    (state) => state.Dashboard,
    (dashboard) => ({
      chartsData: dashboard.chartsData,
    })
  );

  const { chartsData } = useSelector(DashboardProperties);

  //meta title
  document.title = "Admin Panel";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <Row>
            {/* <Col lg={3}>
              <Card>
                <CardBody>helo</CardBody>
              </Card>
            </Col>
            <Col lg={3}>
              <Card>
                <CardBody>helo</CardBody>
              </Card>
            </Col>
            <Col lg={3}>
              <Card>
                <CardBody>helo</CardBody>
              </Card>
            </Col>
            <Col lg={3}>
              <Card>
                <CardBody>helo</CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
