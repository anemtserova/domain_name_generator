let pronoun = ['the', 'my', "your"];
let adj = ['great', 'happy', "hidden"];
let noun = ['brain', 'garden', 'codebook'];
let domExt = ['.com', '.me', '.pro'];

let customDomain=(arrA, arrB, arrC, arrD)=>{
	//let cusName='';
	for (let itemA of arrA) {
  	    for (let itemB of arrB) {
    	    for (let itemC of arrC) {
      	        for (let itemD of arrD) {
        	        console.log(itemA+itemB+itemC+itemD);
        }
      }
    }
  }
}

customDomain(pronoun, adj, noun, domExt);