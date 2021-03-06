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

A promise takes in 2 arguments, resolve and reject. If there is no error, the `resolve()` method is called, however, if there is any error of sorts, we call the `reject()` method.

Once a promise is created, we can then call it using the `.then()` method. Similarly, if a promise is rejected, we can catch it using the `.catch()` block as follows -

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

If we want to trigger multiple promises simultaneously, then we can use `Promise.all()` as follows -

```javascript
// promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "GoodBye!");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json();
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
```

### Async / Await

It is sort of a syntactical sugar that allows us to write code as we would have written in a synchronized manner.

```javascript
async function init() {
  await createPost({ title: "Post Three", description: "This is post three" });
  getPosts();
}

init();
```

### Async / Await / Fetch

The `fetch()` method in JavaScript is used to request to the server and load the information in the webpages. The request can be of any APIs that returns the data of the format JSON or XML. This method returns a promise.

```javascript
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();
```
