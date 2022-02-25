function setup() {

    // sW is the strokeWeight variable for the doorknob and fillWill is the color variable for the window.
    var sW = (2);
    var fillWill = "#42eff5";

    // Canvas size and color.
    createCanvas(800, 600);
    background(0, 250, 400);

    // Grass/Front Lawn
    fill(0, 300, 0);
    strokeWeight(4);
    rect(0, 300, 800, 300, 0);

    // Probably could've made this the sidewalk but I'm gonna keep it as a divider.
    strokeWeight(4);
    line(0, 300, 800, 300)

    // House Body
    fill(260, 225, 0);
    square(300, 150, 200);

    // House Roof
    fill(350, 75, 0)
    triangle(400, 25, 520, 149, 280, 149);

    // Front Door
    rect(375, 265, 50, 85)

    // Doorknob
    strokeWeight(sW);
    fill(250, 250, 50)
    circle(387, 305, 4)

    // Left Window
    fill(0, 300, 300);
    square(315, 190, 50);

    // Right Window
    fill(fillWill);
    square(435, 190, 50);
    
    
}

