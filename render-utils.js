export function renderList(item) {

    const div = document.createElement('div'); 
    div.textContent = `${item.name} for ${item.qty} ${item.amount}`;

    if (item.purchased) {
        div.classList.add('complete');
    } 
    return div;
}