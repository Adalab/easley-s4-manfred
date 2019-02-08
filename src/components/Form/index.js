import React, { Component } from "react";
import PropTypes from "prop-types";
import FormQuestionnaire from "../FormQuestionnaire";

class Form extends Component {
  render() {
    const { sample, question, answer, handleAddItem, handleQuestionChange, handleRemoveItem } = this.props;
    const { questionnaire } = sample;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>

        <FormQuestionnaire questionnaire={questionnaire} handleAddItem={handleAddItem} handleQuestionChange={handleQuestionChange} question={question}
        answer={answer}
        handleRemoveItem={handleRemoveItem}
        />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleQuestionChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired
};

export default Form;
