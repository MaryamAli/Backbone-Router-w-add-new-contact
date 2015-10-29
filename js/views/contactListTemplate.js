

function processData(data) {
  return data.map(function (item) {
    return `
      
      <div class='detail-list-item' data-detail-id="${item.objectId}"><img class="listPic" src="${item.Pics}">&nbsp&nbsp<span>${item.Name}</span></div>
    `
    // console.log(this);
  }).join('');
}

function contactListTemplate (data) {
  return `
    
    <h2>My Peeps</h2>
    
    <button class="newPerson" data-to=""><i class="fa fa-plus-circle"></i></button></span>
    <div>${processData(data)}</div>


  `;
}



export default contactListTemplate;
 // li class='contact-list-item' data-contact-id="${item.objectId}"