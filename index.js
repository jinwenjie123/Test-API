const express = require('express');
const axios = require('axios');
const { App } = require('@slack/bolt')

const app = express();

app.use(express.urlencoded({extended: false}));

  app.get('/', (req,res) => {
        res.send("is is working")
    })


app.listen(3000, () => {
    console.log('listening on port 3000!')
})

const slack_app = new App({
    token: 'xoxb-4162327395364-4157097373973-DHbvSyFLS1MH3JN6ByOlDnaw',
    signingSecret: 'e81f5dd528d4ea4466e51d48fc45918d'
  });

  (async () => {
    const result = await slack_app.client.users.list({
      token: 'xoxb-4162327395364-4157097373973-DHbvSyFLS1MH3JN6ByOlDnaw'
    });
    console.log(result)
  })();
  
