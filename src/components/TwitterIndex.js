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
    tweetId="1487015998897246208"
  />
);

export default TwitterIndex;