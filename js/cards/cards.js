// CONFIG CARDS

for (let card of cards) {
    card.classList.add('card__align--center')

    const LastP = card.querySelector('p:Last-child')
    LastP.classList.add('text-info')

    const nthChild = card.querySelector(':nth-child(3)')
    const b = document.createElement('b')
    b.innerText = nthChild.innerText
    nthChild.innerHTML = b.outerHTML

}