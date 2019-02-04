import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class ChallengesActions extends Component {
  render() {
    const { challengesActions } = this.props;
    console.log(challengesActions);
    return (
      <ul className="challengesActions__list">
        {challengesActions.map((item, index )=> {
          return (
            <li  key={index} className="challengesActions__item">
              <p className="challengesActions__item-summary">{item.summary}</p>
              {item.tools && ( <p className="challengesActions__item-tools">{item.tools}</p>)}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ChallengesActions;
