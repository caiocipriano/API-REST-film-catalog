import  request  from 'supertest';
import { app } from "../../src/server";

describe("",()=>{
   test("Should return all categories",async()=>{
        const response = await request(app).get("/categorie")
        expect(response.status).toBe(200)
    })

   test("Should create categorie",async()=>{
        const response = await request(app).post("/categorie")
        .send({
            name:"Test"
        })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('name')
    })

    test("Should return one categorie",async()=>{
        const response = await request(app).get("/categorie/1")
        expect(response.body).toHaveProperty("id")
        expect(response.status).toBe(200)
    })

    test("Should update categorie",async()=>{
        const response = await request(app).put("/categorie/2")
        .send({
            name: "Ação"
        })
        expect(response.status).toBe(200)
    })

    test("Should delete categorie",async()=>{
        const response = await request(app).delete("/categorie/2")
        expect(response.status).toBe(200)
    })  
})