const nodeCache = require('node-cache');
const cache = new nodeCache({ stdTTL: 300, checkperiod: 320 });
require('dotenv').config();

const cacheGetAnnouncements = (req, res, next) => {
    const key = process.env.ANNOUNCEMENT_KEY;
    const cachedAnnouncements = cache.get(key); 
    if (cachedAnnouncements) {
        return res.status(200).json(cachedAnnouncements);
        
    }
    next();
};

module.exports = {cacheGetAnnouncements, cache};