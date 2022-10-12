const assert=require('chai').assert;
const getCertificate=require('../app').getCertificate;
const app=require('../app');
describe('Edge test',function(){
    it('Test1',function(){
        assert.equal(getCertificate(7.0,12.0),'Không được giấy khen');
    });
    it('Test2',function(){
        assert.equal(getCertificate(),'');
    });
    it('Test3',function(){
        assert.equal(getCertificate(),'');
    });
    it('Test4',function(){
        assert.equal(getCertificate(),'');
    });
    it('',function(){
        assert.equal(getCertificate(),'');
    });
    it('',function(){
        assert.equal(getCertificate(),'');
    });
    it('',function(){
        assert.equal(getCertificate(),'');
    });
    it('',function(){
        assert.equal(getCertificate(),'');
    });
    it('',function(){
        assert.equal(getCertificate(),'');
    });

})
