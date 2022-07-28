'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

module.exports = () => {

    const mime = require('mime');
    const csv = require('csv-parser');
    const fs = require('fs');

    function isEmptyOrSpaces(str) {
        return str === null || str.match(/^ *$/) !== null;
    }

/****
 * IMPORT STARTUPS
 */

/*
    fs.createReadStream('./config/data/eot_startups.csv', { encoding: 'utf8' })
        .pipe(csv())
        .on('data', async (row) => {

            strapi.services.organization.create(
                {
                    name: row.name,
                    type: "startup",
                    description: row.description,
                    address: {
                        street_address: (!isEmptyOrSpaces(row.address)) ? row.address : "",
                        zip_code: "0",
                        city: (!isEmptyOrSpaces(row.region)) ? row.region : "",
                        country: "Tunisia",
                        latitude: row.latitude,
                        longitude: row.longitude
                    },
                    contact: {
                        website: (!isEmptyOrSpaces(row.website)) ? row.website : "",
                        email: (!isEmptyOrSpaces(row.email)) ? row.email : "",
                        phone: (!isEmptyOrSpaces(row.tel)) ? row.tel : ""
                    },
                    social: {
                        youtube: null,
                        twitter: null,
                        facebook: null,
                        instagram: null,
                        pinterest: null,
                        linkedin: null
                    },
                    logo: null
                }
            ).then( async (entity) => {
                let image1 = "./config/data/Startups/" + row.id + ".jpg";
                let image2 = "./config/data/Startups/" + row.id + ".png";
                let imageURL, imageEXT, imageName;

                fs.access(image1, fs.constants.F_OK, async (err) => {
                    if (err) {
                        console.log("PNG image")
                        imageName = row.id + ".png";
                        imageURL = image2;
                        imageEXT = '.png';
                    }
                    else {
                        console.log("JPG image");
                        imageName = row.id + ".jpg";
                        imageURL = image1;
                        imageEXT = '.jpg';
                    }

                    let fileStat = fs.statSync(imageURL);
                    console.log("Sending Image : " + imageURL)
                    await strapi.plugins.upload.services.upload.upload({
                        data: {
                            refId: entity.id,
                            ref: 'organization',
                            field: 'logo',
                        },
                        files: {
                            path: imageURL,
                            name: imageName,
                            type: mime.getType(imageURL), // mime type
                            size: fileStat.size,
                        },
                    })
                    .then(() => {
                        console.log("Image sent successfully");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                });
            });
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        }); */
/* 
        fs.createReadStream('./config/data/eot_coworking.csv', { encoding: 'utf8' })
        .pipe(csv())
        .on('data', async (row) => {
            console.log(row);
            strapi.services.organization.create(
                {
                    name: row.name,
                    type: "coworking_space",
                    description: "",
                    address: {
                        street_address: "",
                        zip_code: "0",
                        city: (!isEmptyOrSpaces(row.region)) ? row.region : "",
                        country: "Tunisia",
                        latitude: row.latitude,
                        longitude: row.longitude
                    },
                    contact: {
                        website: (!isEmptyOrSpaces(row.website)) ? row.website : "",
                        email: "",
                        phone: ""
                    },
                    social: {
                        youtube: null,
                        twitter: null,
                        facebook: null,
                        instagram: null,
                        pinterest: null,
                        linkedin: null
                    },
                    logo: null
                }
            ).then( async (entity) => {
                let image1 = "./config/data/coworking_space/coworking_" + row.logoId + ".jpg";
                let image2 = "./config/data/coworking_space/coworking_" + row.logoId + ".png";
                let imageURL, imageEXT, imageName;

                fs.access(image1, fs.constants.F_OK, async (err) => {
                    if (err) {
                        console.log("PNG image")
                        imageName = row.id + ".png";
                        imageURL = image2;
                        imageEXT = '.png';
                    }
                    else {
                        console.log("JPG image");
                        imageName = row.id + ".jpg";
                        imageURL = image1;
                        imageEXT = '.jpg';
                    }

                    let fileStat = fs.statSync(imageURL);
                    console.log("Sending Image : " + imageURL)
                    await strapi.plugins.upload.services.upload.upload({
                        data: {
                            refId: entity.id,
                            ref: 'organization',
                            field: 'logo',
                        },
                        files: {
                            path: imageURL,
                            name: imageName,
                            type: mime.getType(imageURL), // mime type
                            size: fileStat.size,
                        },
                    })
                    .then(() => {
                        console.log("Image sent successfully");
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                });
            });
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        }); */
};
