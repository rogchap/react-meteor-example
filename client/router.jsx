
FlowRouter.route('/:view?', {
  action(params) {
    document.title = 'todos - React + Meteor';
    let meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1';
    document.getElementsByTagName('head')[0].appendChild(meta);

    ReactLayout.render(App, { content() {
      return <TodoPage {...params}  />;
    }});
  },
});
