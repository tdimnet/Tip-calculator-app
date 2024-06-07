function handleFullBill(bill: number, tip: number, numberOfPeople: number): {tipAmountPerPerson: number, totalPerPerson: number} {
    const tipAmount = Number((bill * tip).toFixed(2))
    const totalBill = Number((bill * (1 + tip)).toFixed(2))

    return {
        tipAmountPerPerson: tipAmount / numberOfPeople,
        totalPerPerson: totalBill / numberOfPeople
    }
}

export default handleFullBill
