import React from 'react';
import * as dat from 'dat.gui';
import './dots.css';
import {init} from './newFile';

export default class Dots extends React.Component {
  componentDidMount() {
    // this.$el = $(this.el);
    // this.$el.somePlugin();
    init(this.el);
  }
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={el => (this.el = el)}
      />
    );
  }
}
