import { checkAuth, logout, createListItem getListItems } from '../fetch-utils.js';
import { renderList } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listElem = document.getElementById('shopping-list');

logoutButton.addEventListener('click', () => {
    logout();
});

const form = document.querySelector('.list-form');
const error = document.getElementById('error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const listData = new FormData(form);
    const data = await createListItem(listData.get('name'), listData.get('qty'));
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
         }
     }
 }
