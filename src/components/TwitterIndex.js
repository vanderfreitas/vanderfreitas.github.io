import React from 'react';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed';

/*const TwitterIndex = () => (
  <TwitterTimelineEmbed
    sourceType="profile"
    screenName="VanderFreitas8"
    options={{height: 500}}
  />
);*/

const TwitterIndex = () => (
  <TwitterTweetEmbed
    tweetId="1718720584010301869"
  />
);

export default TwitterIndex;