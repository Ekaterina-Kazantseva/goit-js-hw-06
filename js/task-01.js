const itemEl = document.querySelectorAll('.item')
console.log('Number of categories:', itemEl.length)

Array.prototype.forEach.call(itemEl, (element) => {
    const titleEl = element.querySelector('h2').textContent;
    const itemElLength = element.querySelectorAll('li').length;
    console.log(
        `Category: ${titleEl}
    Elements: ${itemElLength}`);
});

