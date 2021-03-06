import React, { Component } from 'react';
import FormTextarea from '../FormTextarea';
import PropTypes from 'prop-types';

class FormIntro extends Component {
  render() {
    const { handleIntroChange, intro } = this.props;
    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Intro</legend>

        <p className="form__section-description">
          Explain to your future company what kind of professional you are
        </p>

        <FormTextarea
          labelContent="Intro"
          textAreaStyles="textarea"
          textAreaLabelStyles="textarea__form-label"
          textName="intro"
          textValue={intro}
          example="Ex: Full-stack developer with broad experience in managing teams"
          handleTextChange={handleIntroChange}
        />
      </fieldset>
    );
  }
}

FormIntro.propTypes = {
  intro: PropTypes.string.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
};

export default FormIntro;
