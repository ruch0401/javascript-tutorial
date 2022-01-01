# Javascript Callback, Promise, and Await tutorials

The following code just lists the 2 posts and does not display the 3rd post even when is has been created.

```javascript
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

getPosts();

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

createPost({ title: "Post Three", description: "This is the post three" });
```

## Callback

We add another functional, traditionally named as `callback` as follows -

```javascript
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
```

This essentially means that once the post has been created, then we call the `getPosts()` method which is passed to the createPost function as a callback function
