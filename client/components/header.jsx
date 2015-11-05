Header = React.createClass({

  propTypes: {},

  mixins: [],

  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {
      nextTodo: '',
    };
  },

  getStyles() {
    return {
      root: {},
      title: {
        position: 'absolute',
        top: -70,
        width: '100%',
        fontSize: 100,
        fontWeight: 100,
        textAlign: 'center',
        textRendering: 'optimizeLegibility',
        color: Colors.accent,
      },
      input: {
        position: 'relative',
        margin: 0,
        width: '100%',
        fontSize: 24,
        boxSizing: 'border-box',
        padding: 16,
        paddingLeft: 60,
        border: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.003)',
        boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        outline: 'none',
        color: 'inherit',
      },
    };
  },

  render() {
    const styles = this.getStyles();
    let { nextTodo } = this.state;
    return (
      <header style={styles.root}>
        <h1 style={styles.title}>todos</h1>
        <input
          value={nextTodo}
          onChange={this._handleInputChange}
          onKeyDown={this._handleKeyDown}
          style={styles.input}
          placeholder="What needs to be done?" />
      </header>
    );
  },

  _handleInputChange(e) {
    this.setState({nextTodo: e.target.value});
  },

  _handleKeyDown(e) {
    let { nextTodo } = this.state;
    if (e.keyCode === 13 && nextTodo.length > 0) {
      TodoActions.handleInsertItem(this.state.nextTodo);
      this.setState({nextTodo: ''});
    }
  },

});
