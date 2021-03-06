import React, { Component } from "react";
import FormInput from "../FormInput";
import PropTypes from "prop-types";
import FormImage from "../FormImage";
import FormPublicLinks from "../FormPublicLinks";
import FormProfileRoles from "../FormProfileRoles";

class FormAuthor extends Component {
  render() {
    const {
      profile,
      publicLinkDefault,
      rolesDefault,
      handleAddImage,
      handleRemoveImage,
      handleProfileInputs,
      handleDefaultInputChange,
      handleAddLinkItem,
      handleRemoveLinkItem,
      handleLinkChange,
      handleAddRoleItem,
      handleRoleChange,
      handleRemoveRoleItem
    } = this.props;

    const {
      name,
      image,
      birthday,
      yearsOfExperience,
      publicLinks,
      roles
    } = profile;

    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Personal data</legend>

        <FormImage
          image={image}
          handleAddImage={handleAddImage}
          handleRemoveImage={handleRemoveImage}
        />

        <FormInput
          labelContent="Full name"
          styles="form__input"
          inputType="text"
          inputName="name"
          inputValue={name}
          example="Ex: Jane Doe"
          handleInputChange={handleProfileInputs}
        />

        <FormInput
          labelContent="Date of birth"
          styles="form__input"
          inputType="date"
          inputName="birthday"
          inputValue={birthday}
          handleInputChange={handleProfileInputs}
        />

        <FormInput
          labelContent="Years of professional experience"
          styles="form__input"
          inputType="number"
          inputName="yearsOfExperience"
          inputValue={yearsOfExperience}
          example="Ex: 5"
          handleInputChange={handleProfileInputs}
        />

        <FormPublicLinks
          publicLinks={publicLinks}
          publicLinkDefault={publicLinkDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddLinkItem={handleAddLinkItem}
          handleRemoveLinkItem={handleRemoveLinkItem}
          handleLinkChange={handleLinkChange}
        />

        <FormProfileRoles
          roles={roles}
          rolesDefault={rolesDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddRoleItem={handleAddRoleItem}
          handleRemoveRoleItem={handleRemoveRoleItem}
          handleRoleChange={handleRoleChange}
        />
      </fieldset>
    );
  }
}

FormAuthor.propTypes = {
  profile: PropTypes.object.isRequired,
  publicLinkDefault: PropTypes.string.isRequired,
  rolesDefault: PropTypes.string.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
  handleProfileInputs: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired,
  handleAddRoleItem: PropTypes.func.isRequired,
  handleRemoveRoleItem: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired
};

export default FormAuthor;
