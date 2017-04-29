var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var bodyParser = require('body-parser')

var app = new (require('express'))()
var port = 3000
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/getFields", function(req, res) {
  res.send(
    [

      {
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      }
      ,

      {
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Optional",
        "Path": "request.Recipient.Account.Swift"
      }
      ,

      {
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "Numeric",
        "MaximumLength": 9,
        "MinimumLength": 6,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.AccountNumber"
      }
      ,

      {
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 18,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      }
      ,

      {
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 32,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      }
      ,

      {
        "Field": "BsbCode",
        "FieldName": "BSB Code",
        "FieldType": "Numeric",
        "MaximumLength": 6,
        "MinimumLength": 6,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.BsbCode"
      }
      ,

      {
        "Field": "PaymentPurpose",
        "FieldName": "Payment Purpose",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Optional",
        "Path": "request.Recipient.Account.PaymentPurpose"
      }
    ]

  );
  res.end();

})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
