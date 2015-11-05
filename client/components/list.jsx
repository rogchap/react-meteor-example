List = React.createClass({

  propTypes: {
    view: React.PropTypes.oneOf(ViewType.values).isRequired,
    items: React.PropTypes.array,
  },

  mixins: [],

  getDefaultProps() {
    return {
      items: [],
    };
  },

  getInitialState() {
    return {};
  },

  getStyles() {
    return {
      root: {
        position: 'relative',
        borderTop: `1px solid ${Colors.border}`,
      },
      list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    };
  },

  getListItems() {
    let { items, view } = this.props;
    if (view === ViewType.ALL) {
      return items;
    }
    return _.filter(items, item => {
      return item.done === (view === ViewType.COMPLETE);
    });
  },

  render() {
    const styles = this.getStyles();
    let items = this.getListItems();
    return (
      <section style={styles.root}>
        <ol style={styles.list}>
          {items.map((item, i) => {
            let isLast = i === items.length - 1;
            return (
              <ListItem
                key={item._id}
                item={item}
                isLast={isLast} />
            );
          })}
        </ol>
      </section>
    );
  },

});
