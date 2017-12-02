const Video = require('../db').Video;

const saveToDatabase = function (videoObject) {
    let singleVideo = new Video(videoObject);
    singleVideo.save((err) => console.log(err));
}

module.exports = saveInitialData = (req, res) => {
    // 15 videos from youtube, vimeo, dailymotion
    const sampleData = [
        {
            title: "What is JavaScript?",
            url: "https://www.youtube.com/watch?v=nItSSTwBvSU",
            createdBy: "Code School",
            submittedBy: "admin",
            dateAdded: "2017/11/1",
            linkType: "YouTube",
            category: "Technology",
            subcategory: "JavaScript"
        },
        {
            title: "How to: Everyday Fishtail Braid",
            url: "https://www.youtube.com/watch?v=dTrE-lrStGA",
            createdBy: "Luxy Hair",
            submittedBy: "admin",
            dateAdded: "2011/09/17",
            linkType: "YouTube",
            category: "Fashion",
            subcategory: "Hair"
        },
        {
            title: "How to Apply Eyeshadow PERFECTLY (beginner friendly hacks)",
            url: "https://www.youtube.com/watch?v=W4W-4VL1ABU",
            createdBy: "AlexandrasGirlyTalk",
            submittedBy: "admin",
            dateAdded: "2017/11/1",
            linkType: "YouTube",
            category: "Technology",
            subcategory: "Design"
        },
        {
            title: "How Javascript works",
            url: "https://www.youtube.com/watch?v=b1ieJtIx1NY",
            createdBy: "Designveloper",
            submittedBy: "admin",
            dateAdded: "2017/11/1",
            linkType: "YouTube",
            category: "Technology",
            subcategory: "JavsScript"
        },
        {
            title: "JavaScript Tutorial for Beginners - 02 - Statements",
            url: "https://www.youtube.com/watch?v=tkw8QXIcmU4",
            createdBy: "EJ Media",
            submittedBy: "admin",
            dateAdded: "2017/11/1",
            linkType: "YouTube",
            category: "Technology",
            subcategory: "JavsScript"
        },
        {
            title: "JavaScript for Developers 05 - Why learn JavaScript",
            url: "https://www.youtube.com/watch?v=vgatCIQykpU",
            createdBy: "Java Brains",
            submittedBy: "admin",
            dateAdded: "2017/11/1",
            linkType: "YouTube",
            category: "Technology",
            subcategory: "JavsScript"
        },
        {
            title: "How bitcoin and its blockchain work",
            url: "http://www.dailymotion.com/video/x2gbhdb",
            createdBy: "Financial Times",
            submittedBy: "admin",
            dateAdded: "2017/01/1",
            linkType: "DailyMotion",
            category: "Technology",
            subcategory: "Bitcoin"
        },
        {
            title: "How Tech Talent Can Improve Public Services",
            url: "http://www.dailymotion.com/video/x5c4dhp",
            createdBy: "FORA.tv",
            submittedBy: "admin",
            dateAdded: "2017/03/1",
            linkType: "DailyMotion",
            category: "Technology",
            subcategory: "Employment"
        },
        {
            title: "How robots can work alongside -- not in place of -- humans",
            url: "http://www.dailymotion.com/video/x5tyfim",
            createdBy: "CBS News",
            submittedBy: "admin",
            dateAdded: "2017/05/1",
            linkType: "DailyMotion",
            category: "Technology",
            subcategory: "Robots"
        },
        {
            title: "How to Increase Battery Life on Your Phone",
            url: "http://www.dailymotion.com/video/xpxssc",
            createdBy: "Chris Pirillo",
            submittedBy: "admin",
            dateAdded: "2011/01/1",
            linkType: "DailyMotion",
            category: "Technology",
            subcategory: "Cellphones"
        },
        {
            title: "VCRs & Computers : How to Connect a VCR to a Laptop",
            url: "http://www.dailymotion.com/video/x2s5wvg",
            createdBy: "Financial Times",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "DailyMotion",
            category: "Technology",
            subcategory: "Computers"
        },
        {
            title: "The future of self-driving cars",
            url: "https://vimeo.com/channels/mercedesbenz/143864537",
            createdBy: "Mercedes-Benz",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "cars"
        },
        {
            title: "Autopilot Full Self-Driving Hardware (Neighborhood Long)",
            url: "https://vimeo.com/192179727",
            createdBy: "Tesla, Inc",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "cars"
        },
        {
            title: "The Ethical Dilemma of Self-driving Cars (TRAILER)",
            url: "https://vimeo.com/148558378",
            createdBy: "Yukai Du",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "cars"
        },
        {
            title: "Drones can collaborate to build architectural structures",
            url: "https://vimeo.com/121153916",
            createdBy: "Dezeen",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "Drones"
        },
        {
            title: "How to Design a Particle Accelerator",
            url: "https://vimeo.com/184677009",
            createdBy: "The Royal Institution",
            submittedBy: "admin",
            dateAdded: "2016/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "Design"
        }
    ];

    for(let i = 0; i < sampleData.length; i++) {
        console.log(sampleData[i])
        saveToDatabase(sampleData[i]);
    }

    res.status(200).send('saved successfully');
};