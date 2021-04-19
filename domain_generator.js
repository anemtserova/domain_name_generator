window.onload = function () {

        let pronoun = ['the', 'my', "your"];
        let adj = ['great', 'happy', "hidden"];
        let noun = ['brain', 'garden', 'codebook'];
        let domExt = ['.com', '.me', '.pro'];
    
    
        for (let itemA of pronoun) {
              for (let itemB of adj) {
                for (let itemC of noun) {
                    for (let itemD of domExt) {
                        document.getElementById("domain-name").innerHTML+=`<p>${itemA+itemB+itemC+itemD}</p>`;
                    }
                }
            }
        }
};