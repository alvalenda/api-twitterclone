import { Tweet } from './Tweet.js';

export const createTweetService = async (userId, message) => {
  const tweet = new Tweet({
    user: userId,
    message: message,
    likes: [],
    comments: [],
    retweets: [],
  });
  const newTweet = await Tweet.create(tweet);
  return newTweet;
};

export const findAllTweetsService = async () => {
  const allTweets = await Tweet.find({})
    .sort({ createdAt: -1 })
    .populate('user');
  return allTweets;
};

export const searchTweetService = async message => {
  const result = Tweet.find({
    message: { $regex: `${message || ''}`, $options: 'i' },
  })
    .sort({ createdAt: -1 })
    .populate('user');
  return result;
};
