import React, { Component } from "react";
import moment from "moment";
import { Card, CardText, CardTitle, CardBody, Row, Col } from "reactstrap";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment(Date.now()).format("h:mm:ss a"),
      currentDate: moment(Date.now()).format("MMMM Do YYYY")
    };
  }

  tick = () => {
    this.setState({
      currentTime: moment(Date.now()).format("h:mm:ss a"),
      currentDate: moment(Date.now()).format("MMMM Do YYYY")
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
          <Card
            className="text-center"
            style={{
              marginTop: "10%",
              backgroundColor: "#333",
              borderColor: "#333",
              color: "#fff"
            }}
          >
            <CardBody>
              <CardTitle>
                <h1>{this.state.currentTime}</h1>
              </CardTitle>
              <CardText>{this.state.currentDate}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Panel;
