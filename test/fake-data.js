module.exports.topLevelSubjects = [
    {"id":"AM","type":"l","text":"Arbetsmarknad"},
    {"id":"BO","type":"l","text":"Boende, byggande och bebyggelse"},
    {"id":"FM","type":"l","text":"Finansmarknad"},{"id":"HE","type":"l","text":"Hushållens ekonomi"},
    {"id":"JO","type":"l","text":"Jord- och skogsbruk, fiske"},
    {"id":"LE","type":"l","text":"Levnadsförhållanden"}
];

module.exports.secondLevelSubjectsForAM = [
    {"id":"AM0301","type":"l","text":"Arbetskostnadsindex för arbetare och tjänstemän inom privat sektor (AKI)"},
    {"id":"AM0401","type":"l","text":"Arbetskraftsundersökningarna (AKU)"},
    {"id":"AM0402","type":"l","text":"Arbetskraftsundersökningar, äldre serier (AKU)"}
];

module.exports.secondLevelSubjectsForBO = [
    {"id":"BO0102","type":"l","text":"Ombyggnad och rivning av flerbostadshus"},
    {"id":"BO0201","type":"l","text":"Priser för nyproducerade bostäder"},
    {"id":"BO0303","type":"l","text":"Outhyrda bostadslägenheter i flerbostadshus"},
    {"id":"BO0406","type":"l","text":"Hyror i bostadslägenheter"},
    {"id":"BO0601","type":"l","text":"Fastighetstaxeringar"},
    {"id":"BO0101","type":"l","text":"Nybyggnad av bostäder"},
    {"id":"BO0104","type":"l","text":"Bostadsbestånd"},
    {"id":"BO0301","type":"l","text":"Intäkts- och kostnadsundersökning för flerbostadshus (IKU)"}
];

module.exports.thirdLevelSubjectsForAMAndAM0401 = [
    {"id":"AM0401A","type":"l","text":"Befolkning efter arbetskraftstillhörighet från och med 2005"},
    {"id":"AM0401I","type":"l","text":"Sysselsatta från och med 2005"},
    {"id":"AM0401J","type":"l","text":"Anställda från och med 2005"},
    {"id":"AM0401S","type":"l","text":"Arbetstid från och med 2005"}
];


module.exports.surveysForAMAndAM0401AndAM0401I = [
    {"id":"NAKUStudArbSnittTK","type":"t","text":"Sysselsatta som studerar 15-74 år (AKU) - genomsnittligt antal arbets-/studietimmar per vecka samt antal sysselsatta efter kön och ålder. Kvartal 2005K2 - 2015K4","updated":"2016-01-28T09:30:00"},
    {"id":"NAKUSysselAnkAr","type":"t","text":"Sysselsatta 15-74 år (AKU) efter anknytningsgrad till arbetsmarknaden, kön och ålder. År 2005 - 2015","updated":"2016-01-28T09:30:00"},
    {"id":"NAKUSysselAnkM","type":"t","text":"Sysselsatta 15-74 år (AKU) efter anknytningsgrad till arbetsmarknaden, kön och ålder. Månad 2005M04 - 2015M12","updated":"2016-01-28T09:30:00"},
    {"id":"NAKUSysselsattaK","type":"t","text":"Sysselsatta 15-74 år (AKU), därav i arbete samt därav frånvarande hela veckan efter kön och ålder. Kvartal 2009K1 - 2015K4","updated":"2016-01-28T09:30:00"},
    {"id":"NAKUSysselSNI07Ar","type":"t","text":"Sysselsatta 15-74 år (AKU) efter anknytningsgrad till arbetsmarknaden, näringsgren SNI2007 och kön. År 2009 - 2015","updated":"2016-01-28T09:30:00"}
];


module.exports.surveyForAMAndAM0401AndAM0401IAndNAKUSysselAnkAr = {"title":"Sysselsatta 15-74 år (AKU), 1000-tal  efter kön, ålder, anknytningsgrad till arbetsmarknaden, tabellinnehåll och år",
"variables":
    [
        {"code":"Kon","text":"kön","values":["1","2","1+2"],
        "valueTexts":["män","kvinnor","totalt"],
        "elimination":true},
        {"code":"Alder","text":"ålder",
        "values":["15-19","20-24","25-34","35-44","45-54","55-64","65-74","tot15-74","tot16-64"],
        "valueTexts":["15-19 år","20-24 år","25-34 år","35-44 år","45-54 år","55-64 år","65-74 år","totalt 15-74 år","totalt 16-64 år"],
        "elimination":true},{"code":"Anknytningsgrad","text":"anknytningsgrad till arbetsmarknaden","values":["FA","TA","FÖ+MH","SYSTOT"],
        "valueTexts":["fast anställda","tidsbegränsat anställda","företagare + medhj hushållsmedlem","sysselsatta totalt"],"elimination":true},
        {"code":"ContentsCode","text":"tabellinnehåll","values":["AM0401H6","AM0401H8"],"valueTexts":["1000-tal","Felmarginal ±,1000-tal"]},
        {"code":"Tid","text":"år","values":["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015"],
        "valueTexts":["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015"],"time":true}
    ]
}


