import { Page, PageType } from "./types/page";
import { Platform, PlatformType } from "./types/platform";
import { Users } from "./types/users";

const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
})

//Gets the number of users on the webiste per day
app.get('/users', (req, res) => {
    //Filler data
    const users: Users[] = [
        { date: new Date('2020-07-01'), numUsers: 100 },
        { date: new Date('2020-07-02'), numUsers: 110 },
        { date: new Date('2020-07-03'), numUsers: 120 },
        { date: new Date('2020-07-04'), numUsers: 130 },
        { date: new Date('2020-07-05'), numUsers: 140 },
        { date: new Date('2020-07-06'), numUsers: 150 },
        { date: new Date('2020-07-07'), numUsers: 160 },
        { date: new Date('2020-07-08'), numUsers: 170 },
    ]
    res.send(users);
})

//Gets the breakdown of users per platform for a given date
app.get('/platformUsage', (req, res) => {
    console.log(`Getting platform usage data for date: ${req.query.date}`);

    //Filler data
    const platformUsage: Platform[] = [
        { platformType: PlatformType.MOBILE, visits: 20 },
        { platformType: PlatformType.TABLET, visits: 30 },
        { platformType: PlatformType.DESKTOP, visits: 50 },
    ]

    res.send(platformUsage);
})

//Gets the number of views for a specific page on the website for a given date
app.get('/pageViews', (req, res) => {
    console.log(`Getting page views from date: ${req.query.date}`);

    //Filler data
    const pageViews: Page[] = [
        { name: PageType.ABOUT, views: 60 },
        { name: PageType.PRODUCTS, views: 30 },
        { name: PageType.PRICING, views: 10 },
    ]
    
    res.send(pageViews);
})

app.listen(process.env.HOST_PORT, () => {
    console.log(`Listening on port ${process.env.HOST_PORT}`);
});