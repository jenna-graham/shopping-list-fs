const SUPABASE_URL = 'https://icyrbwltlybmigeljxmh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljeXJid2x0bHlibWlnZWxqeG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMxMzMsImV4cCI6MTk2Nzg3OTEzM30.kUzjWO4wi0A9AVcWdFt_BG9uq-HBZoAR2aZ4IRN55yw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}
export async function createListItem(name, qty) {
    const response = await client.from('shopping-items').insert({ name, qty });
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
    
}
export async function getListItems() {
    const response = await client.from('shopping-items').select('*').order('created_at');
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}
export async function togglePurchased(item) {
    console.log(item);
    const response = await client.from('shopping-items').update({ purchased: !item.purchased }).match({ id: item.id });
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}
export async function deleteList() {
    const response = await client.from('shopping-items').delete().match({ user_id: getUser().id });
    return response.data;
}
// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
