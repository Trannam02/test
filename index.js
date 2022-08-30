var request = require('request');
var cp = require('child_process');
function getTimeBetween(hour, min, sec){
  let date = new Date();
  let date2 = new Date(2022,07,30,hour,min,sec,00);
  let date3 = new Date(date2.getTime() - date.getTime());
  let arr = [date3.getFullYear()-1970,date3.getMonth(), date3.getDate()-1,date3.getHours()-7, date3.getMinutes(), date3.getSeconds()];
  return arr;
}

listMessage = [
  {
    mess: "lần này mới ngon nài kkkk ~",
    time: [11,42,0],
    targetId: "100013739145965"
  },
  
  {
    mess: "ko gion dau",
    time: [11,49,0],
    targetId: "100013739145965"
  }
];

function send(userId, mess){
var headers = {
    'authority': 'm.facebook.com',
    'accept': '*/*',
    'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
    'content-type': 'application/x-www-form-urlencoded',
    'cookie': 'sb=7KnuYYKiVhrCDNWvnTNCGpfj; datr=ijwKYuyC-6SUS8Zb1AKOd59v; c_user=100041633173329; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1661823174837%2C%22v%22%3A1%7D; m_pixel_ratio=1; xs=28%3AGTlhXGUSWgfP6Q%3A2%3A1658465488%3A-1%3A6307%3A%3AAcXQVTB6wqX9JLLp2b81rsXT8xS8d-phRlGAudqM8cQ; fr=0u2gLCFCwVjfe3DQf.AWVgf0tg62rT0KRjIyyiirOjia8.BjDXvg.uK.AAA.0.0.BjDXvg.AWXudvFggqc; wd=1366x695; x-referer=eyJyIjoiL21lc3NhZ2VzL3JlYWQvP3RpZD1jaWQuYy4xMDAwMTM3MzkxNDU5NjUlM0ExMDAwNDE2MzMxNzMzMjkmZW50cnlwb2ludD1qZXdlbCZzdXJmYWNlX2hpZXJhcmNoeT11bmtub3duIiwiaCI6Ii9tZXNzYWdlcy9yZWFkLz90aWQ9Y2lkLmMuMTAwMDEzNzM5MTQ1OTY1JTNBMTAwMDQxNjMzMTczMzI5JmVudHJ5cG9pbnQ9amV3ZWwmc3VyZmFjZV9oaWVyYXJjaHk9dW5rbm93biIsInMiOiJtIn0%3D',
    'origin': 'https://m.facebook.com',
    'referer': `https://m.facebook.com/messages/read/?tid=cid.c.${userId}%3A100041633173329&entrypoint=jewel&surface_hierarchy=unknown`,
    'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'x-fb-lsd': '7ltHok2-DemQ2Le6CnfzWa',
    'x-msgr-region': 'ATN',
    'x-requested-with': 'XMLHttpRequest',
    'x-response-format': 'JSONStream'
};

var dataString = `tids=cid.c.${userId}%3A100041633173329&wwwupp=C3&ids%5B${userId}%5D=${userId}&body=${mess}&waterfall_source=message&action_time=1661828141463&fb_dtsg=NAcNE37f2Ch72BQFnvFWTywjyCng2qncKTAKFUDf6ETpzFZMx0is33Q%3A28%3A1658465488&jazoest=25358&lsd=7ltHok2-DemQ2Le6CnfzWa&__dyn=1KQEGiFoO13DzUjxC2GfDg9ppkdxu6Erz8doqyonw_iwNwTwKwSwMxWUW16wZxm6Uhwyw42wUx65of82iwxw9e3C3y1gCwSxu0om782Cwro7ifw5lwDKdwGgaE108qwk888C0NE2oCwSwaOfxW0D86i0DU985G0zE5W0HUvwww4cwJwSyES0gq0Lo4K2e1FwLw&__csr=&__req=v&__a=AYnyxuu6pQFIrz9a0whLNi2VwnJIlaUcUG8jQg9VDngbbWu9ECyRHmiY1HXoOtm50M1bskO3g-wLdgTl3wSaFHYhj4EXIH6LCsJa4OUrFj4Zhw&__user=100041633173329`;

var options = {
    url: 'https://m.facebook.com/messages/send/?icm=1&entrypoint=jewel&surface_hierarchy=unknown&refid=12',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("Sended ! ");
    }
}

request(options, callback);
}

function run(){
  
  setInterval(()=>{
    console.clear();
    for(let i in listMessage){
      let dentaTime = getTimeBetween(listMessage[i].time[0],listMessage[i].time[1],listMessage[i].time[2]);
      if(dentaTime[2] == 0 & dentaTime[3] == 0 & dentaTime[4] == 0 & dentaTime[5] == 0){
        console.log("if true ----------");
        send(listMessage[i].targetId, listMessage[i].mess);
      }else{
        console.log(`[${parseInt(i) + 1}]--> Remaining ${dentaTime[3]}h${dentaTime[4]}m${dentaTime[5]}s | ${listMessage[i].mess}`)
      }
    };
  }, 1000)
}

run();
