const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser).put(updateUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;