import { describe, it, expect } from "vitest"
import handleFullBill from "./utils"

describe("handleFullBill Unit Test Suites", function() {
    it("should return something", function() {
        expect(handleFullBill(100, 0.10, 2)).toBeDefined()
    })

    it("should return a number for both tipAmountPerPerson and totalPerPerson", function() {
        const fullBill = handleFullBill(100, 0.10, 2)

        expect(fullBill).toHaveProperty("tipAmountPerPerson")
        expect(fullBill).toHaveProperty("totalPerPerson")
    })

    it("should return a tip amount per person of 10 and total per person of 110 for a bill of 100, a tip of 10% and 1 person", function() {
        const fullBill = handleFullBill(100, 0.10, 1)

        expect(fullBill.tipAmountPerPerson).toEqual(10)
        expect(fullBill.totalPerPerson).toEqual(110)
    })

    it("should return a tip amount per person of 5 and total per person of 55 for a bill of 100, a tip of 10% and 2 person", function() {
        const fullBill = handleFullBill(100, 0.10, 2)

        expect(fullBill.tipAmountPerPerson).toEqual(5)
        expect(fullBill.totalPerPerson).toEqual(55)
    })

    it("should return a tip amount per person of 12.5 and total per person of 75 for a bill of 250, a tip of 20% and 4 person", function() {
        const fullBill = handleFullBill(250, 0.20, 4)

        expect(fullBill.tipAmountPerPerson).toEqual(12.5)
        expect(fullBill.totalPerPerson).toEqual(75)
    })

    it("should catch an error when the bill, ", function() {
        const fullBill = handleFullBill(250, 0.20, 4)

        expect(fullBill.tipAmountPerPerson).toEqual(12.5)
        expect(fullBill.totalPerPerson).toEqual(75)
    })
})


