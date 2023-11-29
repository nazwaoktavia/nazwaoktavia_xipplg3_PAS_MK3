// Mendapatkan referensi elemen HTML dengan ID "search-button", "search-close", dan "search-content".
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

// Jika elemen dengan ID "search-button" ditemukan, tambahkan event listener untuk menanggapi klik pada elemen tersebut.
// Ketika diklik, tambahkan kelas "show-search" ke elemen dengan ID "search-content".
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

// Jika elemen dengan ID "search-close" ditemukan, tambahkan event listener untuk menanggapi klik pada elemen tersebut.
// Ketika diklik, hapus kelas "show-search" dari elemen dengan ID "search-content".
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

// Inisialisasi Swiper pada elemen dengan kelas "new__swiper".
// Konfigurasi Swiper termasuk loop, ruang antar slide sebesar 16, dan jumlah slide per tampilan otomatis.
// Ada juga konfigurasi untuk breakpoint di layar dengan lebar minimum 1150px, di mana jumlah slide per tampilan diatur menjadi 3.
let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

// Inisialisasi Swiper pada elemen dengan kelas "featured__swiper".
// Konfigurasi Swiper termasuk loop, ruang antar slide sebesar 16, kursor "grab" saat mengarahkan ke slide,
// jumlah slide per tampilan otomatis, dan slide tengah diatur secara otomatis.
// Terdapat juga konfigurasi untuk tombol navigasi (next dan prev) serta breakpoint pada layar dengan lebar minimum 1150px,
// di mana jumlah slide per tampilan diatur menjadi 4 dan slide tengah diatur menjadi tidak terpusat.
let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

// Inisialisasi Swiper pada elemen dengan kelas "testimonial__swiper".
// Konfigurasi Swiper termasuk loop, ruang antar slide sebesar 16, kursor "grab" saat mengarahkan ke slide,
// jumlah slide per tampilan otomatis, dan slide tengah diatur secara otomatis.
// Terdapat juga konfigurasi untuk otomatis memutar slide setiap 3000 milidetik (3 detik) dan tidak menonaktifkan otomatisasi ketika interaksi pengguna terdeteksi.
// Terdapat juga konfigurasi breakpoint pada layar dengan lebar minimum 1150px,
// di mana jumlah slide per tampilan diatur menjadi 4 dan slide tengah diatur menjadi tidak terpusat.
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== MENAMPILKAN TOMBOL SCROLL ATAS ===============*/ 
const scrollUp = () => {
    // Mendapatkan elemen tombol scroll atas
    const scrollUp = document.getElementById('scroll-up');
    
    // Menambahkan kelas 'show-scroll' jika posisi scroll lebih dari atau sama dengan 350px
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        // Menghapus kelas 'show-scroll' jika posisi scroll kurang dari 350px
                        : scrollUp.classList.remove('show-scroll');
}

// Menambahkan event listener untuk mendeteksi perubahan pada event scroll
window.addEventListener('scroll', scrollUp);

