TodoActions = {
  handleInsertItem(text) {
    Meteor.call('Todo.add', text);
  },
  handleDoneUpdate(_id, done) {
    Meteor.call('Todo.markDone', _id, done);
  },
  handleClearCompleted() {
    Meteor.call('Todo.clearDone');
  },
  handleItemRemoval(_id) {
    Meteor.call('Todo.remove', _id);
  },
};
