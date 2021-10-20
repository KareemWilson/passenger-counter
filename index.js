//document.getElementById("count").innerText = 5



let countEl = document.getElementById("count")

//console.log(countEl)


let count = 0

function increment(){
    count = count +1 
    countEl.innerText = count

}

let saveEl = document.getElementById("save-el")

function save(){
    let savedCount = "  " + count + " - "
    saveEl.innerText += savedCount
}

let resetEl = document.getElementById("save-el")

function reset() {

 resetEl.innerText = "Previous entire"
 countEl.innerText = 0 
 count = 0

}