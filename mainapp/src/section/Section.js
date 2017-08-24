import React, { Component } from 'react';
import './Section.css'

import Footer from '../footer/Footer';

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <div className="Section-header">
          <h2>Section</h2>
          <div className="vbottom">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
