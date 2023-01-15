import { object, string, number, array } from "yup"

export const petSchema = object({
  id: number().required(),
  category: object({
    id: number().required(),
    name: string().required(),
  }),
  name: string().required(),
  photoUrls: array().of(string()),
  tags: array().of(
    object({
      id: number().required(),
      name: string().required(),
    })
  ),
  status: string().oneOf(["available", "pending", "sold"]),
})

export const genericResponseSchema = object({
  code: number().required(),
  type: string().required(),
  message: string(),
})
