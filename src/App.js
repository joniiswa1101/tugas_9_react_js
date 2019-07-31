import React, { Component } from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button, Breadcrumb, Row, Col, Tabs, Tab, Table, ProgressBar, Pagination, Collapse, ButtonToolbar } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      buka:true
    }
  }

  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Berita</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Live Score</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Piala Dan Liga</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Transfer Pemain</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Tim</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <br />
        <br />
        <h2>Rumor Transfer Pemain</h2>
        <br />
        <Tabs defaultActiveKey="semua transfer">
          <Tab eventKey="semua transfer" title="Semua Transfer">
            <br />
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLANI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar animated now={85} label="85%" /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar animated now={55} label="55%" /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar animated now={95} label="95%" /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBN KAZAN</td>
                  <td>ZENIT ST PETERSBURG</td>
                  <td><ProgressBar now={100} label="100%" /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar animated now={50} label="50%" /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHEIVO</td>
                  <td><ProgressBar now={100} label="100%" /></td>
                </tr>

              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="inggris" title="Liga Primer Inggris">
            <p>Liga primer Inggris</p>
          </Tab>
        </Tabs>
        <br /><br />
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <br />
        <ButtonToolbar>
          <Button variant="primary">Informasi</Button>
          <Button variant="primary" onClick={() => this.setState({buka:!this.state.buka})}>Versi Website</Button>
          <Collapse in={this.state.buka}>
            <p>Akses Sport v1.0</p>
          </Collapse>
        </ButtonToolbar>
        
      </Container>
    );
  }
}

export default App;
