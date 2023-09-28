const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const fetchUserData = userName => { 
    return fetch(`https://api.github.com/users/${userName}`)
        .then(responce=>responce.json());
        
}

const renderUserData = userData => {
    userData.then(result =>{
        userAvatarElem.src = result.avatar_url;
        userNameElem.textContent = result.name;
        userLocationElem.textContent = result.location
            ? `from ${result.location}`
            : '';
    });
  
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    const userName = userNameInputElem.value;
    
    renderUserData(fetchUserData(userName));
};

showUserBtnElem.addEventListener('click', onSearchUser);