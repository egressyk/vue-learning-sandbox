import Vue from 'vue'
import './style.css';

Vue.component('score', {
	template:'<h2>Score: {{ score }}</h2>',
  props: [
    'score'
  ]
})

const vm = new Vue({
  el: '#app',
  data: {
  	isLoading: true,
  	input: '',
    title: 'Hello Vue.js!',
    loadingMessage: 'Page is loading...',
    list: [
    	'fos',
      'szar',
      'cica'
    ],
    points: 32
  },
  // Computed functions get cached, they only run again if there is a change in a reactive dependecy (input in the following)
  computed: {
  	inputReverse: function() {
    	return this.input.split('').reverse().join('');
    },
    isHighScore: function() {
      return this.points > 35;
    }
  },
  // Opposed to computed functions methods run again each time
  methods: {
    addScore: function(event) {
      this.points++;
    },
    resetScore: function(event) {
      this.points = 0;
    }
  }
})

vm.$watch('input', (newValue, oldValue) => console.log(`OldValue: ${oldValue} - NewValue:${newValue}`));

setTimeout(() => vm.isLoading = false, 3000);