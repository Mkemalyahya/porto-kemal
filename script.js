function WhatsApp(){
    var nama = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById("message").value;

    var walink = "https://wa.me/6281218732192?text="
    + "Nama :" + nama + "%0a"
    + "Email : " + email + "%0a"
    + "Nomor Telepon : " + phone + "%0a"
    + "Pesan : " + message;

    window.open(walink, '_blank').focus();
}