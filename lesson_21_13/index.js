export function getSection(num) {
    const element = document.querySelector(`span[data-number="${num}"]`);
    const parent = element.parentNode;
    return parent.dataset.section;
}
