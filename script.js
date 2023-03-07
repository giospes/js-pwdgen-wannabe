const nameP = prompt("Please enter your name", "John");
const lastname = prompt("Please enter your lastname", "Doe");
const color = prompt("Please enter your fav color", "blue");
const number = Math.floor(Math.random()*100)

if ( nameP != null && lastname != null && color != null) {
    const password = nameP + lastname + color + number
    document.getElementById("password").innerHTML = "Hello, your password is: " + password;
}