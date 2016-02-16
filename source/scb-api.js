"use strict"
let url = require("url");
let Promise = require("bluebird");
let request = Promise.promisify(require("request"));
const standardBaseUrl = 'http://api.scb.se/OV0104/v1/doris/sv/ssd';

export class ScbApi {
    constructor(baseUrl){
        this.baseUrl = baseUrl === undefined ? standardBaseUrl : baseUrl;
    }
    
    getFirstLevelSubjects() {
        return new Promise((resolve, reject) => {
            let apiUrl = this.baseUrl;
            request(apiUrl).then(function(result) {  
                resolve(JSON.parse(result.body));
            });
        });
    }
    
    getSecondLevelSubjects(firstLevelId) {
        return new Promise((resolve, reject) => {
            let apiUrl = this.baseUrl+'/'+firstLevelId;
            request(apiUrl).then(function(result) {  
                resolve(JSON.parse(result.body));
            });
        });
    }
    
    getThirdLevelSubjects(firstLevelId, secondLevelId) {
        return new Promise((resolve, reject) => {
        let apiUrl = this.baseUrl+'/'+firstLevelId+'/'+secondLevelId;
            request(apiUrl).then(function (result) {
                resolve(JSON.parse(result.body));
            });
        });
    }
    
    getSurveys (firstLevelId, secondLevelId, thirdLevelId) {
        return new Promise((resolve, reject) => {
            let apiUrl = this.baseUrl+'/'+firstLevelId+'/'+secondLevelId+'/'+thirdLevelId;
            request(apiUrl).then(function (result) {
                resolve(JSON.parse(result.body));
            });
        });
    }
    
    getSurvey (firstLevelId, secondLevelId, thirdLevelId, surveyId) {
        return new Promise((resolve, reject) => {
            let apiUrl = this.baseUrl+'/'+firstLevelId+'/'+secondLevelId+'/'+thirdLevelId+'/'+surveyId;
            request(apiUrl).then((result) => {
                resolve(JSON.parse(result.body));
            });
        });
    }
}



