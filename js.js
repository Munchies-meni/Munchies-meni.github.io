let jela = document.querySelectorAll(".jelo")

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},{
    threshold : 0.2
})

jela.forEach(jelo => {
    observer.observe(jelo)
})