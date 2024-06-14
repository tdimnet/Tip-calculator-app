import handleFullBill from "./utils.js"

const $formTip = document.querySelector('.form-tip')

function handleBill(billValue: string): void {
    const $totalAmountPerPerson = document.querySelector('.total-per-person')

    if ($totalAmountPerPerson) {
        billValue = billValue === "0" ? "0" : billValue
        $totalAmountPerPerson.textContent = "$" + Number(billValue).toFixed(2)
    } else {
        throw new Error("Can't find totalPerPeson DOM node")
    }
}

function handleRadioButtons(selectedRadio: Element) {
    const radioButtons = document.querySelectorAll('.radio-btn')
    radioButtons.forEach(radioBtn => radioBtn.classList.remove('checked'))
    selectedRadio.parentElement.classList.add('checked')
}


function handleTip(tipElement: string): void {
    console.log("Let's update the tip", tipElement)
}


function handlePeopleNumber(numberOfPeopleValue: string): void {
    console.log("Let's update the people", numberOfPeopleValue)
}


function onUpdateCustomType() {
    const customType = document.querySelector('input[data-type="custom"]')

    customType.setAttribute("type", "text")

    console.log("======")
    console.log(customType)
    console.log("======")
}


$formTip?.addEventListener('input', function(e) {
    const targetElement = e.target as HTMLInputElement
    const dataType = targetElement.getAttribute('data-type')


    if (dataType === "bill") {
        handleBill(targetElement.value)
    } else if (dataType === "tip") {
        handleRadioButtons(targetElement)
        handleTip(targetElement.value)
    } else if (dataType === "people") {
        handlePeopleNumber(targetElement.value)
    } else if (dataType === "custom") {
        onUpdateCustomType()
    } else {
        throw new Error("Unknown data type")
    }

    // Calcul tip amount and total per person
    const bill = (document.querySelector('#bill') as HTMLInputElement).value
    const numberOfPeople = (document.querySelector('#people') as HTMLInputElement).value

    console.log(bill)
    console.log(numberOfPeople)

    const { totalPerPerson, tipAmountPerPerson } = handleFullBill(bill, 0.1, numberOfPeople)

    console.log("+++++")
    console.log(totalPerPerson)
    console.log("+++++")
    console.log("+++++")
    console.log(tipAmountPerPerson)
    console.log("+++++")
})

function main(): void {
    const radioButtons = document.querySelectorAll('.radio-btn')
    radioButtons[0].classList.add('checked')
}

main()
