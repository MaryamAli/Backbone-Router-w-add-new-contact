import Backbone from 'backbone';
import individualDetailModel from './individualDetailModel';

let allDetailsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/MyPeeps',

  model: individualDetailModel,

  parse: function (data) {
    return data.results;
  }


});

export default allDetailsCollection;