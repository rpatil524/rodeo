import _ from 'lodash';
import React from 'react';
import commonReact from '../../services/common-react';

/**
 * @class SidebarItem
 * @extends ReactComponent
 * @property props
 */
export default React.createClass({
  displayName: 'SidebarItem',
  propTypes: {
    icon: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func
  },
  getDefaultProps: function () {
    return {
      onClick: _.noop
    };
  },
  shouldComponentUpdate(nextProps, nextState) {
    return !commonReact.shallowCompare(this, nextProps, nextState);
  },
  render: function () {
    const props = this.props;

    return (
      <div className="sidebar-item" onClick={props.onClick}>{props.children}</div>
    );
  }
});
