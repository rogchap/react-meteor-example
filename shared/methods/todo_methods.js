Meteor.methods({
  'Todo.add'(text) {
    Todo.insert({text, done: false});
  },
  'Todo.remove'(_id) {
    Todo.remove({_id});
  },
  'Todo.markDone'(_id, done) {
    Todo.update({_id}, {$set: {done: done}});
  },
  'Todo.clearDone'() {
    Todo.remove({done: true});
  },
});
