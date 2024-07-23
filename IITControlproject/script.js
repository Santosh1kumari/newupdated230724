var count = 0;
var image = [];
image[0] = 'slider/image1.jpeg';
image[1] = 'slider/image2.jpeg';
image[2] = 'slider/image3.jpeg';
image[3] = 'slider/image5.jpg';

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

// document.getElementById("Frame").addEventListener('click', 
//     function() {
//         document.getElementById("frame1").style.display = "block";
//     }
// );

// document.getElementById("Frame1").addEventListener('click', 
//     function() {
//         document.getElementById("frame2").style.display = "block";
//     }
// );

// document.getElementById("Frame2").addEventListener('click', 
//     function() {
//         document.getElementById("frame3").style.display = "block";
//     }
// );

// document.getElementById("Frame3").addEventListener('click', 
//     function() {
//         document.getElementById("frame4").style.display = "block";
//     }
// );

// document.getElementById("Frame4").addEventListener('click', 
//     function() {
//         document.getElementById("frame5").style.display = "block";
//     }
// );

//  Acedemic block start
//  document.getElementById("Acedemic").addEventListener('click', 
//     function() {
//      document.getElementById("Academic1").style.display = "block";

//     });
    
// document.getElementById("courses").addEventListener('click', 
//     function() {
//         document.getElementById("courses1").style.display = "block";
//     }
// );



 

// let frame=document.getElementById("frame1")

// frame.style.display="none"
// function display(id)
// {
// switch (id) {
//     case  'Frame':
//         document.getElementById("frame").style.display = "block"
//         // frame1.style.display="block"
//         break;
    
//     case "Frame1":
//         // frame2.style.display="block"
//         document.getElementById("frame1").style.display = "block"
//         break;
//     case "Frame2":
//         frame.style.display="block"
//         break;
//     case "Frame3":
//          frame.style.display="block"
//         break;
//     default:
//         console.log('No valid condition selected');
// }
// }
// document.getElementById("Frame").addEventListener('click', 
    
// function display(id) {
//     // Hide all frames
//     document.getElementById("frame1").style.display = "none";
//     document.getElementById("frame2").style.display = "none";
//     document.getElementById("frame3").style.display = "none";
//     document.getElementById("frame4").style.display = "none";

//     switch (id) {
//         case 'Frame':
//             document.getElementById("frame1").style.display = "block";
//             break;
//         case 'Frame1':
//             document.getElementById("frame2").style.display = "block";
//             break;
//         case 'Frame2':
//             document.getElementById("frame3").style.display = "block";
//             break;
//         case 'Frame3':
//             document.getElementById("frame4").style.display = "block";
//             break;
//         default:
//             console.log('No valid condition selected');
//     }
//     })








    // document.getElementById("Frame").addEventListener('click', function() {
    //     display('Frame');
    // });
    
    // function display(id) {
    //     // Hide all frames
    //     document.getElementById("frame1").style.display = "none";
    //     document.getElementById("frame2").style.display = "none";
    //     document.getElementById("frame3").style.display = "none";
    //     document.getElementById("frame4").style.display = "none";
    
    //     switch (id) {
    //         case 'Frame':
    //             document.getElementById("frame1").style.display = "block";
    //             break;
    //         case 'Frame1':
    //             document.getElementById("frame2").style.display = "block";
    //             break;
    //         case 'Frame2':
    //             document.getElementById("frame3").style.display = "block";
    //             break;
    //         case 'Frame3':
    //             document.getElementById("frame4").style.display = "block";
    //             break;
    //         default:
    //             console.log('No valid condition selected');
    //     }
    // }




    function display(id) {
        // Get all iframes
        const iframes = document.querySelectorAll('iframe');

        // Hide all iframes
        iframes.forEach(frame => {
            frame.style.display = 'none';
        });

        // Show the selected iframe
        const selectedFrame = document.getElementById(id);
        if (selectedFrame) {
            selectedFrame.style.display = 'block';
        }
    }
