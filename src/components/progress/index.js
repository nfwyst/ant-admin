import React, { Component } from "react";
import { Progress as Prs } from 'antd';

class Progress extends Component {
  render() {
    return <div>
      <Prs type="circle" percent={75} />
      <Prs type="circle" percent={70} status="exception" />
      <Prs type="circle" percent={100} />
    </div>;
  }
}

export default Progress;
