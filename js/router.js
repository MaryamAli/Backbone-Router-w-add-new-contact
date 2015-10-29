import Backbone from 'backbone';
import $ from 'jquery';
import individualDetailTemplate from './views/individualDetail';

import contactListTemplate from './views/contactListTemplate';

import allDetailsCollection from './allDetailsCollection';

//add home template
import homeTemplate from './views/home';
import newContactTemplate from './views/newContactTemplate'

let Router = Backbone.Router.extend({

  routes: {
    // ""              : "redirectToAllDetails",
    ""       : "allDetails",
    // "allDetails" : "showAllDetails",
    "indivDetails/:id" : "showIndividualDetail",
    "newContact" : "shownewContactTemplate"

  },

// initialize function
  initialize: function(appElement) {

    this.$el = appElement;
    this.details = new allDetailsCollection();

    let router = this;

     // add backbutton here as well
    

    this.$el.on ('click', '.back-button', function(event) {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      router.navigate(route, {trigger: true})
    });



      this.$el.on('click', '.detail-list-item', function(event) {
      let $div = $(event.currentTarget);
      var detailId = $div.data('detail-id');
      router.navigate(`details/${detailId}`);
      router.showIndividualDetail(detailId);


    });

  },
    home: function () {
      console.log('show home page');
      this.$el.html(homeTemplate() );
    },

      showSpinner: function() {
        this.$el.html(
          '<i class="fa fa-spinner fa-spin"></i>'
        );
      },
//set up detail function
    //call detail template

      showIndividualDetail: function(detailId) {
      let detail = this.details.get(detailId);
      console.log ('show each entry');

      if (detail) {
        // if fetched
        this.$el.html(individualDetailTemplate(detail.toJSON()) );
      } else {
        // if not fetched
        let router = this;
        let detail = this.details.add({objectId: detailId});
        
        this.showSpinner();
        detail.fetch().then(function() {
          router.$el.html(individualDetailTemplate(detail.toJSON()) );
        });
      }

    },


  //call all info template

    allDetails: function () {
      console.log('show all contacts page');
      this.showSpinner();
      var router = this;
      this.details.fetch().then(function() {

      router.$el.html(contactListTemplate(router.details.toJSON()) );
      
      
     }.bind(this));
    },

      newContact: function () {
      console.log ('show add new contact page');
      this.$el.html(addNewTemplate);
    },

      showSpinner: function() {
        this.$el.html(
          '<i class="fa fa-spinner fa-spin"></i>'
        );
      },




 // showDetails: function() {
 //    console.log('show details page');
    

 //    var router = this;

 //    this.details.fetch().then(function(){

 //      router.$el.html( detailsTemplate(router.details.toJSON()) );

 //    });

 //  },

//start router
//router history
//export router

  start: function (){
    Backbone.history.start();
  }
});

export default Router;