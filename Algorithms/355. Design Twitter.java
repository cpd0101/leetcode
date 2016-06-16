public class Twitter {

    private static int order = 0;
    private Map<Integer,Set<Message>> messages;
    private Map<Integer,Set<Integer>> followers;

    /** Initialize your data structure here. */
    public Twitter() {
        messages = new HashMap<Integer,Set<Message>>();
        followers = new HashMap<Integer,Set<Integer>>();
    }
    
    /** Compose a new tweet. */
    public void postTweet(int userId, int tweetId) {
        Message m = new Message(userId,tweetId,order++);
        Set<Message> set = messages.getOrDefault(userId, new HashSet<Message>());
        set.add(m);
        messages.put(userId, set);
    }
    
    /** Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. */
    public List<Integer> getNewsFeed(int userId) {
        List<Message> sets = new ArrayList<Message>();
        Set<Message> set = messages.getOrDefault(userId, new HashSet<Message>());
        sets.addAll(set);
        Set<Integer> follow = followers.get(userId);
        if (follow != null) {
            for (int i : follow) {
                set = messages.getOrDefault(i, new HashSet<Message>());
                sets.addAll(set);
            }
        }
        List<Integer> result = new ArrayList<Integer>();
        Compare c = new Compare();
        sets.sort(c);
        for (int i = 0; i < sets.size() && i < 10; i++) {
            Message m = sets.get(i);
            result.add(m.tweetId);
        }
        return result;
    }
    
    /** Follower follows a followee. If the operation is invalid, it should be a no-op. */
    public void follow(int followerId, int followeeId) {
        if (followerId == followeeId) {
            return;
        }
        Set<Integer> set = followers.getOrDefault(followerId, new HashSet<Integer>());
        set.add(followeeId);
        followers.put(followerId, set);
    }
    
    /** Follower unfollows a followee. If the operation is invalid, it should be a no-op. */
    public void unfollow(int followerId, int followeeId) {
        if (followerId == followeeId) {
            return;
        }
        if (followers.containsKey(followerId)) {
            Set<Integer> set = followers.get(followerId);
            set.remove(followeeId);
            if (set.size() == 0) {
                followers.remove(followerId);
            } else {
                followers.put(followerId, set);
            }
        }
    }
}

class Message {
    int userId;
    int tweetId;
    int order;
    public Message (int userId, int tweetId, int order) {
        super();
        this.userId = userId;
        this.tweetId = tweetId;
        this.order = order;
    }
}

class Compare implements Comparator<Message> {
    @Override
    public int compare(Message m1, Message m2) {
        if (m1.order > m2.order) {
            return -1;
        } else if (m1.order < m2.order) {
            return 1;
        } else {
            return 0;
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * Twitter obj = new Twitter();
 * obj.postTweet(userId,tweetId);
 * List<Integer> param_2 = obj.getNewsFeed(userId);
 * obj.follow(followerId,followeeId);
 * obj.unfollow(followerId,followeeId);
 */