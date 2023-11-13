/* DOM Traversal */
/* NODE METHODS FOR TRAVERSAL
 * - querySelector: crawl down the DOM tree, returns first match
 * - querySelectorAll: crawl down the DOM tree, returns all matches
 * - closest: crawl up the DOM tree, returns first match
 * - nextElementSibling: crawl sideways the DOM tree, returns following element
 * - previousElementSibling: crawl sideways the DOM tree, returns previous element
 * - parentElement: crawl up the DOM tree, returns parent element
 * - children: crawl down the DOM tree, returns all children elements
 * - firstElementChild: crawl down the DOM tree, returns first child element
 * - lastElementChild: crawl down the DOM tree, returns last child element
 */
// MAIN
(() => {
    const highlightBtn = document.querySelector("#highlightNext");
    highlightBtn.addEventListener("click", (e) => {
        const current = document.querySelector(".box.active");
        const next = current.nextElementSibling;
        current.classList.remove("active");
        if (next) {
            next.classList.add("active");
        } else {
            const first = current.closest('.row').querySelector('.box');
            first.classList.add("active");
        }
    });
    const highlightPrev = document.querySelector("#highlightPrev");
    highlightPrev.addEventListener("click", (e) => {
        const current = document.querySelector(".box.active");
        const prev = current.previousElementSibling;
        if (prev) {
            current.classList.remove("active");
            prev.classList.add("active");
        } else {
            const last = current.closest('.row').querySelector('.box');
            current.classList.remove("active");
            last.classList.add("active");
        }
    });
})();