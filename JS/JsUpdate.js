const news = document.querySelector(".box1");

const getFacts = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=javascript');
    let info = await response.json();

    // Clear existing content in `news` element
    news.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news.innerHTML = "Unable to load articles.";
  }
};

getFacts();


// for Java Updates 
const news2= document.querySelector(".box2");

const getFacts2 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=java');
    let info = await response.json();

    // Clear existing content in `news` element
    news2.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news2.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news2.innerHTML = "Unable to load articles.";
  }
};






// for Python Updates
const news3= document.querySelector(".box3");

const getFacts3 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=python');
    let info = await response.json();

    // Clear existing content in `news` element
    news3.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news3.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news3.innerHTML = "Unable to load articles.";
  }
};





// for HTML/CSS updates 
const news4= document.querySelector(".box4");

const getFacts4 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=css');
    let info = await response.json();

    // Clear existing content in `news` element
    news4.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news4.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news4.innerHTML = "Unable to load articles.";
  }
};




// for PHP updates 
const news5= document.querySelector(".box5");

const getFacts5 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=php');
    let info = await response.json();

    // Clear existing content in `news` element
    news5.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news5.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news5.innerHTML = "Unable to load articles.";
  }
};





// for AWS updates 
const news6= document.querySelector(".box6");

const getFacts6 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=aws');
    let info = await response.json();

    // Clear existing content in `news` element
    news6.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news6.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news6.innerHTML = "Unable to load articles.";
  }
};





// * for Microsoft Azure updates 
const news7= document.querySelector(".box7");

const getFacts7 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=microsoft_Azure');
    let info = await response.json();

    // Clear existing content in `news` element
    news7.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news7.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news7.innerHTML = "Unable to load articles.";
  }
};








// * for google cloud Updates 
const news8= document.querySelector(".box8");

const getFacts8 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=google_cloud');
    let info = await response.json();

    // Clear existing content in `news` element
    news8.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news8.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news8.innerHTML = "Unable to load articles.";
  }
};






// for ai Updates
const news9= document.querySelector(".box9");

const getFacts9 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=ai');
    let info = await response.json();

    // Clear existing content in `news` element
    news9.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news9.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news9.innerHTML = "Unable to load articles.";
  }
};





// for machine learning updates 
const news10= document.querySelector(".box10");

const getFacts10 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=machinelearning');
    let info = await response.json();

    // Clear existing content in `news` element
    news10.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news10.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news10.innerHTML = "Unable to load articles.";
  }
};




// * for smart contract updates 
const news11= document.querySelector(".box11");

const getFacts11 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=smart_contract');
    let info = await response.json();

    // Clear existing content in `news` element
    news11.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news11.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news11.innerHTML = "Unable to load articles.";
  }
};





// for crypto currency updates 
const news12= document.querySelector(".box12");

const getFacts12 = async () => {
  try {
    let response = await fetch('https://dev.to/api/articles?tag=cryptocurrency');
    let info = await response.json();

    // Clear existing content in `news` element
    news12.innerHTML = "";

    // Loop through each article and fetch full content for each
    for (const article of info) {
      // Fetch the full article using its `url` property
      let articleResponse = await fetch(`https://dev.to/api/articles/${article.id}`);
      let fullArticle = await articleResponse.json();

      // Append full title and body to news container
      news12.innerHTML += `<details ><summary style= "font-size:26px; color:#133E87">${fullArticle.title}</summary>${fullArticle.body_html}</details><br>`;
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    news12.innerHTML = "Unable to load articles.";
  }
};

document.addEventListener("DOMContentLoaded", () => {
 
  const javaLink = document.querySelector("#java");
  const pythonLink = document.querySelector("#python");
  const html_css = document.querySelector("#html_css");
  const php = document.querySelector("#php");
  const aws = document.querySelector("#aws");
  const azure = document.querySelector("#azure");
  const google_cloud = document.querySelector("#google_cloud");
  const ai = document.querySelector("#ai");
  const ml = document.querySelector("#ml");
  const smart_contract = document.querySelector("#smart_contract");
  const crypto_currency = document.querySelector("#crypto_currency");
  
  const content1 = document.querySelector(".content1");
  const content2 = document.querySelector(".content2");
  const content3 = document.querySelector(".content3");
  const content4 = document.querySelector(".content4");
  const content5 = document.querySelector(".content5");
  const content6 = document.querySelector(".content6");
  const content7 = document.querySelector(".content7");
  const content8 = document.querySelector(".content8");
  const content9 = document.querySelector(".content9");
  const content10 = document.querySelector(".content10");
  const content11 = document.querySelector(".content11");
  const content12 = document.querySelector(".content12");


    javaLink.addEventListener("click", (event) => {
      event.preventDefault(); 
      getFacts2();
      const elements = document.querySelectorAll('.content1, .content3, .content4,.content5,.content6,.content7,.content8,.content9,.content10,.content11,.content12');
      elements.forEach((element) => {
        element.style.zIndex = -1;       
      });
      content2.style.zIndex = 1;
    
      
    });
 
 
     
      pythonLink.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts3();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content6,.content7,.content8,.content9,.content10,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content3.style.zIndex = 1;
      
      });

         
      html_css.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts4();
        const elements = document.querySelectorAll('.content1, .content2, .content3,.content5,.content6,.content7,.content8,.content9,.content10,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content4.style.zIndex = 1;
      
      });




           
      php.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts5();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content3,.content6,.content7,.content8,.content9,.content10,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content5.style.zIndex = 1;
      
      });






           
      aws.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts6();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content3,.content7,.content8,.content9,.content10,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content6.style.zIndex = 1;
      
      });


           
      azure.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts7();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content3,.content6,.content8,.content9,.content10,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content7.style.zIndex = 1;
      
      });



           
      google_cloud.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts8();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content6,.content7,.content3,.content9,.content10,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content8.style.zIndex = 1;
      
      });


           
      ai.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts9();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content6,.content7,.content8,.content3,.content10,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content9.style.zIndex = 1;
      
      });



      ml.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts10();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content6,.content7,.content8,.content9,.content3,.content11,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content10.style.zIndex = 1;
      
      });

      smart_contract.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts11();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content6,.content7,.content8,.content9,.content10,.content3,.content12');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content11.style.zIndex = 1;
      
      });


      crypto_currency.addEventListener("click", (event) => {
        event.preventDefault();
        getFacts12();
        const elements = document.querySelectorAll('.content1, .content2, .content4,.content5,.content6,.content7,.content8,.content9,.content10,.content11,.content3');
        elements.forEach((element) => {
          element.style.zIndex = -1;       
        });
        content12.style.zIndex = 1;
      
      });











  } 
);







