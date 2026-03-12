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

`

})

function toggleDark(){

document.body.classList.toggle("dark")

}