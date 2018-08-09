var i=1;
function loadAdj(func){
    setInterval(func, 3000);
}
loadAdj (function(){
  var adj = ["Student", "Developer", "Gamer", "HODLer" ];
  document.getElementById("adj").innerHTML = adj[i%adj.length];
    i++;
    if (i>=adj.length){
      i=0;
    }

});
