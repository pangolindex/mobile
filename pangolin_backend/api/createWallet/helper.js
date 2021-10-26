const csvtojson = require("csvtojson");
const path = require("path");
const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config();

const ipfsFolder = '../ipfs-server/';

/**
 * create csv files
 */

exports.postCSV = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await csvtojson().fromFile(path.resolve(ipfsFolder, 'pangolinCollections.csv'));
            if (data) return resolve(data)
            return reject('no file found');
        } catch (e) { reject(e) }
    });
}


/**
 * upload json files to s3 bucket
 */
const s3 = new AWS.S3({
    accessKeyId: process['env']['accessKeyId'],
    secretAccessKey: process['env']['secretAccessKey']
});

exports.uploadFile = (value) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fileName = `./json/${value}.json`;
            fs.readFile(fileName, (err, data) => {
                if (err) throw err;
                const params = {
                    Bucket: 'test-pangolin-collections', // pass your bucket name
                    Key: `${value}.json`, // file will be saved as testBucket/contacts.csv
                    ACL: 'public-read',
                    "ContentType": "application/json",
                    Body: data
                };
                s3.upload(params, function (s3Err, data) {
                    if (s3Err) throw s3Err
                    resolve(data.Location);
                    console.log(`File uploaded successfully at ${data.Location}`)
                });
            });
        } catch (e) { reject(e) }
    });
};