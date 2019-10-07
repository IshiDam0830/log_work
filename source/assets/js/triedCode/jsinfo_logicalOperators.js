let currentUser = null;
let defaultUser = 'John';

let name = currentUser || defaultUser || "unnamed";

console.log( name ); // "John" – 最初の真値ですs
// 