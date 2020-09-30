var txt = document.getElementById("textbox");
var operatr = document.querySelector(".ops");
var rakam = document.getElementsByClassName('number');
var ops = document.querySelector('.aritmetics');
var dizisonc = [];

var br = document.createElement("br");
var divv = document.getElementById("tuslar");
var dizi2 = ["AC", "C", "sil"];
dizi2.forEach(c => {
    var btn = document.createElement("button");
    btn.setAttribute("onclick", "operator(this)");
    btn.setAttribute("class", "element")
    btn.innerHTML = `${c}`;
    divv.appendChild(btn);

});


var dizi = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ];
dizi.forEach((a, index) => {
    var btn = document.createElement("button");
    btn.setAttribute("onclick", "yaz(this)")
    btn.setAttribute("class", "rakam")
    if (index % 3 == 0) {
        var br = document.createElement("br");
        divv.append(br)
    }
    btn.innerHTML = a;
    divv.appendChild(btn);

});
var dizi3 = ["+", "-", "/", "*", "."]
dizi3.forEach((b, index) => {
    var btn = document.createElement("button");
    btn.setAttribute("onclick", "operator(this)");
    btn.setAttribute("class", "ops");
    if (index % 1 == 0) {
        var br = document.createElement("br");
        divv.append(br)
    }
    divv.append(btn)
    btn.innerHTML = `${b}`

});
var btnequal = document.createElement("button");
btnequal.setAttribute("onclick", "hesapla(this)")
btnequal.setAttribute("class", "equal")
btnequal.innerHTML = "=";
divv.appendChild(btnequal);

function yaz(sayı) {
    txt.value += sayı.innerHTML;
    var deger = sayı.innerHTML;
    /*dizisonc.push = [deger]
    document.getElementById("geçmiş").innerHTML = dizisonc*/
}

function operator(op) {
    ops = ['+', '-', '*', '/']
    txtv = txt.value;
    sondeger = txtv[txtv.length - 1]

    var isThere = ops.includes(sondeger)
    if (isThere) {
        txt.value = txt.value.substr(0, txt.value.length - 1)
        txt.value = txt.value.replace(sondeger, deger)
            //replace et son değer ile tıklanan operatoru
    }
    txt.value += op.innerHTML;
    var txtdizi = [txt.value],
        check = true,
        deger = op.innerHTML;
    if ((!txtdizi[0].includes('+') && !txtdizi[0].includes('-') && !txtdizi[0].includes('/') && !txtdizi[0].includes('*'))) {

        if ((deger.includes('/') || deger.includes('*') || deger.includes('-') || deger.includes('+')) && check) {
            txt.value[0][0] = txt.value.replace(txtdizi[txt.value.length - 1], deger)
            txt.value += "0"
            check = false;
        }
    }
    if (deger == 'sil') {
        txt.value = txtv.substr(0, txtv.length - 1)
    }
    if (deger == 'C') {
        txt.value = "";
    } else if (deger == "AC") {
        txt.value = ' ';
        document.getElementById("geçmiş").innerHTML = '';
    }
    if (txtv[0] == "." || txtdizi[0][0] == "." && check) {
        txt.value = "0."
        check = false
    }
    if (txt.value.includes(".") && check) {
        document.getElementById("dot").disabled = true
    }
    if (txtdizi[0][0] == '-') {
        txt.value = "0-"
    }
}

function hesapla(opt) {
    txt.value += opt.innerHTML;
    txtv = txt.value;
    var txtdizi = [txt.value],
        deger = opt.innerHTML;
    if (deger == '=' && txtdizi[0].includes('+')) {
        dizisonc.push(txt.value)
        txt.value = txtv.substr(0, txtv.length - 1);
        var yenideger = txt.value.split('+');
        txt.value = Number(yenideger[0]) + Number(yenideger[1]);
        dizisonc.push(txt.value + "\n");
        document.getElementById('geçmiş').innerHTML = dizisonc.join("");
    } else if (deger == '=' && txtdizi[0].includes('-')) {
        dizisonc.push(txt.value)
        txt.value = txtv.substr(0, txtv.length - 1);
        var yenideger = txt.value.split('-');
        txt.value = Number(yenideger[0]) - Number(yenideger[1]);
        dizisonc.push(txt.value + "\n");
        document.getElementById('geçmiş').innerHTML = dizisonc.join("");
    } else if (deger == '=' && txtdizi[0].includes('/')) {
        dizisonc.push(txt.value)
        txt.value = txtv.substr(0, txtv.length - 1);
        var yenideger = txt.value.split('/');
        txt.value = Number(yenideger[0]) / Number(yenideger[1]);
        dizisonc.push(txt.value + "\n");
        document.getElementById('geçmiş').innerHTML = dizisonc.join("");
    } else if (deger == '=' && txtdizi[0].includes('*')) {
        dizisonc.push(txt.value)
        txt.value = txtv.substr(0, txtv.length - 1);
        var yenideger = txt.value.split('*');
        txt.value = Number(yenideger[0]) * Number(yenideger[1]);
        dizisonc.push(txt.value + "\n");
        document.getElementById('geçmiş').innerHTML = dizisonc.join("");
    }
}