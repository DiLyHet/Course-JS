const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
    listElem.innerHTML = '';
};

export const renderRepos = reposList => {
    const reposListElem = document.querySelector('.repo-list');

    const reposListElems = reposList.map(({ name }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('repo-list__item');
        listItemElem.textContent = name;

        return listItemElem;
    });

    reposListElem.innerHTML = '';
    reposListElem.append(...reposListElems);
};
