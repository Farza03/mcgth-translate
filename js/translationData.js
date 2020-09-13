class GameCity {
}
const cities = new Map();
function city(cn, cne/*, cnl*/) {
    var cityInstance = new GameCity();
    cityInstance.cityName = cn;
    cityInstance.cityNameEng = cne;
//    cityInstance.cityNameLoc = cnl;
    cities.set(cne, cityInstance);
}

keywords = new Map();
function put(key, value) {
    keywords.set(key, value);
}
function value(key) {
    return keywords.get(key);
}
var useOriginalCityName = false;
class Translator {
    translate(original) {
        var text0 = original;
        text0 = original;
        for (let v of keywords.keys()) {
            while (text0.includes(v))
                text0 = text0.replace(v, keywords.get(v));
        }
        a: for (let v of cities.keys()) {
            while (text0.includes(v) && v !== cities.get(v)) {
                console.log(useOriginalCityName);
                var newl = "";
                if (useOriginalCityName) {
                    newl = text0.replace(v, cities.get(v).cityName);
                } else {
                    newl = text0.replace(v, cities.get(v).cityNameEng);
                }
                if (text0 === newl) continue a;
                text0 = newl;
            }
        }
        return text0;
    }
    constructor() {
        //City Names
        city("Aalborg", "Aalborg")
        city("Aberdeen", "Aberdeen")
        city("Ajaccio", "Ajaccio")
        city("Saint-Alban-du-Rhône", "Saint-Alban-du-Rhone")
        city("St.Alban", "St.Alban")
        city("Amsterdam", "Amsterdam")
        city("Bacău", "Bacau")
        city("Bastia", "Bastia")
        city("Bergen", "Bergen")
        city("Berlin", "Berlin")
        city("Bern", "Bern")
        city("Białystok", "Bialystok")
        city("Birmingham", "Birmingham")
        city("Bonifacio", "Bonifacio")
        city("Bordeaux", "Bordeaux")
        city("Bourges", "Bourges")
        city("Brașov", "Brasov")
        city("Bratislava", "Bratislava")
        city("Bremen", "Bremen")
        city("Brest", "Brest")
        city("Brno", "Brno")
        city("Brussel", "Brussels")
        city("Brussel", "Brussel")
        city("București", "Bucharest")
        city("Budapest", "Budapest")
        city("Бургас", "Burgas")
        city("Banská Bystrica", "Banska Bystrica")
        city("B.Bystrica", "B.Bystrica")
        city("Calais", "Calais")
        city("Călărași", "Calarasi")
        city("Calvi", "Calvi")
        city("Cambridge", "Cambridge")
        city("Cardiff", "Cardiff")
        city("Carlisle", "Carlisle")
        city("Cernavodă", "Cernavoda")
        city("Civaux", "Civaux")
        city("Clermont-Ferrand", "Clermont-Ferrand")
        city("Clermont", "Clermont")
        city("Cluj-Napoca", "Cluj-Napoca")
        city("Constanța", "Constanta")
        city("Craiova", "Craiova")
        city("Daugavpils", "Daugavpils")
        city("Debrecen", "Debrecen")
        city("Dijon", "Dijon")
        city("Dortmund", "Dortmund")
        city("Dover", "Dover")
        city("Dresden", "Dresden")
        city("Duisburg", "Duisburg")
        city("Düsseldorf", "Dusseldorf")
        city("Edinburgh", "Edinburgh")
        city("Edirne", "Edirne")
        city("Erfurt", "Erfurt")
        city("Esbjerg", "Esbjerg")
        city("Felixstowe", "Felixstowe")
        city("Frankfurt am Main", "Frankfurt am Main")
        city("Frankfurt", "Frankfurt")
        city("Frederikshavn", "Frederikshavn")
        city("Galați", "Galati")
        city("Gdańsk", "Gdansk")
        city("Gdynia", "Gdynia")
        city("Gedser", "Gedser")
        city("Genève", "Geneva")
        city("Genova", "Genoa")
        city("Glasgow", "Glasgow")
        city("Golfech", "Golfech")
        city("Göteborg", "Gothenburg")
        city("Graz", "Graz", "그라츠")
        city("Grimsby", "Grimsby")
        city("Groningen", "Groningen")
        city("Hamburg", "Hamburg")
        city("Hannover", "Hanover")
        city("Harwich", "Harwich")
        city("Helsingborg", "Helsingborg")
        city("Helsinki", "Helsinki")
        city("Hirtshals", "Hirtshals")
        city("Hull", "Hull")
        city("Hunedoara", "Hunedoara")
        city("Iași", "Iasi")
        city("IJmuiden", "IJmuiden")
        city("Innsbruck", "Innsbruck")
        city("İstanbul", "Istanbul")
        city("Jönköping", "Jonkoping")
        city("Калининград", "Kaliningrad")
        city("Kalmar", "Kalmar")
        city("Kapellskär", "Kapellskar")
        city("Карлово", "Karlovo")
        city("Karlskrona", "Karlskrona")
        city("Kassel", "Kassel")
        city("Katowice", "Katowice")
        city("Kaunas", "Kaunas")
        city("Kiel", "Kiel")
        city("Klagenfurt am Wörthersee", "Klagenfurt am Worthersee")
        city("Klagenfurt", "Klagenfurt")
        city("Klaipėda", "Klaipeda")
        city("København", "Copenhagen")
        city("Köln", "Cologne")
        city("Košice", "Kosice")
        city("Kotka", "Kotka")
        city("Kouvola", "Kouvola")
        city("Козлодуй", "Kozloduy")
        city("Kraków", "Krakow")
        city("Kristiansand", "Kristiansand")
        city("Kunda", "Kunda")
        city("Lahti", "Lahti")
        city("La Rochelle", "La Rochelle")
        city("Saint-Laurent", "Saint-Laurent")
        city("St.Laurent", "St.Laurent")
        city("Le Havre", "Le Havre")
        city("Leipzig", "Leipzig")
        city("Le Mans", "Le Mans")
        city("Liège", "Liege")
        city("Liepāja", "Liepaja")
        city("L'Île-Rousse", "L'Ile-Rousse")
        city("Lille", "Lille")
        city("Limoges", "Limoges")
        city("Linköping", "Linkoping")
        city("Linz", "Linz")
        city("Liverpool", "Liverpool")
        city("Łódź", "Lodz")
        city("London", "London")
        city("Loviisa", "Loviisa")
        city("Lublin", "Lublin")
        city("Луга", "Luga")
        city("Luxembourg", "Luxembourg")
        city("Lyon", "Lyon")
        city("Magdeburg", "Magdeburg")
        city("Malmö", "Malmo")
        city("Manchester", "Manchester")
        city("Mangalia", "Mangalia")
        city("Mannheim", "Mannheim")
        city("Marseille", "Marseille")
        city("Mažeikiai", "Mazeikiai")
        city("Metz", "Metz")
        city("Milano", "Milan")
        city("Montpellier", "Montpellier")
        city("München", "Munich")
        city("Naantali", "Naantali")
        city("Nantes", "Nantes")
        city("Narva", "Narva")
        city("Newcastle-upon-Tyne", "Newcastle upon Tyne")
        city("Newcastle", "Newcastle")
        city("Nice", "Nice")
        city("Nürnberg", "Nuremberg")
        city("Nynäshamn", "Nynashamn")
        city("Odense", "Odense")
        city("Olkiluoto", "Olkiluoto")
        city("Olsztyn", "Olsztyn")
        city("Örebro", "Orebro")
        city("Oslo", "Oslo")
        city("Osnabrück", "Osnabruck")
        city("Ostrava", "Ostrava")
        city("Paldiski", "Paldiski")
        city("Paluel", "Paluel")
        city("Panevėžys", "Panevezys")
        city("Paris", "Paris")
        city("Pärnu", "Parnu")
        city("Pécs", "Pecs")
        city("Перник", "Pernik")
        city("Санкт-Петербург", "Saint Petersburg")
        city("С.Петербург", "St.Petersburg")
        city("Пирдоп", "Pirdop")
        city("Pitești", "Pitesti")
        city("Плевен", "Pleven")
        city("Пловдив", "Plovdiv")
        city("Plymouth", "Plymouth")
        city("Pori", "Pori")
        city("Porto-Vecchio", "Porto-Vecchio")
        city("Poznań", "Poznan")
        city("Praha", "Prague")
        city("Псков", "Pskov")
        city("Reims", "Reims")
        city("Rennes", "Rennes")
        city("Reșița", "Resita")
        city("Rēzekne", "Rezekne")
        city("Rīga", "Riga")
        city("Roscoff", "Roscoff")
        city("Rostock", "Rostock")
        city("Rotterdam", "Rotterdam")
        city("Русе", "Ruse")
        city("Salzburg", "Salzburg")
        city("Sheffield", "Sheffield")
        city("Šiauliai", "Siauliai")
        city("Södertälje", "Sodertalje")
        city("Со́фия", "Sofia")
        city("Сосновый Бор", "Sosnovy Bor")
        city("Southampton", "Southampton")
        city("Stavanger", "Stavanger")
        city("Stockholm", "Stockholm")
        city("Strasbourg", "Strasbourg")
        city("Stuttgart", "Stuttgart")
        city("Swansea", "Swansea")
        city("Szczecin", "Szczecin")
        city("Szeged", "Szeged")
        city("Tallinn", "Tallinn")
        city("Tampere", "Tampere")
        city("Târgu Mureș", "Targu Mures")
        city("Tartu", "Tartu")
        city("Tekirdağ", "Tekirdag")
        city("Timișoara", "Timisoara")
        city("Torino", "Turin")
        city("Toulouse", "Toulouse")
        city("Travemünde", "Travemunde")
        city("Trelleborg", "Trelleborg")
        city("Turku", "Turku")
        city("Uppsala", "Uppsala")
        city("Utena", "Utena")
        city("Valmiera", "Valmiera")
        city("Варна", "Varna")
        city("Västerås", "Vasteras")
        city("Växjö", "Vaxjo")
        city("Велико Търново", "Veliko Tarnovo")
        city("Venezia", "Venice")
        city("Ventspils", "Ventspils")
        city("Verona", "Verona")
        city("Vilnius", "Vilnius")
        city("Выборг", "Vyborg")
        city("Warszawa", "Warsaw")
        city("Wien", "Vienna")
        city("Wrocław", "Wroclaw")
        city("Zürich", "Zurich")

        //Company Names
        put("Quarry", "เหมือง");
        put("Service", "ร้านซ่อมรถ");
        put("Car Parking", "ที่จอดรถ");
        put("Car parking", "ที่จอดรถ");
//        put("LKW", "LKS");
//        put("Strokes", "발작");
        put("Port calais", "ท่าเรือ Calais");
        put("Port Calais", "ท่าเรือ Calais");
        put("Port dover", "ท่าเรือ Dover");
        put("Port Dover", "ท่าเรือ Dover");
        put("(Hotel)", "(โรงแรม)");
        put("(Port)", "(ท่าเรือ)");

        //Month Names
        put("January", "มกราคม");
        put("February", "กุมภาพันธ์");
        put("March", "มีนาคม");
        put("April", "เมษายน");
        put("May", "พฤษภาคม");
        put("June", "มิถุนายน");
        put("July", "กรกฎาคม");
        put("August", "สิงหาคม");
        put("September", "กันยายน");
        put("October", "ตุลาคม");
        put("November", "พฤศจิกายน");
        put("December", "ธันวาคม");

        //Color Names
        put("Blue", "น้ำเงิน");
        put("Red", "แดง");
        put("Green", "เขียว");
        put("Orange", "ส้ม");
        put("White", "ขาว");
        put("Yellow", "เหลือง");
        put("Gray", "เทา");
        put("Purple", "ม่วง");
        put("Black", "ดำ");

        //Other Texts
        put("(Gas Station)", "(ปั้มน้ำมัน)");
//        put("Point 1 and 3", "1, 3 포인트");
        put("Convoy Leader:", "ผู้คุมนำขบวน:");
        put("Convoy Tail:", "ผู้คุมท้ายขบวน:");

        // Sentences
        put("Rules", "กฎ");
        put("Join Discord to talk", "เข้ามาพูดคุยใน Discord แห่งนี้");
        put("Listen to instructions of ETS2MCG Staff", "ปฏิบัติตามคำแนะนำของเจ้าหน้าที่");
        put("Please take truck, trailer and skin like the detailed description above or photos below and follow our parking slot", "ใช้รถ, พ่วงและลายตามที่เรากำหนดในรูปด้านล่าง");
        put("Please arrive at the starting point before 10 minutes", "มาถึงก่อนเวลาที่กำหนดประมาณ 10 นาที");
        put("When arrived finishing point, don't out", "เมื่อถึงจุดหมายแล้ว อย่าเพิ่งออกจากเกม");
        put("Wait for people to come and take photos", "รอให้ผู้ร่วมกิจกรรมทั้งหมดมาถึงก่อนเพื่อทำการถ่ายรูป");
    }
}

