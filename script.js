//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let sam = /\the\b|\ban\b|\ba\b/g;
let noarticlearr = [];
for(let i=0;i<arr.length;i++){
	let noarticle = arr[i].replace(sam,"");
	noarticlearr.push(noarticle);
	
}
noarticlearr.sort();
console.log(noarticlearr);
