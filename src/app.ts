const $formTip = document.querySelector('.form-tip')

function onUpdateBill() {
    const billValue = (document.querySelector('#bill') as HTMLInputElement).value

    console.log(billValue)
}


$formTip?.addEventListener('input', function(e) {
    const targetElement = e.target as HTMLInputElement
    const dataType = targetElement.getAttribute('data-type')

    if (dataType === "bill") {
        onUpdateBill()
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
