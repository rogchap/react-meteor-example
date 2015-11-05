App = React.createClass({

  propTypes: {
    content: React.PropTypes.func.isRequired,
  },

  mixins: [],

  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {};
  },

  getStyles() {
    return {
      root: {
        backgroundColor: Colors.canvas,
        height: '100%',
      },
      section: {
        minWidth: 230,
        maxWidth: 550,
        margin: '0 auto',
      },
    };
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.root}>
        <section style={styles.section}>
          { this.props.content() }
        </section>
      </div>
    );
  },

});
