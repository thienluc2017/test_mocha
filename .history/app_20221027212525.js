module.exports={
    getCertificate: function(averageScore,score ){
        if(averageScore<0.0||averageScore>10.0){
            averageScore=averageScore;
            return "Không hợp lệ";
        }
        if(score<0.0||score>20.0){
            return "Không hợp lệ";
        }
        if(averageScore<8.0|| score<12.0){
            return "Không được giấy khen";
        }
        return "Học sinh 5 tốt";
    }

}