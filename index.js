const express = require('express');
const axios = require('axios');
const { App } = require('@slack/bolt')

const app = express();

app.use(express.urlencoded({extended: false}));

 //  app.get('/', (req,res) => {
 //       res.send("is is working")
 //   })

app.post('/', (req,res) => {
    res.send('in the post');
    axios.post('https://hooks.slack.com/services/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', {text: 'test'});
})

app.listen(3000, () => {
    console.log('listening on port 3000!')
})

const slack_app = new App({
  token: 'xoxb-4162327395364-4159893548226-Aao3eLRnBtK3iVR2jfPPFteT',
  signingSecret: 'b8660aa835c195abe26dc289ca9c9832'
});

(async () => {
  const result = await slack_app.client.users.profile.get({
    token: 'xoxb-4162327395364-4159893548226-Aao3eLRnBtK3iVR2jfPPFteT',
    include_labels: true,
    user: 'U0452F6RFUZ'
  });
  console.log(result)
})();