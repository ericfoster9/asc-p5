function setup() {
    createCanvas(500,500);
    background('teal');  
}

let fill1 = 'green';
let fill2 = 'yellow';
let fill3 = 'red';
let fillColor = ''; 

function draw() {
    fill(fill1);
    rect(50,450,20,20);
    fill(fill2);
    rect(250,450,20,20);
    fill(fill3);
    rect(450,450,20,20);
    fill('black');
    rect(450,0,20,20);
  }


  function mouseClicked() {
    console.log(mouseX, mouseY)
    if (mouseX > 49 && mouseX < 72 && mouseY < 470 && mouseY > 450) {
        console.log('green')  
        fillColor = fill1;    
        
    }

    if (mouseX > 250 && mouseX < 270 && mouseY < 470 && mouseY > 450) {
        console.log('green')  
        fillColor = fill2;      
    }

    if (mouseX > 450 && mouseX < 470 && mouseY < 470 && mouseY > 450) {
        console.log('green')  
        fillColor = fill3;      
    }
    if (mouseX > 450 && mouseX < 470 && mouseY < 20 && mouseY > 0) {
        clear(); 
          
    }



  }

  function mouseDragged() {
    fill(fillColor)
    ellipse(mouseX, mouseY, random(100), random(100));
    // prevent default
    return false;
  }
  