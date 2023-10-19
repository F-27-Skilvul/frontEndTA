const passwordInput = document.getElementById('password');
const toggleCheckbox = document.getElementById('toggle');
const errorNotification = document.getElementById('error-notification');
  

  toggleCheckbox.addEventListener('change', function () {
    passwordInput.type = toggleCheckbox.checked ? 'text' : 'password';
  });

  const registerBtn = document.getElementById('register-btn');
  const successNotification = document.getElementById('success-notification');

registerBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Mencegah form dari mengirim permintaan

  const namaInput = document.getElementById('nama');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Validasi format email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    errorNotification.textContent = "Email tidak valid. Silakan periksa lagi.";
    errorNotification.classList.remove('hidden');
    successNotification.classList.add('hidden');
    // Menutup notifikasi kesalahan setelah 5 detik
    setTimeout(function () {
      errorNotification.classList.add('hidden');
    }, 5000);
    return; // Hentikan pendaftaran jika format email tidak sesuai
  }

  // Validasi panjang kata sandi
  if (passwordInput.value.length < 8) {
    errorNotification.textContent = "Kata sandi harus memiliki minimal 8 karakter.";
    errorNotification.classList.remove('hidden');
    successNotification.classList.add('hidden');
    // Menutup notifikasi kesalahan setelah 5 detik
    setTimeout(function () {
      errorNotification.classList.add('hidden');
    }, 5000);
    return; // Hentikan pendaftaran jika kata sandi terlalu pendek
  }

  setTimeout(function () {
    errorNotification.classList.add('hidden');
    successNotification.classList.remove('hidden');
    // Menutup notifikasi keberhasilan setelah 5 detik
    setTimeout(function () {
      successNotification.classList.add('hidden');
    }, 5000);
  }, 1000); // Menampilkan notifikasi setelah 1 detik

  // Kirim data ke API
  const name = document.getElementById("nama").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  fetch('https://forum-api.dicoding.dev/v1/register', {
    method: 'POST',
     headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name, email: email, password: password })
  });
})
