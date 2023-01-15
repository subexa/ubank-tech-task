import supertest from "supertest"

const BASE_URL = "https://petstore.swagger.io/v2"
export const request = supertest(BASE_URL)

export async function addPet() {
  return request
    .post("/pet")
    .send({
      id: 19,
      category: {
        id: 3,
        name: "Feline",
      },
      name: "Jasper",
      photoUrls: [
        "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/",
      ],
      tags: [
        {
          id: 8,
          name: "cutie",
        },
      ],
      status: "available",
    })
    .expect(200)
}
