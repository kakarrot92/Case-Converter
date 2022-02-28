let element1 = document.getElementById("upper-case");
element1.addEventListener("click", function() {
    document.querySelector(".text").value = document.querySelector(".text").value.toUpperCase();
});

let element2 = document.getElementById("lower-case");
element2.addEventListener("click", function() {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
});

let element3 = document.getElementById("proper-case");
element3.addEventListener("click", function() {
    let str = document.querySelector("textarea").value;
    str = str.toLowerCase();
    str = str.split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.querySelector("textarea").value = str.join(" ");
});
function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}
let element4 = document.getElementById("sentence-case");
element4.addEventListener("click", function() {
    let sentences = document.querySelector("textarea").value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    document.querySelector("textarea").value = modifiedSentences.join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

let element5 = document.getElementById("save-text-file");
element5.addEventListener("click", function() {
    download("text.txt", document.querySelector("textarea").value);
})
