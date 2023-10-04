import { fetchRepositories, fetchUserData } from "./gateways.js";
import { renderUserData } from "./user.js";
import { renderRepos, cleanReposList } from "./repos.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const defaultUser = {
    avatar_url: 'https://avatars3.githubsercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => {
            renderUserData(userData);
            return userData.repos_usl;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);
            hideSpinner();
        })
        .catch(err => {
            hideSpinner();
            alert(err.message);
        });
};

showUserBtnElem.addEventListener('click', onSearchUser);