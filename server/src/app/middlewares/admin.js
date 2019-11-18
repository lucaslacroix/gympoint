import User from '../models/User';

export default async (req, res, next) => {
    const isAdmin = await User.findByPk(req.userId);

    if (!isAdmin) {
        return res.status(401).json({
            error: 'You must be logged in as admin to access this feature.',
        });
    }

    return next();
};
