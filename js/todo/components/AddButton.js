var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
});

var buttonStyle = {
  margin: '10px 10px 10px 0'
};


module.exports = Button;