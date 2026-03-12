```html
<!DOCTYPE html>
<html>
<head>
<title>Article | Trendaura</title>
<style>
body{font-family:Poppins;padding:40px}
img{width:100%;max-width:700px}
</style>
</head>

<body>

<h1 id="title"></h1>
<img id="image">
<p id="text"></p>

<script>

const articles=[

{title:"Celebrity Breakup Shocks Fans",
image:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
text:"Full celebrity story details and reactions online."},

{title:"New TikTok Dance Challenge Goes Viral",
image:"https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
text:"Millions join a viral TikTok dance challenge."}

]

const params=new URLSearchParams(window.location.search)

const id=params.get("id")

const article=articles[id]

document.getElementById("title").innerText=article.title
document.getElementById("image").src=article.image
document.getElementById("text").innerText=article.text

</script>

</body>
</html>
```
