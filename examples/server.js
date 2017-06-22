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

app.get("/getFields/GB/GBP", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X03",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X03",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X03",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "Numeric",
        "MaximumLength": 8,
        "MinimumLength": 8,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X03",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 18,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X03",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 34,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X03",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 22,
        "MinimumLength": 22,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      },
      {
        "ConditionCode": "X03",
        "Field": "SortCode",
        "FieldName": "Sort Code",
        "FieldType": "Numeric",
        "MaximumLength": 6,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.SortCode"
      },
      {
        "ConditionCode": "X03",
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

app.get("/getFields/GB/USD", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/GB/EUR", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/GB/PLN", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/GB/NOK", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/GB/SEK", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})


app.get("/getFields/FR/GBP", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/FR/USD", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/FR/EUR", function(req, res) {
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
      },
      {
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Optional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 50,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "Field": "BeneficiaryAddress",
        "FieldName": "Beneficiary Address",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Optional",
        "Path": "request.Recipient.Address"
      },
      {
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 27,
        "MinimumLength": 27,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Iban"
      },
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

app.get("/getFields/FR/PLN", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/FR/NOK", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/FR/SEK", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})


app.get("/getFields/AU/GBP", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/AU/USD", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/AU/EUR", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/AU/PLN", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/AU/NOK", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

})

app.get("/getFields/AU/SEK", function(req, res) {
  res.send(
    [
      {
        "ConditionCode": "X07",
        "Field": "Amount",
        "FieldName": "Amount",
        "FieldType": "Numeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Amount"
      },
      {
        "ConditionCode": "X07",
        "Field": "SwiftCode",
        "FieldName": "Swift Code",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 11,
        "MinimumLength": 8,
        "Options": "Mandatory",
        "Path": "request.Recipient.Account.Swift"
      },
      {
        "ConditionCode": "X07",
        "Field": "PaymentReference",
        "FieldName": "Payment Reference",
        "FieldType": "ExtendedAlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.RecipientReference"
      },
      {
        "ConditionCode": "X07",
        "Field": "BeneficiaryName",
        "FieldName": "Beneficiary Name",
        "FieldType": "Any",
        "MaximumLength": 128,
        "MinimumLength": 0,
        "Options": "Mandatory",
        "Path": "request.Recipient.Name"
      },
      {
        "ConditionCode": "X07",
        "Field": "AccountNumber",
        "FieldName": "Account Number",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 128,
        "MinimumLength": 6,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.AccountNumber"
      },
      {
        "ConditionCode": "X07",
        "Field": "Iban",
        "FieldName": "IBAN",
        "FieldType": "AlphaNumeric",
        "MaximumLength": 31,
        "MinimumLength": 15,
        "Options": "Conditional",
        "Path": "request.Recipient.Account.Iban"
      }
    ]

  );
  res.end();

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
