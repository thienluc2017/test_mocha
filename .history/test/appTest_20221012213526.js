const assert=require('chai').assert;
const getCertificate=require('../app').getCertificate;
const app=require('../app');
describe('Edge test',function(){
    it('Test1',function(){
        assert.equal(getCertificate(7.0,12.0),'Không được giấy khen');
    });
    it('Test2',function(){
        assert.equal(getCertificate(7.0,0.0),'Không được giấy khen');
    });
    it('Test3',function(){
        assert.equal(getCertificate(7.0,0.1),'Không được giấy khen');
    });
    it('Test4',function(){
        assert.equal(getCertificate(7.0,19.9),'Không được giấy khen');
    });
    it('Test5',function(){
        assert.equal(getCertificate(7.0,20.0),'Không được giấy khen');
    });
    it('Test6',function(){
        assert.equal(getCertificate(0.0,12.0),'Không được giấy khen');
    });
    it('Test7',function(){
        assert.equal(getCertificate(0.1,12.0),'Không được giấy khen');
    });
    it('Test8',function(){
        assert.equal(getCertificate(9.9,12.0),'Học sinh 5 tốt');
    });
    it('Test9',function(){
        assert.equal(getCertificate(10.0,12.0),'Học sinh 5 tốt');
    });

})
describe('Equivalence partitioning',function(){
    it('Test1',function(){
        assert.equal(getCertificate(-2.0,-5.0),'Không được giấy khen');
    });
    it('Test2',function(){
        assert.equal(getCertificate(7.0,3.0),'Không được giấy khen');
    });
    it('Test3',function(){
        assert.equal(getCertificate(9.2,15.0),'Không được giấy khen');
    });
    it('Test4',function(){
        assert.equal(getCertificate(10.2),'Không được giấy khen');
    });


})