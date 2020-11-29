(function() {

    var items = document.querySelectorAll(".timeline ul li");
    var outer=(document.getElementById("outerNews"));
    var outerDiv=outer.getBoundingClientRect();
    console.log(outerDiv);
    
    function isElementInViewport(item) {
        var rect = item.getBoundingClientRect();
        
        
        return (
          rect.top >= outerDiv.top &&
          rect.left >= outerDiv.left &&
          rect.bottom <= ( outerDiv.bottom) &&
          rect.right <= (outerDiv.right)
        );
      }
    
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
      outer.addEventListener("scroll", callbackFunc);
    
    })();

var headlines=["h1","h2","h3","h4","h5","h6","h7","h8","h9","h10","h11","h12","h13","h14","h15","h16","h17","h18","h19","h20","h21","h22","h23","h24","h25","h26","h27","h28","h29","h30"]
var news=["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","c30"]

var newsItems=document.querySelectorAll(".timeline ul li div p");
console.log(newsItems.length+" asdasd");
for(var i=0;i<newsItems.length;i++)
{
  newsItems[i].innerHTML=news[i];
}




