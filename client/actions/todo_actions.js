
TodoActions = {
  handleInsertItem(text) {
    let todoPage = TodoPage.getInstance();
    todoPage.insertItem(text);
  },
  handleDoneUpdate(_id, done) {
    let todoPage = TodoPage.getInstance();
    todoPage.changeItemDone(_id, done);
  },
  handleClearCompleted() {
    let todoPage = TodoPage.getInstance();
    todoPage.clearCompletedItems();
  },
  handleItemRemoval(_id) {
    let todoPage = TodoPage.getInstance();
    todoPage.removeItem(_id);
  },
};






































































/*
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
*/