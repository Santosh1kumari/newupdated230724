var count = 0;
var image = [];
image[0] = 'slider/image1.jpeg';
image[1] = 'slider/image2.jpeg';
image[2] = 'slider/image3.jpeg';
image[3] = 'slider/image5.jpeg';

function slider() {
    document.slide.src = image[count];
    if (count < image.length - 1) {
        count++;
    } else {
        count = 0;
    }

    setTimeout(slider, 5000);
}
window.onload = slider;

// Frame block start

document.getElementById("Frame").addEventListener('click', 
    function() {
        document.getElementById("frame1").style.display = "block";
    }
);

document.getElementById("Frame1").addEventListener('click', 
    function() {
        document.getElementById("frame2").style.display = "block";
    }
);

document.getElementById("Frame2").addEventListener('click', 
    function() {
        document.getElementById("frame3").style.display = "block";
    }
);

document.getElementById("Frame3").addEventListener('click', 
    function() {
        document.getElementById("frame4").style.display = "block";
    }
);

document.getElementById("Frame4").addEventListener('click', 
    function() {
        document.getElementById("frame5").style.display = "block";
    }
);

//  Acedemic block start
 document.getElementById("Acedemic").addEventListener('click', 
    function() {
     document.getElementById("Academic1").style.display = "block";

    });
    
document.getElementById("courses").addEventListener('click', 
    function() {
        document.getElementById("courses1").style.display = "block";
    }
);



 