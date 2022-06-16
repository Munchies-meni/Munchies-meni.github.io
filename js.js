let galerija = document.querySelectorAll("#galerija figure")
console.log(galerija.nodes)

for (let i = 0; i < galerija.length; i++) {
    galerija[i].addEventListener("click",(e) => {
        var target = e.target;
        target.parentElement.classList.toggle("oof")

        /*switch (target.parentElement.id) {
            case "jelo1":
                console.log("prvo");
                target.parentElement.classList.toggle("oof")
                break;
            case "jelo2":
                console.log("drugo");
                target.parentElement.classList.toggle("oof")
                break;
            case "jelo3":
                console.log("3");
                target.parentElement.classList.toggle("oof")
                break;
        case "jelo4":
                console.log("pr4vo");
                target.parentElement.classList.toggle("oof")
                break;
            case "jelo5":
                console.log("prv5o");
                target.parentElement.classList.toggle("oof")
                break;
            case "jelo6":
                console.log("prvo6");
                target.parentElement.classList.toggle("oof")
                break;
            case "jelo7":
                console.log("prv7");
                target.parentElement.classList.toggle("oof")
                break;
            case "jelo8":
                console.log("prv8");
                target.parentElement.classList.toggle("oof")
                break;
            case "jelo9":
                console.log("prv9");
                target.parentElement.classList.toggle("oof")
                break;
        }*/
    }, false)
}
