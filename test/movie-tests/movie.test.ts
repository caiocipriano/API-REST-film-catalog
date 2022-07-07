import { PrismaClient } from "@prisma/client";
import request from "supertest";

import { app } from "../../src/server";

const prisma = new PrismaClient()

describe('Routes to /movies',()=>{
    it('/movies/',async ()=>{
        const movie = await prisma.movie.create({
            data:{
                title:"Topgun",
                year:"2022",
                time:"2hrs",
                categorieID:1
            }
        })
        expect(movie).toHaveProperty("Id") //Espero que minha querry tem um ID
    })
})