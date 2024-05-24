const $formTip = document.querySelector('.form-tip')

function onUpdateBill(billValue: string): void {
    const $totalPerPerson = document.querySelector('.total-per-person')

    if ($totalPerPerson) {
        $totalPerPerson.textContent = "$" + billValue
    } else {
        throw new Error("Can't find totalPerPeson DOM node")
    }
}


function onUpdateTip(tipValue: string): void {

}


function onUpdateNumberOfPeople(numberOfPeopleValue: string): void {

}


$formTip?.addEventListener('input', function(e) {
    const targetElement = e.target as HTMLInputElement
    const dataType = targetElement.getAttribute('data-type')

    if (dataType === "bill") {
        onUpdateBill(targetElement.value)
    } else if (dataType === "tip") {
        console.log("Let's update the tip")
    } else if (dataType === "people") {
        console.log("Let's update the people")
    } else {
        throw new Error("Unknown data type")
    }
})

function main(): void {
    console.log("Hello, Thomas!")
}

main()
