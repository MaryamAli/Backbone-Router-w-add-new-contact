

function individualDetailTemplate(data) {
  

  return `
  <div class="indivDetails">
    <h2></h2>
   
    <div><img class="indivPic" src="${data.Pics}"></div>
    <br>
    <span class="indivText"><div><i class="fa fa-male"></i><span class = "name">&nbsp${data.Name}</span></div>
    
    <div><i class="fa fa-paper-plane"></i>&nbsp${data.Email}</div>
    
    <div><i class="fa fa-mobile"></i>&nbsp${data.Phone}</div>
   
    <div class="mapMarker"><i class="fa fa-map-marker"></i>&nbsp<span class="mapData">${data.Address}</span></div>
    
    <button class="back-button" data-to=""><i class="fa fa-hand-o-left"></i></button></span>
    
    </div>
  `;
}

export default individualDetailTemplate;