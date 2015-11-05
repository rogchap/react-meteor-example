Toggle = React.createClass({

  propTypes: {
    style: React.PropTypes.object,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
  },

  mixins: [],

  getDefaultProps() {
    return {
      onChange: () => {},
      checked: false,
    };
  },

  getInitialState() {
    return {};
  },

  getStyles() {
    return {
      root: {
        width: 40,
        height: 40,
        display: 'inline-block',
      },
    };
  },

  render() {
    const styles = this.getStyles();
    let rootStyle = Utils.merge(styles.root, this.props.style);
    return (
      <span
        onClick={this._handleClick}
        style={rootStyle}>
        {this.props.checked
          ? (
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="40" height="40" viewBox="-10 -18 100 135">
              <circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5"
                      strokeWidth="3"/>
              <path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/>
            </svg>
          )
          : (
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="40" height="40"
                 viewBox="-10 -18 100 135">
              <circle cx="50" cy="50" r="50"
                      fill="none" stroke={Colors.border} strokeWidth="3"/>
            </svg>
          )}
      </span>
    );
  },

  _handleClick() {
    this.props.onChange(!this.props.checked);
  },

});
