const posts = [
  { title: "Post One", description: "This is post one" },
  { title: "Post Two", description: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

/*
// Creating a post with the return type 'Promose'
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
*/

/*
// Promise
createPost({ title: "Post Three", description: "This is post three" })
  .then(getPosts)
  .catch((err) => {
    console.log(err);
    document.body.innerHTML = `<h2>${err}</h2>`;
  });
*/

/*
// promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "GoodBye!");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
*/

/*
// Async / Await
async function init() {
  await createPost({ title: "Post Three", description: "This is post three" });
  getPosts();
}

init();
*/

/*
// Aync / Await / Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();
*/