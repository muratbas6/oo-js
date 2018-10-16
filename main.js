function User(username, old) {
    this.tweets = [];
    this.numberofTweets = this.tweets.length;
    this.username = username;
    this.old = old;
    this.tweet = function tweet(tweet) {
        this.tweets.push(new Tweet(tweet));

    }

}


function Tweet(tweet) {
    this.like = 0;
    this.tweet = tweet;
    this.date = Date.now();
    this.length = tweet.length;
    this.likeTweet = function likeTweet() {
        this.like += 1;
    }
}