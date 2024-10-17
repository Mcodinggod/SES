let sayHello = () => {
    alert("Hello!!");
}

let helloButton = document.querySelector("#say-hello");
if ( helloButton ) {
    helloButton.addEventListener( 'click', () => {
        sayHello();
    });
}
 // Select the button and audio elements
 const emergencyButton = document.getElementById("emergencyButton");
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