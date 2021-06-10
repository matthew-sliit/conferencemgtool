//variable to store particles
var particles = [];
var canvasID = "canvas092";
function setupParticles(parentId,particleSymbolClass,particle_count,lineColor,thickness,z_index){
    //variables to change functionality
    //particleSymbolClass is a css class containing the particle styling
    let max_particles = particle_count;
    let line_color = lineColor;
    let line_thickness = thickness;
    //=================================
    let parent = document.getElementById(parentId);
    let max_h = $("#"+parentId).height();
    let max_w = $("#"+parentId).width();
    let segments = Math.floor(max_w/max_particles)-3;
    let segment_pos = 0;
    //create an array of elements containing particles
    while(particles.length<max_particles){
        let element = document.createElement('div');
        //add css style to element
        element.className = particleSymbolClass;
        //set element positions
        let top = Math.floor(Math.random()*max_h)+'px';;
        let left = segment_pos+Math.floor(Math.random()*segments) +'px';
        element.style.left = left;
        element.style.top = top;
        element.style.zIndex = z_index;
        element.setAttribute('segment_min',segment_pos);
        element.setAttribute('segment',segments);
        //add element to array
        particles.push(element);
        //add element to document
        parent.appendChild(element);
        segment_pos += segments;
    }
    //canvas to use lines by path
    drawCanvas(canvasID,parentId);
    //infinite recursion
    setInterval(function(){
        emulateParticles(parentId, canvasID, line_color, line_thickness);
    },40);
}
function emulateParticles(parentId,canvasId,line_color, line_thickness){
    let max_h = $("#"+parentId).height();
    let max_w = $("#"+parentId).width();
    //foreach particle in particles array
    //set new position for particle
    for(i=0;i<particles.length;i++){
        let start_top = particles[i].offsetTop;
        let start_left = particles[i].offsetLeft;
        //left positon either add to current or substract
        let sign = Math.cos(Math.PI * Math.round(Math.random()));
        //new top from random
        let new_top = start_top+(Math.floor(Math.random()*2));
        //new left from random
        let new_left = start_left+(Math.floor(Math.random()*2))*sign;
        if(new_left>max_w-5){
            new_left = '0px'; 
        }
        //assign new position to particles
        particles[i].style.top = new_top + 'px';
        particles[i].style.left = new_left + 'px';
    }
    //clear canvas - clears the lines
    clearCanvas(canvasId);
    //foreach particle
    //add new line inbetween if length between neighbouring particles are less than 70px
    for(i=0;i<particles.length;i++){
        //remove element i from array for easy comparison
        let particlesCopy = [...particles];
        particlesCopy.splice(i,1);
        let start_top = particles[i].offsetTop+4;
        let start_left = particles[i].offsetLeft+4;
        if(start_top>max_h){
            particles[i].style.top = '0px'; 
        }
        if(start_left>max_w-4){
            particles[i].style.left = '0px'; 
        }
        for(ref=0;ref<particlesCopy.length;ref++){
            let end_top = particles[ref].offsetTop+4;
            let end_left = particles[ref].offsetLeft+4;
            let lineLength = getLineLength(start_top,start_left,end_top,end_left);
            if(lineLength<70){
                drawLineUseCanvas(start_top,start_left,end_top,end_left,line_thickness,line_color,canvasID);
            }
        }
    } 
}
//function to add new line to a canvas, given the canvas id
function drawLineUseCanvas(start_top,start_left,end_top,end_left,thickness,bg_color,canvasId){
    let context = document.getElementById(canvasId).getContext('2d');
    context.beginPath();
    context.moveTo(start_left,start_top);
    context.lineTo(end_left,end_top); 
    context.strokeStyle = bg_color;
    context.strokeWidth = thickness;
    context.stroke();
}
//function to create new canvas and append to given parent id
function drawCanvas(canvasId,parentId){
    let parent = document.getElementById(parentId);
    let canvas = document.createElement('canvas');
    canvas.id = canvasId;
    canvas.style.position = "absolute";
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    //canvas.setAttribute("height","100");
    canvas.height = parent.offsetHeight;
    canvas.width  = parent.offsetWidth-17;
    document.getElementById(parentId).appendChild(canvas);
    window.addEventListener('resize',function(){
        resizeCanvas(canvasId,parentId,17);
    },true);
}
//function to resize the canvas on window resize, 
//also adjusts the particles
function resizeCanvas(canvasId,parentId,correction){
    clearCanvas(canvasId);
    let parent = document.getElementById(parentId);
    let canvas = document.getElementById(canvasId);
    canvas.height = parent.offsetHeight;
    canvas.width  = parent.offsetWidth-correction;
    let i;
    for(i=0;i<particles.length;i++){
        let start_left = particles[i].offsetLeft;
        if(start_left>parent.offsetWidth){
            particles[i].style.left = Math.floor(Math.random()*parent.offsetWidth)+'px';
        }   
    }
}
//function to clear the canvas
function clearCanvas(canvasId){
    let canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    context.clearRect(0,0,canvas.width, canvas.height);
}
//function to get the length between two given position pairs (x1,y1,x2,y2)
//in between particles
function getLineLength(start_top,start_left,end_top,end_left){
    let lineLength = 0;
    //if same y plane
    if(start_top===end_top){
        lineLength = end_left - start_left;
    }else if(start_left===end_left){
        //if same x plane
        lineLength = end_top - start_top;
    }else{
        //if different point pairs - use pythagoras theorem
        let x_difference = start_left-end_left;
        let y_difference = start_top - end_top;
        lineLength = Math.floor(Math.sqrt(Math.pow(x_difference,2)+Math.pow(y_difference,2)));
    }
    if(lineLength<0){
        lineLength*=-1;
    }
    return lineLength;
}