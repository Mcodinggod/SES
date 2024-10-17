let sayHello = () => {
    alert("Hello!!");
}

let helloButton = document.querySelector("#querySelectorosay-hello");
if ( helloButton ) {
    helloButton.addEventListener( 'click', () => {
        sayHello();
    });
}
 // Select the button and audio elements
 const emergencyButton = document.getElementById("emergencyButton");
 const stopButton = document.querySelector("#STOP");
 const sirenSound = document.getElementById("sirenSound");

 // Add click event listener to the button
 emergencyButton.addEventListener("click", () => {
     // Play the siren sound
     sirenSound.play().catch(error => {
         console.error("Error playing sound:", error);
     });

     // Notify the user
     alert("Emergency notified");
     // Additional notification logic can be implemented here
 });
 stopButton.addEventListener("click", () => {
    // Play the siren sound
    sirenSound.pause();    

    // Notify the user
    alert("Emergency notified");
    // Additional notification logic can be implemented here
});