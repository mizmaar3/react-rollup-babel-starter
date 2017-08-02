import React from 'react';

export default class extends React.Component {

  constructor (props) {
    super(props);
  }

  onChange (event) {
    var value = event.target.value;
    event.target.classList.remove("invalid-field");
    this._onChange(value, event, this);
  }

  onBlur (event) {
    var value = event.target.value;
    this._onBlur(value, event, this);
  }

  _onChange () {
    if (this.props.onChange) {
      this.props.onChange.apply(null, arguments);
    }
  }

  _onBlur () {
    if (this.props.onBlur) {
      this.props.onBlur.apply(null, arguments);
    }
  }

  render() {
    let options = {
      type: this.props.type,
      name: this.props.name,
      value: this.props.value,
      onChange: this.props.onChange,
      className: this.props.className
    };

    return (
      <div className='inputFieldWrapper'>
        <label>{this.props.label}</label>
        <input {...options} />
      </div>
    )
  }
}
