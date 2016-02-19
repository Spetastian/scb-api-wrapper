var ScbApi = require('../bin/scb-api').ScbApi;
var scb = new ScbApi();
var fakeData = require('./fake-data');
var nock = require("nock");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = chai.expect;
chai.use(chaiAsPromised);

describe('ScbApi', function() {
    
    before(function() {
        nock('http://api.scb.se')
            .get('/OV0104/v1/doris/sv/ssd')
            .reply(200, fakeData.topLevelSubjects);
            
        nock('http://api.scb.se')
            .get('/OV0104/v1/doris/sv/ssd/AM')
            .reply(200, fakeData.secondLevelSubjectsForAM);
            
        nock('http://api.scb.se')
            .get('/OV0104/v1/doris/sv/ssd/BO')
            .reply(200, fakeData.secondLevelSubjectsForBO);
            
        nock('http://api.scb.se')
            .get('/OV0104/v1/doris/sv/ssd/AM/AM0401')
            .reply(200, fakeData.thirdLevelSubjectsForAMAndAM0401);
            
        nock('http://api.scb.se')
            .get('/OV0104/v1/doris/sv/ssd/AM/AM0401/AM0401I')
            .reply(200, fakeData.surveysForAMAndAM0401AndAM0401I);
            
        nock('http://api.scb.se')
            .get('/OV0104/v1/doris/sv/ssd/AM/AM0401/AM0401I/NAKUSysselAnkAr')
            .reply(200, fakeData.surveyForAMAndAM0401AndAM0401IAndNAKUSysselAnkAr);
            
    });
    
    describe('#getFirstLevelSubjects', function() {

        it('should return six subjects', function(done) {
            scb.getFirstLevelSubjects().then(function(subjects){
                expect(subjects).to.have.length(6);
                done();
            });
        });
    });
    
    describe('#getSecondLevelSubjects', function(){
        
        it('should return three subjects for first level id: AM', function(done){
            scb.getSecondLevelSubjects('AM').then(function(subjects){
                expect(subjects).to.have.length(3);
                done();
            });
        });
        
        it('should return eight subjects for first level id: BO', function(done){
            scb.getSecondLevelSubjects('BO').then(function(subjects){
                expect(subjects).to.have.length(8);
                done();
            });
        });
    });
    
    describe('#getThirdLevelSubjects', function(){
        
        it('should return four subjects for first level id: AM and second level id: AM0401', function(done){
            scb.getThirdLevelSubjects('AM', 'AM0401').then(function(subjects){
                expect(subjects).to.have.length(4);
                done();
            });
        });
    });
        
    describe('#getSurveys', function(){
        
        it('should return five subjects for first level id: AM and second level id: AM0401 and third level id: AM0401I ', function(done){
            scb.getSurveys('AM', 'AM0401', 'AM0401I').then(function(surveys){
                expect(surveys).to.have.length(5);
                done();
            });
        });
    });
    
    describe('#getSurvey', function(){
        
        it('should return result that is not null or undefined for first level id: AM and second level id: AM0401 and third level id: AM0401I and survey id: NAKUSysselAnkAr', function(done){
            scb.getSurvey('AM', 'AM0401', 'AM0401I', 'NAKUSysselAnkAr').then(function(survey){
                expect(survey).not.to.be.null;
                expect(survey).not.to.be.undefined;
                done();
            });
        });
    });
    
});
