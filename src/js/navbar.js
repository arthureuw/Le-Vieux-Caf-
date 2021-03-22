export default class Navbar {
    constructor() {
        console.log('init Navbar');
    }

    trigger() {
        const x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

}
