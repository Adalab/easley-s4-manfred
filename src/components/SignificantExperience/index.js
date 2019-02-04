import React, { Component } from 'react';
import PropTypes from "prop-types";
class SignificantExperience extends Component {
  render() {
    const {sampleSigExperience} = this.props;
    return (
      <div className="significant-exp__wrapper">
        <h3 className="significant-exp__title">
          Significant Experience
        </h3>
        {sampleSigExperience.map((item, index)=>{
          return (
            <li className="significant-exp__item" key={index}>
              {item}
            </li>
          );
        })}
      </div>

    );
  }
}


SignificantExperience.propTypes = {
  sampleSigExperience: PropTypes.array.isRequired
};

export default SignificantExperience;