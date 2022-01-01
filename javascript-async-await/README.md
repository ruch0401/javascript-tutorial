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

## Common Code

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
```

## Callback

We add another functional, traditionally named as `callback` as follows -

```javascript
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

## Promise

Promise avoids something known as `callback hell`. When you call an API, the API response always returns a Promise. But for example purposes, we are creating our own promise.

```javascript
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
    });
    const error = false;
    if (!error) {
      resolve();
    } else {
      reject("Something went wrong");
    }
  });
}

createPost({ title: "Post Three", description: "This is post three" }).then(
  getPosts
);
```

A promise takes in 2 arguments, resolve and reject. If there is no error, the ```resolve()``` method is called, however, if there is any error of sorts, we call the ```reject()``` method.

Once a promise is created, we can then call it using the ```.then()``` method. Similarly, if a promise is rejected, we can catch it using the ```.catch()``` block as follows - 

```javascript
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
    });
    const error = true;
    if (!error) {
      resolve();
    } else {
      reject("Something went wrong");
    }
  });
}

createPost({ title: "Post Three", description: "This is post three" })
  .then(getPosts)
  .catch((err) => {
    console.log(err);
    document.body.innerHTML = `<h2>${err}</h2>`;
  });
```

## Handling Multiple Promises

