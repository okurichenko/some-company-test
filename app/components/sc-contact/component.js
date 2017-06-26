import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    formSubmit() {
      console.log('submitted');
    },
  },
});
