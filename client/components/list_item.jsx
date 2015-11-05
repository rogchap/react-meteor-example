ListItem = React.createClass({

  propTypes: {
    isLast: React.PropTypes.bool,
    item: React.PropTypes.object.isRequired,
  },

  mixins: [],

  getDefaultProps() {
    return {
      isLast: false,
    };
  },

  getInitialState() {
    return {
      hovering: false,
    };
  },

  getStyles() {
    return {
      root: {
        position: 'relative',
        fontSize: 24,
        borderBottom: this.props.isLast ? 'none' : `1px solid ${Colors.border}`,
      },
      toggle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        margin: 'auto 0',
      },
      label: {
        whiteSpace: 'pre',
        wordBreak: 'break-word',
        padding: '15px 60px 15px 15px',
        marginLeft: 45,
        display: 'block',
        lineHeight: 1.2,
        transition: 'color 0.4s',
      },
      labelWhenDone: {
        color: Colors.disabled,
        textDecoration: 'line-through',
      },
      remove: {
        display: this.state.hovering ? 'block' : 'none',
        position: 'absolute',
        top: 0,
        right: 10,
        bottom: 0,
        width: 40,
        height: 40,
        margin: 'auto 0',
        fontSize: 30,
        color: '#cc9a9a',
        marginBottom: 11,
        padding: 0,
        border: 0,
        background: 'none',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        outline: 0,
      },
    };
  },

  render() {
    const styles = this.getStyles();
    let { item } = this.props;
    let labelStyle =
      Utils.merge(styles.label, item.done && styles.labelWhenDone);
    return (
      <li
        onMouseOver={this._handleHover.bind(this, true)}
        onMouseOut={this._handleHover.bind(this, false)}
        style={styles.root}>
        <div>
          <Toggle
            checked={item.done}
            onChange={this._handleToggleChange}
            style={styles.toggle}/>
          <label style={labelStyle}>{item.text}</label>
          <button
            onClick={this._handleRemoveClick}
            style={styles.remove}>×</button>
        </div>
      </li>
    );
  },

  _handleToggleChange(done) {
    let { item } = this.props;
    TodoActions.handleDoneUpdate(item._id, done);
  },

  _handleHover(hovering) {
    this.setState({hovering});
  },

  _handleRemoveClick() {
    TodoActions.handleItemRemoval(this.props.item._id);
  },
});
