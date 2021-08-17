"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);


describe('express server',()=>{
    it('should give get food method',async ()=>{
        // let object={
        //     foodname:"pizza",
        //     foodtype:"italine"
        // }
        // const response=await request.get('/food');
        // expect(response.status).toBe(status);
        // expect(typeof response.body.foodname).toEqual(object.foodname);
        // expect(typeof response.body.foodtype).toEqual(object.foodtype);
        let param="/food";
        let status=404;
        //act 
        const response= await request.get(param);
        //assert
        expect(response.status).toBe(status);
    });
    it('should give delet food method',async ()=>{
       
        let param="/food";
        let status=404;
        //act 
        const response= await request.delete(param);
        //assert
        expect(response.status).toBe(status);
    });
    it('should give status 201',async ()=>{
       
        let param="/food";
        let status=201;
        let object={
            foodname:'pizza',
            foodtype:'italian'
        }
        //act 
        const response= await request.post(param,objJson);
        //assert
        expect(response.status).toBe(status);   
        expect(response.status).toEqual(object); 
    });

    
    it('shoud check 500 errors',async ()=>{
        // arrange 
        let param='/bad';
        let status = 500;
      
        // act 
        const response= await request.get(param);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });
    it('shoud check 404 not found errors', async () => {
        // arrange
        let param = '/notfound';
        let status = 404;
        // act
        const response = await request.get(param);
        // assert
        expect(response.status).toBe(status);
    });
    it("should give status 201 ", async () => {
        // arrange
        let param = "/food/1";
        let status = 200;

        let obj = {
          "foodName": "bread",
          "foodDescription": "great"
        }
        let object= {
          foodName: "bread",
          foodDescription: "great"
        }
        // act
        const res = await request.put(param, obj);
        // assert
        expect(res.status).toBe(status);
        expect(typeof res.data).toEqual(obj);
      });
})