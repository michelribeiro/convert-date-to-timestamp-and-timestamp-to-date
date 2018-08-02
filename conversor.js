// conversor

// convert timestamp in normal date
let dateInTimeStamp = 1534215300;
let converterTimeStampToNormalDate = new Date(dateInTimeStamp * 1000);
console.log(converterTimeStampToNormalDate);

// convert date in timestamp
let dateNormal = new Date();
let converterNormalDateToTimeStamp = new Date(dateNormal).getTime() / 1000;
