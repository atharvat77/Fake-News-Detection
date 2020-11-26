(function() {

    var items = document.querySelectorAll(".timeline ul li");
    var outer=(document.getElementById("outerNews"));
    var outerDiv=outer.getBoundingClientRect();
    console.log(outerDiv);
    
    function isElementInViewport(item) {
        var rect = item.getBoundingClientRect();
        console.log(rect);
        
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