const artChars = "▀█";
const translator = new Translator();

function isArtLine(text) {
    var strText = "";
    strText = text;
    for (let i = 0; i < strText.length; i++) {
        if (artChars.includes(strText.charAt(i))) {
            return true;
        }
    }
    return false;
}
$(document).ready(() => {
    var resultDiv = $("#result");
    var files = [];
    $(".emojiIncluded").each((_, elem) => {
        twemoji.parse(elem), {
            folder: 'svg',
            ext: 'svg'
        };
    });

    $("#copy").click(() => {
        const el = document.createElement('textarea');
        el.value = $("#result").val().trim();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    })

    /*
    $("#isConvoy").click(() => {
        var d = $("#isConvoy");
        if (d.text() === "CONVOY") {
            d.text("โพสต์ไปที่ช่อง Convoy")
            d.css("background-color", "PaleGreen");
        } else {
            d.text("อัปโหลดไปที่ช่อง Convoy")
            d.css("background-color", "tomato");
        }
    })

    $("#addUrlBtn").click(() => {
        let text = $("#addUrl").val();
        $("#addUrl").val("");
        if (text.trim().length == 0) {
            alert("ไม่มี URL");
            return;
        }
        let arr = text.trim().split("\n");
        for (let i = 0; i < arr.length; i++) {
            files.push(arr[i]);
        }
        $("#urlCount").text("จำนวน URL ของรูปภาพ: " + files.length);
    })

    $("#clearUrlBtn").click(() => {
        files = [];
        $("#urlCount").text("จำนวน URL ของรูปภาพ: " + files.length);
    })

    $("#postTrip").click(() => {
        $("#postTrip").text("กำลังโพสต์ ...");
        var files0 = files.slice(0);
        var webhook = $("#token").val();
        if (webhook.length < 20) {
            alert("Discord Webhook URL ไม่ถูกต้อง");
            $("#postTrip").text("โพสต์!");
            return;
        }
        var imageSizeOnce = 20;
        function getMessageContent(affectList, isFirst) {
            return JSON.stringify({
                content: JSON.stringify({
                    text: isFirst ? $("#result").val() : "",
                    convoy: $("#isConvoy").text() === "컨보이 채널에 올리기",
                    images: affectList ? files0.splice(0, Math.min(imageSizeOnce, files0.length)) : files0.slice(0, Math.min(imageSizeOnce, files0.length))
                })
            });
        }
        while (getMessageContent(false, true).length >= 2000) {
            imageSizeOnce--;
            if (imageSizeOnce == 1) {
                alert("URL ยาวเกินไป");
                $("#postTrip").text("게시!");
                return;
            }
        }
        $.ajax({
            url: webhook,
            method: "POST",
            async: true,
            cache: false,
            data: getMessageContent(true, true),
            async: false,
            contentType: "application/json",
            success: () => {
            },
            error: () => {
                alert("Error!");
            }
        })
        function ddd() {
            if (files0.length <= 0) {
                alert("Finished");
                $("#postTrip").text("게시!");
                return;
            }
            imageSizeOnce = 20;
            while (getMessageContent(false, false).length >= 2000) {
                imageSizeOnce--;
                if (imageSizeOnce == 1) {
                    alert("URL ยาวเกินไป");
                    $("#postTrip").text("게시!");
                    return;
                }
            }

            $.ajax({
                url: webhook,
                method: "POST",
                async: true,
                cache: false,
                data: getMessageContent(true, false),
                async: false,
                contentType: "application/json",
                success: () => {

                },
                error: () => {
                    alert("Error!");
                }
            })
            setTimeout(ddd, 1500);
        }
        ddd();
    })
    */

    $("#process").click(() => {
        useOriginalCityName = $("#useKoreanText").prop("checked") == false;
        $("#onFinish").show();

        var text = "";
        text = $("#input").val().trim();
        $("#result").val("");

        var buffer = "";

        function appendText() {
            console.log(buffer);
            resultDiv.val(resultDiv.val() + buffer.trim() + "\n");
            buffer = "";
        }

        var lines = text.split('\n');
        var timeSkip = false;
        for (let i = 0; i < lines.length; i++) {
            let curLine = lines[i];
            curLine = curLine.trim();
            if (curLine.startsWith("> "))
                curLine = curLine.substring(2);
            curLine = curLine.trim();

            if (timeSkip && curLine.startsWith("- ")) continue;
            else if (timeSkip) timeSkip = false;

            if (isArtLine(curLine)) {
                buffer = curLine;
                appendText();
                continue;
            } else if (curLine.includes("Notified") || curLine.includes("Members") || curLine.includes("@everyone") || curLine.includes("<@&")) {
                buffer = "<@&745328892796993568>";
                appendText();
                continue;
            } else if (curLine.match(/.*★\s*ETS2MCG [tT][hH][eE] [tT][rR][iI][pP] [oO][nN] (.*[dD][aA][yY])\s*★.*/)) {
                let dayName = curLine.match(/.*★\s*ETS2MCG [tT][hH][eE] [tT][rR][iI][pP] [oO][nN] (.*[dD][aA][yY])\s*★.*/)[1].toLowerCase();
                if (dayName === "sunday") {
                    dayName = "อาทิตย์";
                } else if (dayName === "monday") {
                    dayName = "จันทร์";
                } else if (dayName === "tuesday") {
                    dayName = "อังคาร";
                } else if (dayName === "wednesday") {
                    dayName = "พุธ";
                } else if (dayName === "thursday") {
                    dayName = "พฤหัสบดี";
                } else if (dayName === "friday") {
                    dayName = "ศุกร์";
                } else if (dayName === "saturday") {
                    dayName = "เสาร์";
                }
                buffer = "**★ ETS2MCG ทริปประจำวัน" + dayName + " ★**";
                appendText();
                continue;
            } else if (curLine.includes("ETS2MCG Team Convoy")) {
                buffer = "**★ ETS2MCG คอนวอยประจำสัปดาห์ ★**";
                appendText();
                continue;
            } else if (curLine.includes("★") && (curLine.includes("Convoy") || curLine.includes("DLC") || curLine.includes("Trip"))) {
                if (!curLine.includes("**")) {
                    curLine = "**" + curLine + "**";
                }
                buffer = curLine;
                appendText();
                continue;
            }

            if (curLine.startsWith("Date:")) {
                let date = curLine.substring(5).trim();
                let dates = date.split(" ");
                if (dates.length == 3) {
                    let year = dates[2];
                    let month = dates[1];
                    let day = dates[0];

                    year = parseInt(year) + 543;

                    if (day.length == 1) day = "0" + day;
                    curLine = "วันที่: " + day + " " + month + " " + year;
                } else {
                    curLine = "วันที่: " + date;
                }
            } else if (curLine.startsWith("Route:")) {
                curLine = "เส้นทาง:" + curLine.substring(6);
            } else if (curLine.startsWith("Start:")) {
                curLine = "จุดเริ่มต้น:" + curLine.substring(6);
            } else if (curLine.startsWith("Stop:")) {
                curLine = "จุดพัก:" + curLine.substring(5);
            } else if (curLine.startsWith("Finish:")) {
                curLine = "จุดสิ้นสุด:" + curLine.substring(7);
            } else if (curLine.startsWith("Truck:")) {
                curLine = "รถบรรทุก:" + curLine.substring(6);
            } else if (curLine.startsWith("Trailer:")) {
                let data = curLine.substring(8);
                if (data.includes("Own Trailer")) {
                    data = " พ่วงส่วนตัว";
                }
                curLine = "พ่วง:" + data;
            } else if (curLine.startsWith("Skin:")) {
                curLine = "สี:" + curLine.substring(5);
            } else if (curLine.startsWith("Server:")) {
                curLine = "เซิร์ฟเวอร์:" + curLine.substring(7);
            } else if (curLine.startsWith("Chassis:")) {
                curLine = "แชสซี:" + curLine.substring(8);
            } else if (curLine.startsWith("Classic:")) {
                curLine = "แชสซี:" + curLine.substring(8);
            } else if (curLine.startsWith("Time:")) {
                timeSkip = true;
                curLine = "เวลา: 20:00 น.";
                buffer = curLine;
                appendText();
                continue;
            } else if (curLine.startsWith("- Truck: ")) {
                curLine = "- รถบรรทุก: " + curLine.substring(9);
            } else if (curLine.startsWith("- Trailer: ")) {
                curLine = "- พ่วง: " + curLine.substring(11);
            } else if (curLine.includes("Truck") && curLine.includes("Trailer") && curLine.includes("Skin") && curLine.includes("Free")) {
                curLine = "รถบรรทุก, พ่วง, สี: อิสระ";
            }

            curLine = translator.translate(curLine);
            buffer = curLine;
            appendText();
        }
        if (buffer.length !== 0) append();
        $("#result").val($("#result").val().trim());
    })
})