function drawICAF(appendID){
    let pos_y = 10;
    let left_adjustment = 480;
    let thickness = 6;
    let bg_color = "#2E86C1";
    //letter I - lines: 3
    drawRectangle(pos_y,left_adjustment,40,thickness,90,"#CB4335",appendID);
    drawRectangle(pos_y+20,left_adjustment,50,thickness,0,"#CB4335",appendID);
    drawRectangle(pos_y+49,left_adjustment,40,thickness,90,"#CB4335",appendID);
    //letter C - lines: 2
    drawRectangle(pos_y+10,left_adjustment+60,45,thickness,50,"#CB4335",appendID);
    drawRectangle(pos_y+34,left_adjustment+61,45,thickness,120,"#CB4335",appendID);
    //letter A - lines: 2
    drawRectangle(pos_y+13,left_adjustment+118,60,thickness,20,"#CB4335",appendID);
    drawRectangle(pos_y+13,left_adjustment+138,60,thickness,160,"#CB4335",appendID);
    //letter F - lines: 3
    drawRectangle(pos_y+13,left_adjustment+180,60,thickness,0,"#CB4335",appendID);
    drawRectangle(pos_y-4,left_adjustment+198,40,thickness,90,"#CB4335",appendID);
    drawRectangle(pos_y+22,left_adjustment+196,30,thickness*2,90,"#CB4335",appendID);
    //digit 2 - line: 5
    let digit_line_length = 40;
    let digit_1_left_adjustment = left_adjustment + 246;
    drawRectangle(pos_y-3,digit_1_left_adjustment+18,digit_line_length,thickness,90,bg_color,appendID);
    drawRectangle(pos_y+18,digit_1_left_adjustment+36,digit_line_length-15,thickness,0,bg_color,appendID);
    drawRectangle(pos_y+22,digit_1_left_adjustment+18,digit_line_length,thickness,90,bg_color,appendID);
    drawRectangle(pos_y+42,digit_1_left_adjustment,digit_line_length-15,thickness,0,bg_color,appendID);
    drawRectangle(pos_y+47,digit_1_left_adjustment+18,digit_line_length,thickness,90,bg_color,appendID);
    //digit 0 - border
    let digit_2_left_adjustment = digit_1_left_adjustment + 56;
    drawBorder(pos_y+14,digit_2_left_adjustment,55,40,bg_color,bg_color,bg_color,bg_color,thickness,appendID);
    //digit 2 - line: 5
    let digit_3_left_adjustment = digit_1_left_adjustment + 110;
    drawRectangle(pos_y-3,digit_3_left_adjustment+18,digit_line_length,thickness,90,bg_color,appendID);
    drawRectangle(pos_y+18,digit_3_left_adjustment+36,digit_line_length-15,thickness,0,bg_color,appendID);
    drawRectangle(pos_y+22,digit_3_left_adjustment+18,digit_line_length,thickness,90,bg_color,appendID);
    drawRectangle(pos_y+42,digit_3_left_adjustment,digit_line_length-15,thickness,0,bg_color,appendID);
    drawRectangle(pos_y+47,digit_3_left_adjustment+18,digit_line_length,thickness,90,bg_color,appendID);
    //digit 1 - lines: 3
    let digit_4_left_adjustment = digit_3_left_adjustment + 64;
    //drawBorder(pos_y+14,digit_4_left_adjustment,55,40,bg_color,bg_color,bg_color,bg_color,thickness,'symbols');
    drawRectangle(pos_y+10,digit_4_left_adjustment,13,thickness,90,bg_color,appendID);
    drawRectangle(pos_y+15,digit_4_left_adjustment+6,50,thickness,0,bg_color,appendID);
    drawRectangle(pos_y+52,digit_4_left_adjustment+6,30,thickness,90,bg_color,appendID);
}
function drawRectangle(top,left,height,width,angle,bg_color, appendID){
    //alert("drawing rectangle!");
    let rectangle = document.createElement("div");
    //let style = rectangle.style;
    rectangle.style.top = top + 'px';
    rectangle.style.left = left + 'px';
    rectangle.style.backgroundColor = bg_color;
    rectangle.style.position = "absolute";
    rectangle.style.height = height+'px';
    rectangle.style.width = width+'px';
    rectangle.style.webkitTransform = "rotate("+angle+"deg)";
    document.getElementById(appendID).appendChild(rectangle);
}
function drawBorder(top,left,height,width,bg_left, bg_top, bg_right, bg_bottom, thickness, appendID){
    let border = document.createElement("div");
    border.style.position = "absolute";
    border.style.top = top + 'px';
    border.style.left = left + 'px';
    border.style.height = height + 'px';
    border.style.width = width + 'px';
    border.style.borderLeft = thickness+'px solid '+ bg_left;
    border.style.borderTop = thickness+'px solid '+ bg_top;
    border.style.borderRight = thickness+'px solid '+ bg_right;
    border.style.borderBottom = thickness+'px solid '+ bg_bottom;
    document.getElementById(appendID).appendChild(border);
}