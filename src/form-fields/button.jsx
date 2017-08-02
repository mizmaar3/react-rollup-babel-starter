import React from 'react';


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
  }

  onClick (event) {
    if (this.props.onClick) {
      this.props.onClick.call(this);
    }
  }

  render() {
    let options = {
      type: 'button',
      name: this.props.name,
      onClick: this.props.onChange,
      className: this.props.className,
      disabled: this.state.disabled
    };

    return (
      <div className='inputFieldWrapper'>
        <button {...options}>
          {this.props.value}
        </button>
      </div>
    )
  }
}
