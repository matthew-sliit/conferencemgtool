var i = null;
function moveCursorTo(selectorId){
    let cursor = document.getElementById("animation-cursor");
    let position = $('#'+selectorId).offset();
    let widthOfElement = $('#'+selectorId).width() - 4;
    let top = position.top + 30;
    let left = position.left + 10;
    cursor.style.top = top + 'px';
    cursor.style.left = left + 'px';
    clearInterval(i);
      i = setInterval(cursorFrame,10);
      let pos = 0;
      function cursorFrame(){
      if(pos>=widthOfElement){
        clearInterval(i);
      }else{
        pos++;
        cursor.style.width = pos+'px';
      }
   }
} 