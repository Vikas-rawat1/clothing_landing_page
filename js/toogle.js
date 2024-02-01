//  JS FOR TOOGLE MENU  ------------------------->
    var Menuitems = document.getElementById("menu");
    Menuitems.style.maxHeight = "0px";

    function menutoogle() {
      if (Menuitems.style.maxHeight == "0px") {
        Menuitems.style.maxHeight = "200px";
      }
      else {
        Menuitems.style.maxHeight = "0px";
      }
    }
    //RETURN TO THE TOP

    function scrollTotop() {
      window.scrollTo(0, 0)
    } 

    function scrollTodown(){
      window.scroll(0,100)
    }