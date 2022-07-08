import { PrismaClient } from '@prisma/client';
import  request  from 'supertest';
import { app } from "../../src/server";

describe("",()=>{
    const prisma = new PrismaClient()

    test("Should create movie",async()=>{
        const response = await request(app).post("/movies")
        .send({
            title:"test",
            year:"2022",
            time:"2hrs",
            nameTitle: "Ação"
        })
        expect(response.status).toBe(200)
    })
})