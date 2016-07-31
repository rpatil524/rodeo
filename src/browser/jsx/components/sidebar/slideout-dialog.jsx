import React from 'react';
import './slideout-dialog.css';
import commonReact from '../../services/common-react';

const showClass = 'slideout-dialog-show';

/**
 * @class SlideoutDialog
 * @extends ReactComponent
 * @property props
 */
export default React.createClass({
  displayName: 'SlideoutDialog',
  propTypes: {
    isExpanded: React.PropTypes.bool,
    url: React.PropTypes.string
  },
  shouldComponentUpdate(nextProps, nextState) {
    return !commonReact.shallowCompare(this, nextProps, nextState);
  },
  render: function () {
    const props = this.props,
      className = [
        'slideout-dialog',
        props.isExpanded ? showClass : ''
      ].join(' ');

    return (
      <div className={className}>
        <iframe frameBorder="0" src={props.url}></iframe>
      </div>
    );
  }
});
