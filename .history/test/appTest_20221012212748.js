const assert=require('chai').assert;
const getCertificate=require('../app').getCertificate;
const app=require('../app');
describe('Edge test',function(){
    it('Test1',function(){
        assert.equal(getCertificate(),'hello');
    });

})
