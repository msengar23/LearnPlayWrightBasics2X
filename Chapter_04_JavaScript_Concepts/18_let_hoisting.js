
console.log(score); //ReferenceError: Cannot access 'score' before initializatio
let score = 100;


{
// ---- TDZ for "score" starts here ----

let score = 100;
console.log(score);
}