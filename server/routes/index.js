var express = require('express')
var path = require('path')
var router = express.Router()
var request = require('request')
var xml2js = require('xml2js')
var parser = new xml2js.Parser()

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

router.get('/dust', function (req, res, next) {
  console.log(req.query.pm)
  var url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst'
  var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + 's%2BGym3gR24nFlAB%2F07qdVOw9pjwIDhDujKAXtaQPTp8mn8ZqUBw28L736xKBlFw9ZF4X%2Byle3G8AL32xzxuOdQ%3D%3D'
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10')
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1')
  queryParams += '&' + encodeURIComponent('itemCode') + '=' + encodeURIComponent(req.query.pm)
  queryParams += '&' + encodeURIComponent('dataGubun') + '=' + encodeURIComponent('HOUR')
  queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('MONTH')

  request({
    url: url + queryParams,
    method: 'GET'
  }, function (err, respond, body) {
    if (err) {
      console.log(err)
    } else {
      parser.parseString(body, function (err, result) {
        if (err) {
          console.log(err)
        } else {
          res.json(result)
        }
      })
    }
  })

  // res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

module.exports = router
