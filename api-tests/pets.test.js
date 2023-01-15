import { expect } from "chai"
import { petSchema, genericResponseSchema } from "./schemas.js"
import { addPet, request } from "./api-utils.js"

describe("Pet API test", () => {
  beforeEach(async () => {
    const pet = await addPet()
  })
  describe("Get request", () => {
    it("Finds a pet by valid ID", async () => {
      const res = await request.get("/pet/19").expect(200)
      petSchema.validateSync(res.body)
      expect(res.body.id).to.equal(19)
    })

    it("Finds a pet by invalid ID", async () => {
      const res = await request.get("/pet/-1").expect(404)
      genericResponseSchema.validateSync(res.body)
    })
  })
})
