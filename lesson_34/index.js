const baseUrl = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/users';

export function getUsersList() {
    return fetch(baseUrl).then(function (response) {
        return response.json();
    });
}

export function getUserById(userId) {
    return fetch(`${baseUrl}/${userId}`).then(function (response) {
        return response.json();
    });
}

export function createUser(userData) {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(userData),
    })
}

export function deleteUser(userId) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
    })
}


export function updateUser(userId, userData) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userData),
    })
}