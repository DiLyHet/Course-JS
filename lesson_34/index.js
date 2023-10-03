const baseUrl = 'https://651be3e0194f77f2a5af0850.mockapi.io/api/v1/users';

export function getUsersList() {
    fetch(baseUrl, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => {
        return res.json();
      })
      .then(tasks => {})
      .catch(error => {
        console.error('Error');
      });
  }
  
  export function getUserById(userId) {
    fetch(`${baseUrl}/${userId}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(tasks => {})
      .catch(error => {
        console.error('Error');
      });
  }
  
  export function createUser(userData) {
    fetch(baseUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(task => {})
      .catch(error => {
        console.error('Error');
      });
  }
  
  export function deleteUser(userId) {
    fetch(`${baseUrl}/${userId}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(task => {})
      .catch(error => {
        console.error('Error');
      });
  }
  
  export function updateUser(userId, userData) {
    fetch(`${baseUrl}/${userId}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(task => {})
      .catch(error => {
        console.error('Error');
      });
  }
  