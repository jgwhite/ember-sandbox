App.FrameView = Ember.View.extend({
  tagName: 'iframe',
  src: 'iframe.html',
  classNames: ['pane', 'frame'],
  attributeBindings: ['src'],

  contentDidChange: function() {
    var contentWindow = this.get('element').contentWindow,
        content = this.get('content');

    Ember.run(function() { contentWindow.postMessage(content, '*'); });
  }.observes('content'),

  content: function() {
    return this.getProperties('js', 'hbs', 'css');
  }.property('js', 'hbs', 'css'),

  didInsertElement: function() {
    $(window).on('message', $.proxy(this, 'messageReceived'));
  },

  messageReceived: function(event) {
    event = event.originalEvent;
    if (event.data === 'Ready!') { this.notifyPropertyChange('content'); }
  }
});
