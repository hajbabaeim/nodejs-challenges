const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log("0");
fetchPromise.then(response => {
  console.log("1", response.json().then(data => console.log("3")));
  console.log("2")
});
console.log("4")

// orders

// 1 ---> "0" synchronous operation
// 2 ---> "4" another synchronous operation, so despite the result of Promise (resolve or reject) it showed up after
// 3 ---> "1" showed up first, before fetch Promise resolves
// 4 ---> "2" right after "1"
// 5 ---> "3" The json() method of the Response object is a Promise, so it will only execute after the Promise from response.json() resolves, which will happen after the fetch Promise resolves

// The final order: "0", "4", "1", "2", "3".