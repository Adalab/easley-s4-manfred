import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Profile from "../Profile";
import Intro from "../Intro";

class Author extends Component {
  render() {
    const { sampleAuthor } = this.props;
    return (
      <Fragment>
      <Profile sampleProfile={sampleAuthor.profile} />
      {/* // Instancia: */}
        <Intro sampleIntro={sampleAuthor.intro}/>
      {/* // - ProfessionalGoals
      // - TransportableSkills
      // - SignificantExperience
      // - SignificantRelationships */}
      </Fragment>
    );
  }
}

Author.propTypes = {
  sampleAuthor: PropTypes.object.isRequired
};

export default Author;
