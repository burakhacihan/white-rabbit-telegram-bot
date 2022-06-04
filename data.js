var http = require('http');
var {Telegraf} = require('telegraf');

var bot = new Telegraf('YOUR_TOKEN_HERE');

var firstValue = '';

setInterval(() => {
    var secondValue = firstValue;
    firstValue = '';
    http.get('http://kiyiturk.radioca.st/stats?sid=1', function(r){
        if (r.statusCode == 200){
            r.on('data', function(d) {
                firstValue += d;
            });
            r.on('end', function(){
                firstValue = parseText(firstValue, '<SONGTITLE>');
                if(firstValue != secondValue && secondValue != undefined){
                    var text = `Kıyı Türkçe'de Çalan Son Parça: <b>${firstValue}</b>`;
                    bot.telegram.sendMessage('@your_channel_name', text, { parse_mode: 'HTML' });
                }
            })
        }
    });
}, 90000);

function parseText(text, selectItem){
    var endTag = selectItem.replace('<', '</');
    var startIndex = text.indexOf(selectItem) + selectItem.length;
    var endIndex = text.indexOf(endTag);
    return text.substring(startIndex, endIndex);
}

