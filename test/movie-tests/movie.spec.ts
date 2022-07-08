import  request  from 'supertest';
import { app } from "../../src/server";

describe("",()=>{
   test("Should return all movies",async()=>{
        const response = await request(app).get("/movies")
        expect(response.status).toBe(200)
    })

   test("Should create movie",async()=>{
        const response = await request(app).post("/movies")
        .send({
            title:"test",
            year:"2022",
            time:"2hrs",
            nameTitle: "Ação"
        })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('Id')
    })

    test("Should return one movie",async()=>{
        const response = await request(app).get("/movies/1")
        expect(response.body).toHaveProperty("Id")
        expect(response.status).toBe(200)
    })

    test("Should update movie",async()=>{
        const response = await request(app).put("/movies/15")
        .send({
            title:"Minions",
            year:"2022",
            time:"2hrs",
            nameTitle: "Ação"
        })
        expect(response.status).toBe(200)
    })

    test("Should delete movie",async()=>{
        const response = await request(app).delete("/movies/15")
        expect(response.status).toBe(200)
    })

    
})