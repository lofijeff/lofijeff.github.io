async function loadPosts() {
  const res = await fetch('posts.json');
  const files = await res.json();

  const container = document.getElementById('posts');

  for (const file of files) {
    const mdRes = await fetch(`posts/${file}`);
    const md = await mdRes.text();

    const html = marked.parse(md);

    const article = document.createElement('article');
    article.innerHTML = html;

    container.appendChild(article);
  }
}

loadPosts();

