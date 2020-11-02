import React, { Component } from "react";
import * as S from "../styled/ViewReport/style";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { background: "#e4eef2", textColor: "black" };
    this.changeColor1 = this.changeColor1.bind(this);
    this.changeColor2 = this.changeColor2.bind(this);

  }

  changeColor1 = () => {
    this.setState({
      background: "#5955d8",
      textColor: "white",
    });
  };

  changeColor2 = () => {
    this.setState({
      background: "#5955d8",
      textColor: "white",
    });
  };

  render() {
    return (
      <S.ProjectHeader>
        <div className="nav">
          <button
            style={{
              background: this.state.background,
              color: this.state.clolr,
            }}
            onClick={this.changeColor1}
          >
            2021
          </button>
          <button
            style={{
              background: this.state.background,
              color: this.state.clolr,
            }}
            onClick={this.changeColor2}
          >
            팀
          </button>
          <button>개인</button>
          <button>동아리</button>
        </div>
        <select placeholder="정렬">
          <option>오름차순</option>
          <option>내림차순</option>
        </select>
      </S.ProjectHeader>
    );
  }
}
