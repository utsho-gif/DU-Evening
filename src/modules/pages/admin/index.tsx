import { Card, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { FaSchool } from 'react-icons/fa';
import { FaRegMessage, FaRegPenToSquare } from 'react-icons/fa6';
import { LuBellRing } from 'react-icons/lu';
import { MdOutlineCategory, MdOutlineSubject } from 'react-icons/md';
import { PiExam, PiStudent } from 'react-icons/pi';
import VisibilitySensor from 'react-visibility-sensor';

import PageTitle from '../../../components/PageTitle';
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
                      <PiStudent className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers ">
                      <p className="stats">Total Student</p>
                      <Card.Title as="h4">
                        <CountUp end={150} duration={5} redraw={true}>
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
                      <FaSchool className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Total Department</p>
                      <Card.Title as="h4">
                        <CountUp end={1345} duration={5} redraw={true}>
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
                      <LuBellRing className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Total Notice</p>
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
                      <MdOutlineSubject className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Total Program</p>
                      <Card.Title as="h4">
                        <CountUp
                          className="text-white"
                          end={45}
                          duration={5}
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
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats card-broaden5 ">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <MdOutlineCategory className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers ">
                      <p className="stats">Total College Category</p>
                      <Card.Title as="h4">
                        <CountUp end={150} duration={5} redraw={true}>
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
            <Card className="card-stats card-broaden6">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <FaRegMessage className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Total Support Message</p>
                      <Card.Title as="h4">
                        <CountUp end={1345} duration={5} redraw={true}>
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
            <Card className="card-stats card-broaden7">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <PiExam className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Total Complete Exam</p>
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
            <Card className="card-stats card-broaden8">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <FaRegPenToSquare className="text-white icon-broaden" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="stats">Total Running Exam</p>
                      <Card.Title as="h4">
                        <CountUp
                          className="text-white"
                          end={45}
                          duration={5}
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
