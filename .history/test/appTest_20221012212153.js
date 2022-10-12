const assert=require('chai').assert;
const Certificate=require('../app').Certificate;
const app=require('../app');
describe('App',function(){
    it('app should return hello',function(){
        assert.equal(sayHello(),'hello');
    });

})
