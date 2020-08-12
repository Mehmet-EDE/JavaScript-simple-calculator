var rakam = document.querySelectorAll("button"),
    rakamlar = rakam.length,
    txt = document.querySelector("#textbox"),
    geçmiş = document.querySelector("#geçmiş"),
    iter = 0;

for (iter = 0; iter < rakamlar; iter++) {
    rakam[iter].onclick = hesapla;
}

function hesapla() {
    var deger = this.innerHTML;

    if (deger == "=") {
        try {
            txt.value = eval(txt.value);
            geçmiş.value = txt.value;
        } catch (e) {
            txt.value = 0;
        }
        return;
    }

    txt.value += deger;
    if (deger == "C") {
        txt.value = " ";

    }
    if (deger == "CE") {
        txt.value = " ";
        geçmiş.value = " ";

    }
}