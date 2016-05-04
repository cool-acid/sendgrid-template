/**
 *
 * sendgrid-template
 * Shorthand module for sending transactional emails using sendgrid templates.
 *
 */

var sendgridTemplate = {}

/**
 * Sends mail
 * @param  Object   params     Sendgrid params as defined in: https://www.npmjs.com/package/sendgrid
 * @param  String   apiKey     Sendgrid api key
 * @param  String   templateId Template ID to use
 * @param  Function cb         The callback to execute
 */
var send = function(params, apiKey, templateId, cb) {
  var sendgrid = require('sendgrid')(apiKey)
  var Email = sendgrid.Email
  var email = new Email(params)
  var cb = cb || function() {}
  email.setFilters({
    'templates': {
      'settings': {
        'enable': 1,
        'template_id': templateId,
      },
    },
  })
  sendgrid.send(email, cb)
}

sendgridTemplate.send = send

module.exports = sendgridTemplate
