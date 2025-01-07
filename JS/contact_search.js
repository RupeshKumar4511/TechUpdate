// for search button 

const searchbtn = document.getElementById('search-btn');
const searchBar = document.querySelector(".search");


function findElementsByText(text) {
    let elements = document.querySelectorAll('*');
    return Array.from(elements).filter(el => el.textContent.includes(text));
}

searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    let elements = findElementsByText(searchBar.value);
    if (elements.length > 0) {
        elements.forEach(element => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    } else {
        alert('Word not found!');
    }
});

