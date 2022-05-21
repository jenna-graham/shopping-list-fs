import { checkAuth, logout, createListItem, getListItems, togglePurchased, deleteList } from '../fetch-utils.js';
import { renderList } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listElem = document.getElementById('shopping-list');
const deleteAllBtn = document.getElementById('all-items');

logoutButton.addEventListener('click', () => {
    logout();
});

const form = document.querySelector('.list-form');
const error = document.getElementById('error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const listData = new FormData(form);
    const data = await createListItem(listData.get('name'), listData.get('qty'), listData.get('amount'));
    if (data) {
        window.location.href = '/list';
    } else {
        error.textContent = 'Something went wrong, try again!';
    }
    console.log('submit button working');
});
async function displayItems() {
    listElem.textContent = '';
    const data = await getListItems();
    if (data) {
        for (let item of data) {
            const shoppingItem = renderList(item);
            shoppingItem.addEventListener('click', async (e) => {
                e.preventDefault();
                await togglePurchased(item);
                displayItems();     
            });
            listElem.append(shoppingItem);
        }
    } else {
        error.textContent = 'Something went wrong. Try Again!';
    }
}
displayItems();


deleteAllBtn.addEventListener('click', async () => {
    await deleteList();
    displayItems();
});