/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
console.log(`Running question #2 with args ${args}`);

const fs = require("fs");
const csv = require("csv-parser");

function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

let arrData = [];
let objData = {};
let objArr = [];

const getData = () => {
  fs.createReadStream(`./${args}`)
    .pipe(csv())
    .on("data", function (data) {
      try {
        arrData.push(data);

        //perform the operation
      } catch (err) {
        console.log(err);
        //error handler
      }
    })
    .on("end", function () {
      //some final operation
      arrData.forEach((el) => {
        if (objArr.includes(objData[el.entityId])) {
          el.eventType == "click"
            ? objData[el.entityId].click++
            : objData[el.entityId].impression++;
          objData[el.entityId].ctr = (
            objData[el.entityId].click / objData[el.entityId].impression
          ).toFixed(4);
        } else {
          objArr.push(
            (objData[el.entityId] = {
              productId: el.entityId,
              click: 1,
              impression: 1,
              ctr: 0,
            })
          );
        }
      });
      console.log(convertToCSV(objArr));
    });
};

getData();
