const arr = [3,7,3,2,5];

let body = document.body;

let li = "";
let sum = 0; 
let numbers = "";
for (let i = 0; i < arr.length; i++){
    li += `<li>${arr[i]}</li>`;
    sum += arr[i];
    if (i === arr.length - 1){
    numbers += arr[i] + "=";
    }
    else{
        numbers += arr[i] + "+";
    }
}

body.innerHTML += 
`
<ol>
    ${li}
</ol>
<p>${numbers} ${sum}</p>
`;

