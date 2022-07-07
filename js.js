
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