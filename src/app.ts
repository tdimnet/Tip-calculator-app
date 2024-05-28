const $formTip = document.querySelector('.form-tip')

function onUpdateBill(billValue: string): void {
    const $totalAmountPerPerson = document.querySelector('.total-per-person')

    if ($totalAmountPerPerson) {
        billValue = billValue === "0" ? "0" : billValue
        $totalAmountPerPerson.textContent = "$" + Number(billValue).toFixed(2)
    } else {
        throw new Error("Can't find totalPerPeson DOM node")
    }
}


function onUpdateTip(tipValue: string): void {
    console.log("Let's update the tip", tipValue)
}


function onUpdateNumberOfPeople(numberOfPeopleValue: string): void {
    console.log("Let's update the people", numberOfPeopleValue)
}


$formTip?.addEventListener('input', function(e) {
    const targetElement = e.target as HTMLInputElement
    const dataType = targetElement.getAttribute('data-type')

    if (dataType === "bill") {
        onUpdateBill(targetElement.value)
    } else if (dataType === "tip") {
        onUpdateTip(targetElement.value)
    } else if (dataType === "people") {
        onUpdateNumberOfPeople(targetElement.value)
    } else {
        throw new Error("Unknown data type")
    }
})

function main(): void {
    console.log("Hello, Thomas!")
}

main()
