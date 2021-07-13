"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("./types/page");
const platform_1 = require("./types/platform");
const express = require('express');
require('dotenv').config();
const app = express();
app.get('/', (req, res) => {
    res.send('Hi');
});
//Gets the number of users on the webiste per day
app.get('/users', (req, res) => {
    //Filler data
    const users = [
        { date: new Date('2020-07-01'), numUsers: 100 },
        { date: new Date('2020-07-02'), numUsers: 110 },
        { date: new Date('2020-07-03'), numUsers: 120 },
        { date: new Date('2020-07-04'), numUsers: 130 },
        { date: new Date('2020-07-05'), numUsers: 140 },
        { date: new Date('2020-07-06'), numUsers: 150 },
        { date: new Date('2020-07-07'), numUsers: 160 },
        { date: new Date('2020-07-08'), numUsers: 170 },
    ];
    res.send(users);
});
//Gets the breakdown of users per platform for a given date
app.get('/platformUsage', (req, res) => {
    console.log(`Getting platform usage data for date: ${req.query.date}`);
    //Filler data
    const platformUsage = [
        { platformType: platform_1.PlatformType.MOBILE, visits: 20 },
        { platformType: platform_1.PlatformType.TABLET, visits: 30 },
        { platformType: platform_1.PlatformType.DESKTOP, visits: 50 },
    ];
    res.send(platformUsage);
});
//Gets the number of views for a specific page on the website for a given date
app.get('/pageViews', (req, res) => {
    console.log(`Getting page views from date: ${req.query.date}`);
    //Filler data
    const pageViews = [
        { name: page_1.PageType.ABOUT, views: 60 },
        { name: page_1.PageType.PRODUCTS, views: 30 },
        { name: page_1.PageType.PRICING, views: 10 },
    ];
    res.send(pageViews);
});
app.listen(process.env.HOST_PORT, () => {
    console.log(`Listening on port ${process.env.HOST_PORT}`);
});
//# sourceMappingURL=server.js.map