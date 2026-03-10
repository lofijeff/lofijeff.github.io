async function loadPosts() {
  const res = await fetch('posts.json');
  const files = (await res.json()).reverse();
  const container = document.getElementById('posts');

  for (const file of files) {
    const mdRes = await fetch(`posts/${file}`);
    const md = await mdRes.text();

    const html = marked.parse(md);

    const border1 = document.createElement('div');
    border1.className = "outer-border";

    const border2 = document.createElement('div');
    border2.className = "middle-border";

    const border3 = document.createElement('div');
    border3.className = "inner-border";

    const article = document.createElement('article');
    article.innerHTML = html;
    article.querySelectorAll("a").forEach(link => {
      if (link.querySelector("img")) {
        link.target = "_blank";
        link.rel = "noopener";
      }
    });

    border1.appendChild(border2);
    border2.appendChild(border3);
    border3.appendChild(article);
    container.appendChild(border1);
  }
}

loadPosts();

