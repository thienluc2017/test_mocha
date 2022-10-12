const assert=require('chai').assert;
const Certificate=require('../app').Certificate;
const app=require('../app');
describe('App',function(){
    it('Edge test',function(){
        assert.equal(sayHello(),'hello');
    });

})
