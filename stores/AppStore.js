import { EventEmitter } from 'events'
import _ from 'lodash'
import { on } from 'cluster';

export default _.extend({}, EventEmitter.prototype, {

  // Initial data
  data: {
    ready: false,
    globals: {},
    pages: [],
    item_num: 5
  },

  //Emit change listener]
  addChangeListener: function (callback) {
    this.on('change', callback)
  },

  //Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback)
  }
})