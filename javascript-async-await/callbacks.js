const posts = [
  { title: "Post One", description: "This is the post one" },
  { title: "Post Two", description: "This is the post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost(
  { title: "Post Three", description: "This is the post three" },
  getPosts
);
