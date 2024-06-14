function handleFullBill(bill: number, tip: number, numberOfPeople: number): {tipAmountPerPerson: number, totalPerPerson: number} {
    if (bill <= 0 || tip <= 0 || numberOfPeople <= 0) {
        throw new Error('bill, tip, or numberOfPeople can no be equal or below 0')
    }

    const tipAmount = Number((bill * tip).toFixed(2))
    const totalBill = Number((bill * (1 + tip)).toFixed(2))

    return {
        tipAmountPerPerson: tipAmount / numberOfPeople,
        totalPerPerson: totalBill / numberOfPeople
    }
}

export default handleFullBill
