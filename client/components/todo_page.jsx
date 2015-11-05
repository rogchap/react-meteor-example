TodoPage = React.createClass({

  propTypes: {
    view: React.PropTypes.oneOf(ViewType.values),
  },

  mixins: [ClientMixin],

  getDefaultProps() {
    return {
      view: ViewType.ALL,
    };
  },

  getInitialState() {
    return {
      todoItems: [],
    };
  },

  getStyles() {
    return {
      root: {
        backgroundColor: Colors.white,
        color: Colors.text,
        marginTop: 130,
        marginBottom: 40,
        position: 'relative',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), ' +
        '0 25px 50px 0 rgba(0, 0, 0, 0.1)',
      },
    };
  },

  render() {
    const styles = this.getStyles();
    let { view } = this.props;
    let { todoItems } = this.state;
    return (
      <div style={styles.root}>
        <Header />
        { todoItems.length > 0 ? (
          <List
            items={todoItems}
            view={view} />
          ) : '' }
        { todoItems.length > 0 ? (
          <Footer
            items={todoItems}
            view={view} />
          ) : '' }
      </div>
    );
  },
});


















































/*
 ReactMeteorData

 getMeteorData() {
 Meteor.subscribe('Todo.all');
 return {
 todoItems: Todo.find({}).fetch(),
 };
 },

 */
