const nodeCache = require('node-cache');
const cache = new nodeCache({ stdTTL: 300, checkperiod: 320 });

const cacheGetAnnouncements = (req, res, next) => {
    const key = 'announcements';
    const cachedAnnouncements = cache.get(key); 
    if (cachedAnnouncements) {
        return res.status(200).json(cachedAnnouncements);
        
    }
    next();
};

module.exports = {cacheGetAnnouncements, cache};