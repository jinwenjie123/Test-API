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
  token: 'xoxb-4162327395364-4159893548226-KKrES1zK4ZBeVXiepGk1juVw',
  signingSecret: 'b8660aa835c195abe26dc289ca9c9832'
});

(async () => {
  const list = await slack_app.client.users.list({
    token: 'xoxb-4162327395364-4159893548226-KKrES1zK4ZBeVXiepGk1juVw'
  });
 // console.log(list);
  for (let i = 0; i < list.members.length; i++) {
    if(list.members[i].name !== "slackbot" && list.members[i].name !== "testapi" && list.members[i].name !== "test2"){
        console.log("id: " + list.members[i].id);
        console.log("name: " + list.members[i].real_name);
        console.log("          ");
    }
  }

})();

