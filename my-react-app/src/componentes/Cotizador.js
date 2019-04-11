import React, { Component } from "react";
import { Typography, Col, Row, Select, Radio, Button, Card } from "antd";
import { isEmpty } from "lodash";
import moment from "moment";

const Option = Select.Option;
const { Title } = Typography;
const RadioGroup = Radio.Group;

class Cotizador extends Component {
  state = {
    model: "",
    year: "",
    plan: "",
    total: ""
  };

  changeModel = value => {
    this.setState({
      model: value
    });
  };

  changeYear = value => {
    this.setState({
      year: value
    });
  };

  changeOption = e => {
    this.setState({
      plan: e.target.value
    });
  };

  cotizador = () => {
    const currentValue = 2000;
    let numberOfYears = moment().format("YYYY") - this.state.year;
    if (isEmpty(numberOfYears)) {
      let total =
        currentValue *
        (1 - numberOfYears * (0.03 - this.state.model - this.state.plan));

      this.setState({
        total: total
      });
    }
  };

  render() {
    return (
      <div>
        <div className="center-card">
          <Card className="card">
            <Row className="margin">
              <Col span={24}>
                <Title level={2}>Cotizador se seguro de Autos</Title>
              </Col>
            </Row>
            <Row className="margin">
              <Col span={12}>
                <div>Marca</div>
              </Col>
              <Col span={12}>
                <Select
                  showSearch
                  className="select"
                  placeholder="Select a Model"
                  optionFilterProp="children"
                  onChange={this.changeModel}
                >
                  <Option value={0.15}>Americano</Option>
                  <Option value={0.3}>Europeo</Option>
                  <Option value={0.5}>Asiatico</Option>
                </Select>
              </Col>
            </Row>
            <Row className="margin">
              <Col span={12}>
                <div>Año</div>
              </Col>
              <Col span={12}>
                <Select
                  showSearch
                  className="select"
                  placeholder="Select a Year"
                  optionFilterProp="children"
                  onChange={this.changeYear}
                >
                  <Option value={2010}>2010</Option>
                  <Option value={2011}>2011</Option>
                  <Option value={2012}>2012</Option>
                  <Option value={2013}>2013</Option>
                  <Option value={2014}>2014</Option>
                </Select>
              </Col>
            </Row>
            <Row className="margin">
              <Col span={12}>
                <div>Plan:</div>
              </Col>
              <Col span={12}>
                <RadioGroup
                  onChange={this.changeOption}
                  name="radiogroup"
                  defaultValue={1}
                >
                  <Radio value={0.2}>BASICO</Radio>
                  <Radio value={0.5}>COMPLETO</Radio>
                </RadioGroup>
              </Col>
            </Row>
          </Card>
        </div>

        <Row className="margin">
          <Col>
            <Button className="button" type="primary" onClick={this.cotizador}>
              Cotizar
            </Button>
          </Col>
        </Row>

        {this.state.total && (
          <div className="backgroun-card-lis">
            <Card className="card-list">
              <span>Resumen de Cotizacion</span>
              <div>
                MARCA: <span className="card-span"> {this.state.model} </span>
              </div>
              <div>
                AÑO: <span className="card-span">{this.state.year}</span>
              </div>
              <div>
                PLAN: <span className="card-span">{this.state.plan}</span>
              </div>
              <div className="total">
                <div> total: {this.state.total}</div>
              </div>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default Cotizador;
