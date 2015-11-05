Footer = React.createClass({

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
        color: Colors.lightText,
        padding: '10px 15px',
        height: 20,
        textAlign: 'center',
        borderTop: `1px solid ${Colors.border}`,
      },
      paper: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
        height: 50,
        overflow: 'hidden',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, ' +
        '0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, ' +
        '0 17px 2px -6px rgba(0, 0, 0, 0.2)',
      },
      count: {
        float: 'left',
        textAlign: 'left',
      },
      filters: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        position: 'absolute',
        right: 0,
        left: 0,
      },
      filter: {
        display: 'inline',
        color: 'inherit',
        margin: 3,
        padding: '3px 7px',
        border: '1px solid transparent',
        borderRadius: 3,
        cursor: 'pointer',
      },
      filterWhenSelected: {
        border: `1px solid ${Colors.accent}`,
      },
      clear: {
        float: 'right',
        lineHeight: '20px',
        cursor: 'pointer',
        position: 'relative',
      },
    };
  },

  getRemainingCount() {
    return _.filter(this.props.items, item => {
      return item.done === false;
    }).length;
  },

  getCompletedCount() {
    return _.filter(this.props.items, item => {
      return item.done === true;
    }).length;
  },

  render() {
    const styles = this.getStyles();
    let { view } = this.props;
    let allFilter = Utils.merge(styles.filter,
      view === ViewType.ALL && styles.filterWhenSelected);
    let activeFilter = Utils.merge(styles.filter,
      view === ViewType.ACTIVE && styles.filterWhenSelected);
    let completeFilter = Utils.merge(styles.filter,
      view === ViewType.COMPLETE && styles.filterWhenSelected);
    let leftCount = this.getRemainingCount();
    let completeCount = this.getCompletedCount();
    return (
      <footer style={styles.root}>
        <div style={styles.paper} />
        <span style={styles.count}>
          {leftCount} {Utils.pluralise(leftCount, 'item')} left
        </span>
        <ul style={styles.filters}>
          <li
            onClick={this._handleChangeFilter.bind(this, null)}
            style={allFilter}>All</li>
          <li
            onClick={this._handleChangeFilter.bind(this, ViewType.ACTIVE)}
            style={activeFilter}>Active</li>
          <li
            onClick={this._handleChangeFilter.bind(this, ViewType.COMPLETE)}
            style={completeFilter}>Complete</li>
        </ul>
        {completeCount > 0 ? (
          <span
            onClick={this._handleClearClick}
            style={styles.clear}>
            Clear completed
          </span>
        ) : ''}
      </footer>
    );
  },

  _handleChangeFilter(view) {
    FlowRouter.setParams({view});
  },

  _handleClearClick() {
    TodoActions.handleClearCompleted();
  },

});
