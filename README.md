# Convert timestamp to normal date and normal date to timestamp.

---
* Convert timestamp in normal data.

```
let dateInTimeStamp = 1534215300;

let converterTimeStampToNormalDate = new Date(dateInTimeStamp * 1000);

console.log(converterTimeStampToNormalDate);
```

---
* Convert normal data to timestamp

```
let dateNormal = new Date();

let converterNormalDateToTimeStamp = new Date(dateNormal).getTime() / 1000;

console.log(converterNormalDateToTimeStamp);
```
