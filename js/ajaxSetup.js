import $ from 'jquery';

const APP_ID = '88arqa0AV2h7KjKrheweb8wosV4JBFgzetjgcCLg';
const API_KEY = '1ZSbvmwoUxkUIE64EkWimNDp3SDW9hJDG0tvoW4n';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});


// from randomuser.me
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data){
//     console.log(data);
//   }
// });