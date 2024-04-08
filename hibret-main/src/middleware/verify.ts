import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
    try {
        // Extract user collection and token from the request path
        // const userCollection = req.params.userCollection;
        const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null;

        if (!token) {
            return res.status(401).json({ message: "Authorization token is missing." });
        }

        // Verify the token using Payload CMS API (replace with your logic)
        const verifiedUser = jwt.verify(token, process.env.PAYLOAD_SECRET);

        if (verifiedUser) {
            // User is verified, attach user information to request object (optional)
            req.user = verifiedUser;
            next(); // Allow subsequent middleware or route handler
        } else {
            res.status(401).json({ message: "Invalid verification token." });
        }
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(500).json({ message: "An unexpected error occurred." });
    }
};

export default verifyToken;
