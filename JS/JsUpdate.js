const news = document.querySelector(".latest-updates");
// const url = 'https://dev.to/api/articles?tag=javascript';
let info;
const getFacts = async () => {
  let response = await fetch('https://dev.to/api/articles?tag=javascript');
  info = await response.json();
  console.log(info);
    news.innerHTML = info[0].title;
    news.innerHTML = info[1].description;
};

getFacts();

