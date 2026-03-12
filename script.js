const posts = [

{
title:"📱 New TikTok Trend Taking Over",
text:"A new challenge is spreading across social media.",
img:"https://picsum.photos/400/200?1"
},

{
title:"⭐ Celebrity Breakup Shocks Fans",
text:"Fans react to shocking celebrity relationship news.",
img:"https://picsum.photos/400/200?2"
},

{
title:"🎬 New Movie Trailer Trends Worldwide",
text:"A blockbuster trailer dominates social media.",
img:"https://picsum.photos/400/200?3"
},

{
title:"🎵 Viral Song Breaks Streaming Records",
text:"A new song is dominating TikTok and Spotify.",
img:"https://picsum.photos/400/200?4"
}

]

const newsGrid = document.getElementById("newsGrid")

posts.forEach(post=>{

newsGrid.innerHTML+=`

<div class="article">

<img src="${post.img}">

<h3>${post.title}</h3>

<p>${post.text}</p>

</div>

`fetch("/articles")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("news-container");
    data.forEach(article => {
      const card = document.createElement("div");
      card.classList.add("news-card");

      card.innerHTML = `
        <img src="${article.image}" alt="">
        <h3>${article.title}</h3>
        <p>${article.content.substring(0,100)}...</p>
        <a href="article.html?id=${article.id}">Read More</a>
      `;

      container.appendChild(card);
    });
  });

})

function toggleDark(){

document.body.classList.toggle("dark")


}
