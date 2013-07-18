App.FrameView = Ember.View.extend({

  tagName: 'iframe',
  src: 'iframe.html',
  classNames: ['pane', 'frame'],
  attributeBindings: ['src'],

  contentDidChange: function() {
    if (!this.get('isReady')) return;

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
    if (event.originalEvent.data === 'Ready!') {
      this.set('isReady', true);
      this.notifyPropertyChange('content');
    }
  }

});
