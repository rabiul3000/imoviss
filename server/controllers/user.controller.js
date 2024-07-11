import User from "../models/user.model.js";


export const getUsersForSidebar = async (req, res) => {
    try {

        const currentLoggedInUserId = await req.user._id;

        const allOtherUsers = await User.find({
            _id : { $ne : currentLoggedInUserId }
        }).select('-password');

        return res.status(200).json(allOtherUsers)


        
    } catch (error) {
        console.error( 'getUserSidebar error =>',error.message)
        return res.status(500).json(error.message)
    }
}