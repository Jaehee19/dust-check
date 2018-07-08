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
  var url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc'
  var svKey = 's%2BGym3gR24nFlAB%2F07qdVOw9pjwIDhDujKAXtaQPTp8mn8ZqUBw28L736xKBlFw9ZF4X%2Byle3G8AL32xzxuOdQ%3D%3D'
  if (req.query.pm) {
    url += '/getCtprvnMesureLIst'
    url += '?' + encodeURIComponent('ServiceKey') + '=' + svKey
    url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10')
    url += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1')
    url += '&' + encodeURIComponent('itemCode') + '=' + encodeURIComponent(req.query.pm)
    url += '&' + encodeURIComponent('dataGubun') + '=' + encodeURIComponent('HOUR')
    url += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('MONTH')

    request({
      url: url,
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
  } else if (req.query.subpm) {
    url += '/getCtprvnMesureSidoLIst'
    url += '?' + encodeURIComponent('ServiceKey') + '=' + svKey
    url += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('50')
    url += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1')
    url += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent(req.query.subpm)
    url += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('DAILY')

    request({
      url: url,
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
  }

  // res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

module.exports = router
