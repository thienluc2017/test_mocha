const assert=require('chai').assert;
const getCertificate=require('../app').getCertificate;
const app=require('../app');
describe('Edge test',function(){
    it('Test1',function(){
        assert.equal(getCertificate(7.0,12.0),'Không được giấy khen');
    });
    it('Test2',function(){
        assert.equal(getCertificate(7.0,0.0),'');
    });
    it('Test3',function(){
        assert.equal(getCertificate(7.0,0.1),'');
    });
    it('Test4',function(){
        assert.equal(getCertificate(7.0,19.9),'');
    });
    it('Test5',function(){
        assert.equal(getCertificate(7.0,20.0),'');
    });
    it('Test6',function(){
        assert.equal(getCertificate(0.0,12.0),'');
    });
    it('Test7',function(){
        assert.equal(getCertificate(0.1,12.0),'');
    });
    it('Test8',function(){
        assert.equal(getCertificate(),'');
    });
    it('Test9',function(){
        assert.equal(getCertificate(),'');
    });

})
