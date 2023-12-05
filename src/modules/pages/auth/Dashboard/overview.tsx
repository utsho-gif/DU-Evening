import { Card, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { HiCircleStack } from 'react-icons/hi2';
import { PiShootingStarLight } from 'react-icons/pi';
import { TbError404 } from 'react-icons/tb';
import { TbHeartMinus } from 'react-icons/tb';

import PageTitle from '../../../../components/PageTitle';

const Overview = () => {
  return (
    <>
      <PageTitle title="Overview" />
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats card-broaden1 ">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <HiCircleStack className="text-warning icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers ">
                      <p className="stats">Number</p>
                      <Card.Title as="h4">
                        <CountUp
                          end={150}
                          duration={5}
                          suffix="GB"
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats card-broaden2">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <PiShootingStarLight className="text-success icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Revenue</p>
                      <Card.Title as="h4">
                        <CountUp
                          end={1345}
                          duration={5}
                          prefix="$"
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats card-broaden3">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <TbError404 className="text-danger icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Errors</p>
                      <Card.Title as="h4">
                        <CountUp end={23} duration={5} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats card-broaden4">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <TbHeartMinus className="text-info icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Followers</p>
                      <Card.Title as="h4">
                        <CountUp
                          className="text-white"
                          end={45}
                          duration={5}
                          prefix="+"
                          suffix="K"
                          redraw={true}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Overview;
