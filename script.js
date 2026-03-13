const posts = [
  {
    title:"📱 New TikTok Trend Taking Over",
    text:"A new challenge is spreading across social media.",
    img:"https://picsum.photos/400/200?1",
    category:"tiktok",
    url:"https://www.tiktok.com"
  },
  {
    title:"⭐ Celebrity Breakup Shocks Fans",
    text:"Fans react to shocking celebrity relationship news.",
    img:"https://picsum.photos/400/200?2",
    category:"celebrity",
    url:"https://www.tmz.com"
  },
  {
    title:"🎬 New Movie Trailer Trends Worldwide",
    text:"A blockbuster trailer dominates social media.",
    img:"https://picsum.photos/400/200?3",
    category:"entertainment",
    url:"https://www.imdb.com"
  },
  {
    title:"🎵 Viral Song Breaks Streaming Records",
    text:"A new song is dominating TikTok and Spotify.",
    img:"https://picsum.photos/400/200?4",
    category:"music",
    url:"https://www.spotify.com"
  }
];

const newsGrid = document.getElementById("newsGrid");

// Render local static posts first
posts.forEach(post => {
  newsGrid.innerHTML += `
    <div class="article">
      <img src="${post.img}" alt="">
      <h3>${post.title}</h3>
      <p>${post.text}</p>
      <a href="${post.url}" target="_blank">Read More</a>
    </div>
  `;
});

// Fetch external articles and append
fetch("/articles")
  .then(res => res.json())
  .then(data => {
    data.forEach(article => {
      const card = document.createElement("div");
      card.classList.add("article");

      card.innerHTML = `
        <img src="${article.image}" alt="">
        <h3>${article.title}</h3>
        <p>${article.content.substring(0,100)}...</p>
        <a href="article.html?id=${article.id}" target="_blank">Read More</a>
      `;

      newsGrid.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to fetch articles:", err));

// Dark mode toggle
function toggleDark(){
  document.body.classList.toggle("dark");
}

// ----- Category filter fixes -----

// Map nav/trending labels to post/article categories
const categoryMap = {
  "home": "all",
  "celebrities": "celebrity",
  "tiktok": "tiktok",
  "fashion": "fashion",
  "crypto": "crypto",
  "technology": "technology",
  "finance": "finance",
  "health": "health",
  "lifestyle": "lifestyle",
  "celebrity breakups": "celebrity",
  "tiktok challenges": "tiktok",
  "crypto markets": "crypto",
  "fashion models": "fashion",
  "ai technology": "technology",
  "movies": "entertainment",
  "music": "music"
};

// Filter and display posts + API articles by category
function showCategory(label){
  const category = categoryMap[label.toLowerCase()] || "all";

  // Filter local posts
  const filteredLocal = (category === "all") 
                        ? posts 
                        : posts.filter(p => p.category.toLowerCase() === category.toLowerCase());

  // Clear container
  newsGrid.innerHTML = "";

  // Display local posts
  filteredLocal.forEach(post => {
    newsGrid.innerHTML += `
      <div class="article">
        <img src="${post.img}" alt="">
        <h3>${post.title}</h3>
        <p>${post.text}</p>
        <a href="${post.url}" target="_blank">Read More</a>
      </div>
    `;
  });

  // Fetch API articles and filter
  fetch("/articles")
    .then(res => res.json())
    .then(data => {
      data.filter(a => category === "all" || a.category.toLowerCase() === category.toLowerCase())
          .forEach(article => {
            const card = document.createElement("div");
            card.classList.add("article");
            card.innerHTML = `
              <img src="${article.image}" alt="">
              <h3>${article.title}</h3>
              <p>${article.content.substring(0,100)}...</p>
              <a href="article.html?id=${article.id}" target="_blank">Read More</a>
            `;
            newsGrid.appendChild(card);
          });
    })
    .catch(err => console.error("Failed to fetch articles:", err));
}
