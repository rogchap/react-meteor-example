let _instance = null;
ClientMixin = {

  statics: {
    getInstance() {
      return _instance;
    },
  },

  componentDidMount() {
    if (!_instance) {
      _instance = this;
    }
  },

  insertItem(text) {
    let { todoItems } = this.state;
    let nextId =
      todoItems.length > 0
        ? todoItems[todoItems.length - 1]._id + 1
        : 0;
    todoItems.push({
      _id: nextId,
      text,
      done: false,
    });
    this.setState({todoItems});
  },

  changeItemDone(_id, done) {
    let { todoItems } = this.state;
    todoItems.forEach(item => {
      if (item._id === _id) {
        item.done = done;
      }
    });
    this.setState({todoItems});
  },

  clearCompletedItems() {
    let { todoItems } = this.state;
    todoItems = _.reject(todoItems, item => {
      return item.done;
    });
    this.setState({todoItems});
  },

  removeItem(_id) {
    let { todoItems } = this.state;
    todoItems = _.reject(todoItems, item => {
      return item._id === _id;
    });
    this.setState({todoItems});
  },

};
