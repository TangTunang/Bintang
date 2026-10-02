let nama;
let jumlah;
let pilihan = [];

function buatInput() {
    nama = document.getElementById("nama").value.trim();
    jumlah = Number(document.getElementById("jumlah").value);

    if (nama === "") {
        alert("Nama harus diisi!");
        document.getElementById("nama").focus();
        return;
    }

    if (isNaN(jumlah) || jumlah < 1 || jumlah > 10) {
        alert("Jumlah pilihan harus antara 1 sampai 10!");
        document.getElementById("jumlah").focus();
        return;
    }

    let form = document.getElementById("pilihanForm");

    form.innerHTML = "";

    for (let i = 0; i < jumlah; i++) {
        form.innerHTML += `
            <label>Pilihan ${i + 1} :</label>
            <input type="text" id="pilihan${i}">
            <br>
        `;
    }

    form.innerHTML += `<button onclick="buatPilihan()">OK</button>`;
}

function buatPilihan() {
    pilihan = [];

    for (let i = 0; i < jumlah; i++) {
        let teks = document.getElementById("pilihan" + i).value.trim();

        if (teks === "") {
            alert("Pilihan " + (i + 1) + " harus diisi!");
            document.getElementById("pilihan" + i).focus();
            return;
        }

        pilihan.push(teks);
    }

    let output = `
        <hr>
        <p>Nama : ${nama}</p>
        <p>Jumlah Pilihan : ${jumlah}</p>
    `;

    for (let i = 0; i < pilihan.length; i++) {
        output += `<p>Pilihan ${i + 1} : ${pilihan[i]}</p>`;
    }

    output += `
        <h4>Pilihan :</h4>
    `;

    for (let i = 0; i < pilihan.length; i++) {
        output += `
            <div class="radio-item">
                <input type="radio" name="pilihanRadio" value="${pilihan[i]}">
                ${pilihan[i]}
            </div>
        `;
    }

    output += `
        <br>
        <label>Pilihan :</label>
        <select id="pilihanDropdown">
    `;

    for (let i = 0; i < pilihan.length; i++) {
        output += `
            <option value="${pilihan[i]}">${pilihan[i]}</option>
        `;
    }

    output += `
        </select>
        <br><br>
        <button onclick="pilihPilihan()">OK</button>
    `;

    document.getElementById("pilihanHasil").innerHTML = output;
}

function pilihPilihan() {
    let radio = document.querySelector(
        'input[name="pilihanRadio"]:checked'
    );

    if (!radio) {
        alert("Silakan pilih salah satu pilihan!");
        return;
    }

    let pilihanDipilih = radio.value;

    document.getElementById("emailForm").innerHTML = `
        <hr>
        <label>Email :</label>
        <input type="email" id="email" placeholder="email@domain.com">
        <button onclick="tampilkanHasil('${pilihanDipilih}')">OK</button>
    `;
}

function tampilkanHasil(pilihanDipilih) {
    let email = document.getElementById("email").value.trim();

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Email harus diisi!");
        document.getElementById("email").focus();
        return;
    }

    if (!polaEmail.test(email)) {
        alert("Format email salah! Contoh: email@domain.com");
        document.getElementById("email").focus();
        return;
    }

    document.getElementById("hasil").innerHTML = `
        <hr>
        <p>
            Hallo, nama saya ${nama}, email ${email} 
            saya mempunyai sejumlah ${jumlah} pilihan yaitu 
            ${pilihan.join(", ")}, dan saya memilih ${pilihanDipilih}.
        </p>
    `;
}