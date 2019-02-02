import React, { Component } from 'react';
import PropTypes from "prop-types";

class Questionnaire extends Component {

  render() {
    const {sampleQuestionnaire} = this.props;
    return (
        <div className="questionnaire__wrapper">
          {sampleQuestionnaire.map((item, index)=>{
          return (
            <div key={index} className="questionnaire__item">
                <p className="questionnaire__item--question">
                    {item.question}
                </p>
                <p className="questionnaire__item--answer">
                    {item.answer}
                </p>
            </div>
          );
          })}
        </div>
    );
  }
}
Questionnaire.propTypes = {
  sampleQuestionnaire: PropTypes.array
};
export default Questionnaire;
