function filterLinks() {
    const searchInput = document.getElementById('search');
    const filterText = searchInput.value.toLowerCase();

    const ul = document.getElementById('links');
    const listItems = ul.getElementsByTagName('li');

    for (const li of listItems) {
        const span = li.getElementsByTagName('span')[0];
        const linkText = span.textContent.trim().toLowerCase();

        if (linkText.startsWith(filterText)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', filterLinks);
});
