let sayHello = () => {
    alert("Hello!!");
}

let helloButton = document.querySelector("#say-hello");
if ( helloButton ) {
    helloButton.addEventListener( 'click', () => {
        sayHello();
    });
}