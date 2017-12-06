const Video = require('../db').Video;

const saveToDatabase = function (videoObject) {
    let singleVideo = new Video(videoObject);
    singleVideo.save((err) => console.log(err));
}

module.exports = saveInitialData = (req, res) => {
    // 15 videos from youtube, vimeo, dailymotion
    const sampleData = [

        {
            title: "How to: Everyday Fishtail Braid",
            url: "https://www.youtube.com/watch?v=dTrE-lrStGA",
            description: `Check out the updated video here: https://www.youtube.com/watch?v=uq_65...

                For added VOLUME and LENGTH, I am wearing my clip-in Chocolate Brown Luxy Hair Extensions - http://www.bit.ly/LuxyHairExtensions

                Here is a link to my first video: http://www.youtube.com/watch?v=cCdXiK...

                This fishtail bread is easier and wearable and should take you only a few minutes. 

                For this tutorial I've used: 

                - Luxy Hair extensions ( chocolate brown #4, 160 g set)
                ( http://www.bit.ly/LuxyHairExtensions ) 
                - Hair brush
                - Hair elastic

                I'm wearing: 

                - H&M shirt


                COMMENT RULES: We do not tolerate any rude or irrelevant comments. If these rules are not followed, the comment will be deleted and the user may be blocked. Everyone is welcome to our channel which like our home. Here we treat you to an entertaining video that we put a lot of work and love into and we expect our guests to be polite and respectful. Wouldn't you expect the same? Spread LOVE and thank you for watching!

                FTC Disclaimer: We are co-founders of Luxy Hair and all opinions are our own. This video is not sponsored by any other third-party.`,
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
            description: `HOW I THREAD MY BROWS: https://www.youtube.com/watch?v=nNXRv...

                watch my last video here:
                DIY Blackhead Removal: https://youtu.be/T0Ef9XFNgTU

                Don't miss out, subscribe here! https://goo.gl/x5tVGj

                SOCIAL MEDIA ♡
                Instagram: http://bit.ly/1TSclUm
                Twitter: http://www.twitter.com/queenofmondays
                Facebook: Alexandra Beth https://goo.gl/dtTo71
                Snapchat: queenofmondays

                Business Inquiries: alexandrasgirlytalkbusiness@gmail.com`,
            createdBy: "AlexandrasGirlyTalk",
            submittedBy: "admin",
            dateAdded: "2017/11/1",
            linkType: "YouTube",
            category: "Fashion",
            subcategory: "Design"
        },
        {
            title: "How Javascript works",
            url: "https://www.youtube.com/watch?v=b1ieJtIx1NY",
            description: "Hello",
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
            description: `How Javascript works is a must in understanding Javascript itself. Read more articles at https://www.designveloper.com/blog`,
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
            description: `Access the full course here: https://javabrains.io/courses/corejs_...

                In this lesson, we'll look at some of the applications of JavaScript.`,
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
            description: "Sally Davies on the technology behind the digital currency",
            createdBy: "Financial Times",
            submittedBy: "admin",
            dateAdded: "2017/01/1",
            linkType: "DailyMotion",
            category: "Technology",
            subcategory: "Bitcoin"
        },

        {
            title: "How robots can work alongside -- not in place of -- humans",
            url: "http://www.dailymotion.com/video/x5tyfim",
            description: "In our ongoing series, Robotics Revolution, we explore how robots are transforming the way we live and work. An estimated 38 percent of American jobs are at high risk of automation by the early 2030s and some cities, like Las Vegas, will be hit hard. But what if machines could be a natural extension of us? Dana Jacobson reports.",
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
            description: "Hello",
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
            description: "Hello",
            createdBy: "Financial Times",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "DailyMotion",
            category: "Technology",
            subcategory: "Computers"
        },
        {
            title: "The Ethical Dilemma of Self-driving Cars (TRAILER)",
            url: "https://vimeo.com/148558378",
            description: "Hello",
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
            description: "Hello",
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
            description: "Hello",
            createdBy: "The Royal Institution",
            submittedBy: "admin",
            dateAdded: "2016/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "Design"
        },
        {
            title: "How to Apply Eyeshadow PERFECTLY (beginner friendly hacks)",
            url: "https://www.youtube.com/watch?v=W4W-4VL1ABU",
            description: "Hello",
            createdBy: "AlexandrasGirlyTalk",
            submittedBy: "admin",
            dateAdded: "2015/11/16",
            linkType: "YouTube",
            category: "Fashion",
            subcategory: "Makeup"
        },
        {
            title: "How To FRENCH BRAID for Beginners ★ DIY Step by Step Tutorial ★",
            url: "https://www.youtube.com/watch?v=TkmkNVQDUeU",
            description: `Step by Step INSTRUCTIONS:
                Pick up a section of hair from the top of your head. 
                Split it into 3 equal sections. Just like with a regular braid, cross the rightmost strand over the middle strand and then the leftmost strand over the middle strand. 

                You’re going to continue this, the only difference is that now you also have to add in sections from the sides of your head to those strands.

                There are 2 ways of adding in the sections: 

                Method 1:
                -Pick up a section of hair from the right side of head (kind of scoop it up with your thumb) and add it into the right strand. Your strand will become bigger/fuller. Now, cross this strand over the middle strand (just like with a regular braid). 

                Repeat this with the left strand: “Scoop” up a section of hair from the left side of your head. Add this section into the left strand and then cross it over the middle strand. 

                Repeat this process until you run out of hair, then continue braiding like you would with a regular braid. 

                Method 2:
                -With this method you want to start off by crossing over the rightmost strand and THEN pick up a new section of hair from the right side of your head and cross that over as well. 

                Repeat with the left side: Cross the leftmost strand over the middle strand,  THEN pick up a section of hair from the left side of you head, which you will also cross over the middle strand. 

                Just like with the other method, you want to continue this until you run out of hair, and then continue just like with a regular braid. 
                ⭐︎ 
                And that’s it! 
                As I said in the video, it does not matter what method you use, since you’re doing the exact same thing! Personally, I prefer the first method and I also find that it’s easier and quicker! :* 
                ♢-♢-♢-♢-♢`,
            createdBy: "The Hair Look",
            submittedBy: "admin",
            dateAdded: "2015/09/06",
            linkType: "YouTube",
            category: "Fashion",
            subcategory: "Hair"
        }
    ];

    for(let i = 0; i < sampleData.length; i++) {
        console.log(sampleData[i])
        saveToDatabase(sampleData[i]);
    }

    res.status(200).send('saved successfully');
};