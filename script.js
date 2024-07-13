// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Define variables for the images and index
    const images = document.querySelectorAll('.homeImg'); // Select all images in section1
    let index = 0; // Start index
    
    // Function to hide all images
    const hideImages = () => {
      images.forEach(img => {
        img.style.display = 'none';
      });
    }
    
    // Function to show current image
    const showImage = () => {
      hideImages(); // Hide all images first
      images[index].style.display = 'block'; // Show the current image
    }
    
    // Function to move to the next image
    const nextImage = () => {
      index = (index + 1) % images.length; // Increment index and loop back if at end
      showImage(); // Show the new current image
    }
    
    // Show the first image initially
    showImage();
    
    // Automatically move to the next image every 3 seconds
    setInterval(nextImage, 3000);
  });
  
