export function renderList(item) {

    const div = document.createElement('div'); 
    div.textContent = `${item.qty} ${item.name}`;

    if (item.purchased) {
        div.classList.add('complete');
    } 
    return div;
}