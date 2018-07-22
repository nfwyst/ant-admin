import React, { Component } from 'react';
import { Carousel as Cro } from 'antd';
import styles from '../../index.scss';

class Carousel extends Component {
  render() {
    return <Cro autoplay className={styles["ant-carousel"]}>
      <div className={styles['slick-slide']}>
          <h3>1</h3>
        </div>
      <div className={styles['slick-slide']}>
          <h3>2</h3>
        </div>
      <div className={styles['slick-slide']}>
          <h3>3</h3>
        </div>
      <div className={styles['slick-slide']}>
          <h3>4</h3>
      </div>
      </Cro>;
  }
}

export default Carousel;
