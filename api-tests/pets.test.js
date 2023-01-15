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

  describe("Update pet details", () => {
    it("Updates pet name", async () => {
      request
        .post("/pet/19")
        .send("name=Rain")
        .expect(200)
        .then(async (updateRes) => {
          genericResponseSchema.validateSync(updateRes.body)
          const petResponse = await request.get("/pet/19").expect(200)
          expect(petResponse.body.name).to.equal("Rain")
        })
    })
  })

  describe("Delete a pet", () => {
    it("Deletes an existing pet", async () => {
      const res = await request.delete("/pet/19").expect(200)
      genericResponseSchema.validateSync(res.body)
    })

    it("Returns an error when deleting a non-existing pet", async () => {
      await request.delete("/pet/-1").expect(404)
    })
  })
})
