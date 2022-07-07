
let jela = document.querySelectorAll(".jelo")

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},{
    threshold : 0.2,
    rootMargin: "-70px"
})

jela.forEach(jelo => {
    observer.observe(jelo)
})


/// dugme za eng

var sando = document.getElementById("sando")
var kljukos = document.getElementById("kljukos")
var kroketos = document.getElementById("kroketos")
var ciza = document.getElementById("ciza")
var satara = document.getElementById("satara")
var dugme = document.getElementById("dugme")
var trenutni = "bih";


function promjeni(){
    console.log("pro")
    if(trenutni == "bih"){
        trenutni = "en";
        sando.innerHTML = "pohd piletin, milky toast, apple koleslaw, tikvics and carrot"
        kljukos.innerHTML = "Tacos from potato filled with slowly cooking janjetin"
        kroketos.innerHTML = "ripped junetin, withoutshamel sauce, parmezan"
        ciza.innerHTML = "cheese, cheese, smoked cheese, runny and BEAN"
        satara.innerHTML = "look, heave, and paprik"
        dugme.innerHTML = "Bih"
    }
    else{
        trenutni = "bih";
        sando.innerHTML = "Pohovana teletina, mliječni tost,coleslaw od jabuka, tikvice i mrkve, uz domaći barbeque sos.<br> Prilog: hrskave bukovače sa prahom crnih trubača i srijemoša i dimljeni ajvar. <br>17KM"
        kljukos.innerHTML = "Takosi od krompira ispunjeni sporo pečenom trganom junetinom,salsa verde od peršuna, slatko kiseli luk, sos od travničkog i dimljenog sira, domaći, hercegovački nar, mladi luk i maslinovo ulje.<br>14KM"
        kroketos.innerHTML = "Trgana junetina, bešamel, parmezan, kečap od jabuke i tartufa + kečap od cvekle.Prilog: salatica od krastavaca s uljem tostiranog susama<br>5KM"
        ciza.innerHTML = "Mozzarella, gouda, dimljeni sir uz dodatak travničkog/dimljenog sosa, spicy salata od jaja, grana padano i mliječni tost, te hrskavi luk.<br><strong>VEGETERIAN</strong><br>8KM"
        satara.innerHTML = "Luk, paradajz, paprika, curry i humus od graha, naan hljeb s kokosovim vrhnjem, peršunom, maslinovim uljem, bijelim lukom, divlje lisičarke, crni trubači i vrganji <br><strong>VEGAN</strong><br>13KM"
        dugme.innerHTML = "Eng"
    }
}
