var canvas = new fabric.Canvas("myCanvas");
man_image_width = 30;
man_image_height = 30;
man_y = 10;
man_x = 10;
var player_object = "";
block_image_object = "";
block_image_height = "30";
block_image_width = "30";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_update = Img;
        player_update.scaleToWidth(150);
        player_update.scaleToHeight(140);
        player_update.set({
            top: man_y,
            left: man_x
        });
        canvas.add(player_update);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        new_image_object = Img;
        new_image_object.scaleToWidth(block_image_width);
        new_image_object.scaleToHeight(block_image_height);
        new_image_object.set({
            top: man_y,
            left: man_x
        });
        canvas.add(new_image_object);
    });

}
window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '70') {
        new_image('https://i.postimg.cc/hGnyTPLB/ironman-face.png');
        console.log("f");
    }
    if (keyPressed == '66') {
        new_image('https://i.postimg.cc/FscwL6M0/spiderman-body.png');
        console.log("b");
    }
    if (keyPressed == '76') {
        new_image('https://i.postimg.cc/KzF6GDqt/hulk-legs.png');
        console.log("l");
    }
    if (keyPressed == '82') {
        new_image('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png');
        console.log("r");
    }
    if (keyPressed == '72') {
        new_image('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png');
        console.log("h");
    }
    if (keyPressed == '38') {
        function Up() {
            if (player_y >= 0) {
                player_y = player_y - block_image_height;
                console.log("block image height = " + block_image_height);
                console.log("When Up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
                canvas.remove(player_object);
                player_update();
            }
        }
        console.log("up");
    }
    if (keyPressed == '40') {
        function down() {
            if (player_y < 460) {
                player_y = player_y + block_image_height;
                console.log("When up arrow key is pressed, x=" + player_x + " ,y=" + player_y);
                canvas.remove(player_object);
                drawplayer();
            }
        }
        console.log("down");
    }
    if (keyPressed == '37') {
        function left() {
            if (player_x > 0) {
                player_x = player_x - block_image_width;
                console.log("When up arrow key is pressed, x=" + player_x + " ,y=" + player_y);
                canvas.remove(player_object);
                drawplayer();
            }
        }
        console.log("left");
    }
    if (keyPressed == '39') {
        function right() {
            if (player_x < 850) {
                player_x = player_x + block_image_width;
                console.log("When up arrow key is pressed, x=" + player_x + " ,y=" + player_y);
                canvas.remove(player_object);
                drawplayer();
            }
        }
        console.log("right");
    }
}