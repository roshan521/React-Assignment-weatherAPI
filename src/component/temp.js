import React, { Component, useImperativeHandle } from "react";
import "./css/styles.css";
import axios from "axios";
class Tempapp extends Component {
  constructor() {
    super();
    this.state = {
      placeName: "",
      apiData: [],
      method: true,
    };
  }

  getWeatherstatus = (search) => {
    let self = this;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=43c5d971a5301414e5ddbe01a0429c0a`
      )
      .then((response) => {
        console.log(response.data);
        let resolve = response.data;
        this.setState({
          method: true,
          apiData: resolve.main,
        });
      })
      .catch((error) => {
        self.setState({
          method: false,
        });
        console.log(error);
      });
  };

  handleChange = (val) => {
    this.setState({
      placeName: val,
    });
    setTimeout(() => {
      this.getWeatherstatus(this.state.placeName);
    }, 100);
  };
  render() {
    return (
      <>
        <div className="box">
          <div className="input-control">
            <input
              type="search"
              onChange={(event) => {
                this.handleChange(event.target.value);
              }}
            />
          </div>
          {this.state.method == false ? (
            <p>No Data found</p>
          ) : (
            <div className="info">
              <h1 className="location">
                <i class="fas fa-cloud-sun"></i>
                {this.state.placeName}
              </h1>
              <h1 className="tem" style={{ textAlign: "center" }}>
                {this.state.apiData.temp}
              </h1>
              <h3 className="tempin_max" style={{ textAlign: "center" }}>
                Min:{this.state.apiData.temp_min}|Max:
                {this.state.apiData.temp_max}
              </h3>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Tempapp;
