const posts = [
  {
    title:"📱 New TikTok Trend Taking Over",
    text:"A new challenge is spreading across social media.",
    img:"https://picsum.photos/400/200?1",
    category:"tiktok"
  },
  {
    title:"⭐ Celebrity Breakup Shocks Fans",
    text:"Fans react to shocking celebrity relationship news.",
    img:"https://picsum.photos/400/200?2",
    category:"celebrity"
  },
  {
    title:"🎬 New Movie Trailer Trends Worldwide",
    text:"A blockbuster trailer dominates social media.",
    img:"https://picsum.photos/400/200?3",
    category:"entertainment"
  },
  {
    title:"🎵 Viral Song Breaks Streaming Records",
    text:"A new song is dominating TikTok and Spotify.",
    img:"https://picsum.photos/400/200?4",
    category:"music"
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
    </div>
  `;
});

// Then fetch external articles and append
fetch("/articles")
  .then(res => res.json())
  .then(data => {
    data.forEach(article => {
      const card = document.createElement("div");
      card.classList.add("article"); // keep same styling

      card.innerHTML = `
        <img src="${article.image}" alt="">
        <h3>${article.title}</h3>
        <p>${article.content.substring(0,100)}...</p>
        <a href="article.html?id=${article.id}">Read More</a>
      `;

      newsGrid.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to fetch articles:", err));

// Dark mode toggle
function toggleDark(){
  document.body.classList.toggle("dark");
}

// ----- NEW: Category filter fixes -----

// Map nav/trending labels to article categories
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
  "ai technology": "technology"
};

// Filter and display articles by category
function showCategory(label){
  const category = categoryMap[label.toLowerCase()] || "all";

  let filtered;
  if(category === "all"){
    filtered = [...posts]; // start with local posts only
  } else {
    filtered = [...posts].filter(a => a.category === category);
  }

  // Display local filtered first
  newsGrid.innerHTML = "";
  filtered.forEach(post => {
    newsGrid.innerHTML += `
      <div class="article">
        <img src="${post.img}" alt="">
        <h3>${post.title}</h3>
        <p>${post.text}</p>
      </div>
    `;
  });

  // Now append external articles if they exist
  fetch("/articles")
    .then(res => res.json())
    .then(data => {
      data.filter(a => category === "all" || a.category === category)
          .forEach(article => {
            const card = document.createElement("div");
            card.classList.add("article");
            card.innerHTML = `
              <img src="${article.image}" alt="">
              <h3>${article.title}</h3>
              <p>${article.content.substring(0,100)}...</p>
              <a href="article.html?id=${article.id}">Read More</a>
            `;
            newsGrid.appendChild(card);
          });
    });
}
