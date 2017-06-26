import Ember from 'ember';

export default Ember.Component.extend({
  people: [
    {
      name: 'Riff Raff',
      position: 'founder',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra consectetur ipsum.',
      photoName: 'riffraff.jpg',
    },
    {
      name: '2 Chainz',
      position: 'chief technology officer',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra consectetur ipsum.',
      photoName: '2chainz.jpeg',
    },
    {
      name: 'Nene Leakes',
      position: 'director of marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra consectetur ipsum.',
      photoName: 'nene.jpeg',
    },
    {
      name: 'Miley Cyrus',
      position: 'creative director',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra consectetur ipsum.',
      photoName: 'miley.jpg',
    },
  ],
});
