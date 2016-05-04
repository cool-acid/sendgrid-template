# sendgrid-template
Shorthand module for sending transactional emails using sendgrid templates.

## Usage

```js
var sendmailTemplate = require('sendgrid-template')
sendgridParams = {
  from: 'from@email.com',
  fromname: 'John Doe',
  to: 'to@email.com',
  subject: 'This is a test',
  html: '<h1>Hello World</h1>',
}
sendmailTemplate.send(
  sendgridParams,
  'YOUR_API_KEY',
  'TEMPLATE_ID',
  function(err, json) {
    console.log(json)
  }
)
```

The parameters are the same as [sendgrid](https://www.npmjs.com/package/sendgrid#available-params)