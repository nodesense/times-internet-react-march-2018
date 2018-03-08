import * as service from "./service";
 
//mock restful api
import fetchMock from 'fetch-mock';

describe("testing get products", () => {

    afterEach(() => {
        fetchMock.restore();
    })
       
    it("should get products",  (done) => {
 
        fetchMock.get('http://localhost:7070/delayed/api/products', 
                     [{id: 1},{id: 2}]);

        
        service.getProducts()
        .then ( products => {
            console.log("**", products);
            expect(products.length).toBe(2);
            done();
        }); 
              
    })
}) 