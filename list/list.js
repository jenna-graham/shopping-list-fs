import { checkAuth, logout, createListItem } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

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
});
