import React, { Component } from "react";
import PropTypes from "prop-types";
import callLogClass from '../services/callLogServices'

class Tab extends Component {
 
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  state = {
    calls: []
  }
componentDidMount(){
  axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then(res => {
        const calls = res.data;
        this.setState({ calls });
      })
}

  onClick = () => {
    const { label, onClick} = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}    
      </li>
      
    );
  }
}

export default Tab;