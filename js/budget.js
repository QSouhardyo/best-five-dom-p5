

document.getElementById('calculate').addEventListener('click', function () {
    //  per player input
    const perPlayerElement = document.getElementById('per-Player');
    const perPlayerString = perPlayerElement.value;
    const perPlayerValue = parseFloat(perPlayerString);

    if (isNaN(perPlayerValue)) {
        alert('please enter number')
        return;
    }

    const playerCostElement = document.getElementById('player-cost');
    const playerCostString = playerCostElement.innerText;
    const playerCostAmount = parseFloat(playerCostString);

    playerCostElement.innerText = perPlayerValue * cartArray.length;


})

document.getElementById('calculate-total').addEventListener('click', function () {
    // manager input
    const managerElement = document.getElementById('manager-input');
    const managerString = managerElement.value;
    const managerSalary = parseFloat(managerString);
    // coach input
    const coachElement = document.getElementById('coach-input');
    const coachString = coachElement.value;
    const coachSalary = parseFloat(coachString);

    if (isNaN(managerSalary) || isNaN(coachSalary)) {
        alert('lease enter number')
        return
    }

    const totalElement = document.getElementById('total-field')
    const totalString = totalElement.innerText;
    const totalAmount = parseFloat(totalString);

    const perPlayerElement = document.getElementById('per-Player');
    const perPlayerString = perPlayerElement.value;
    const perPlayerValue = parseFloat(perPlayerString);

    const playerCostElement = document.getElementById('player-cost');
    const playerCostString = playerCostElement.innerText;
    const playerCostAmount = parseFloat(playerCostString);

    playerCostElement.innerText = perPlayerValue * cartArray.length;

    totalElement.innerText = managerSalary + coachSalary + playerCostAmount;
})