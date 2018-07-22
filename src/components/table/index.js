import React, { Component } from "react";
import { Table as TB } from 'antd';
import styles from '../../index.scss';


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: Array(100).fill(0).map((item, index) => {
        return {
          key: index,
          name: `Player ${index}`,
          age: parseInt(Math.random() * 100),
          address: `${"abcdefgh"[parseInt(Math.random()*8)]}`,
        }
      }),
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }],
    }
  }
  render() {
    return <div>
        客户信息表
        <TB {...this.state} className={styles.tb}/>
      </div>;
  }
}

export default Table;
