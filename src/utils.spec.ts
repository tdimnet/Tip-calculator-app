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
})


