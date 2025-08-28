const express = require("express");
const History = require("../../models/history");
//router prapt karne ke liye taki jo route hm banayen unhe ye router route kar sake
const router = express.Router();

//  /user/test route banega this is actual tarika production ka

router.post('/save-history', async (req, res) => {
    // You'll need to ensure this route is protected by Auth0 middleware
    // const userId = req.user.sub; // Get user ID from Auth0 context
    // const { code } = req.body;

    const { userId,code,review } = req.body;

    try {
        // Your AI code review logic goes here to get the 'review' result
        // const aiReview = "Your AI review result here";

        // Create and save a new history entry
        const newHistoryEntry = new History({
            userId: userId,
            code: code,
            review: review
        });

        await newHistoryEntry.save();
        res.json({ review: review, message: 'Review saved to history.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving history.' });
    }
});

// Get full history for a user
router.get('/show-history', async (req, res) => {
    // const userId = req.user.sub; // Get user ID from Auth0 context

    try {
        // const history = await History.find({ userId: userId }).sort({ timestamp: -1 });
        const history = await History.find();
        res.json(history);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching history.' });
    }
});





module.exports = router