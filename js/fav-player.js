const cartArray = [];

function display(playerCart) {


    const playerList = document.getElementById('player-list');
    playerList.innerText = "";

    for (let i = 0; i < cartArray.length; i++) {
        if (cartArray.length == 6) {
            alert("you can add only five");

            return

        }

        const name = cartArray[i].playerName;
        const li = document.createElement("li")
        li.innerText = `${name}`
        playerList.appendChild(li)

    }
}


function addToCart(element) {
    element.addToCart = true;

    const playerName = element.parentNode.children[0].innerText;

    const playerObject = {
        playerName: playerName
    }
    cartArray.push(playerObject)


    display(cartArray)
}