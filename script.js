// ================================================
// 1. DATA MENU
// ================================================

// Ubah nama, harga, kategori, deskripsi, dan URL foto
// sesuai dengan menu cafe yang ingin ditampilkan.

const menus = [
    {
        id: 1,
        nama: "Nasi Goreng Spesial",
        kategori: "Makanan",
        harga: 25000,
        deskripsi: "Nasi goreng dengan telur dan sayuran.",
        emoji: "🍛",
        gambar: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 2,
        nama: "Chicken Steak",
        kategori: "Makanan",
        harga: 35000,
        deskripsi: "Ayam panggang dengan saus dan sayuran.",
        emoji: "🍗",
        gambar: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 3,
        nama: "Beef Burger",
        kategori: "Makanan",
        harga: 32000,
        deskripsi: "Burger daging dengan selada dan keju.",
        emoji: "🍔",
        gambar: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 4,
        nama: "Spaghetti Bolognese",
        kategori: "Makanan",
        harga: 30000,
        deskripsi: "Pasta dengan saus tomat dan daging.",
        emoji: "🍝",
        gambar: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 5,
        nama: "Kentang Goreng",
        kategori: "Camilan",
        harga: 15000,
        deskripsi: "Kentang renyah dengan saus pilihan.",
        emoji: "🍟",
        gambar: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 6,
        nama: "Chicken Nuggets",
        kategori: "Camilan",
        harga: 18000,
        deskripsi: "Nugget ayam renyah dan gurih.",
        emoji: "🍗",
        gambar: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 7,
        nama: "Chocolate Cake",
        kategori: "Dessert",
        harga: 22000,
        deskripsi: "Kue cokelat lembut dan manis.",
        emoji: "🍰",
        gambar: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 8,
        nama: "Cheesecake",
        kategori: "Dessert",
        harga: 25000,
        deskripsi: "Kue keju dengan tekstur lembut.",
        emoji: "🍰",
        gambar: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 9,
        nama: "Kopi Susu Aren",
        kategori: "Minuman",
        harga: 18000,
        deskripsi: "Kopi susu dengan gula aren.",
        emoji: "☕",
        gambar: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 10,
        nama: "Cappuccino",
        kategori: "Minuman",
        harga: 20000,
        deskripsi: "Espresso dan susu dengan foam.",
        emoji: "☕",
        gambar: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 11,
        nama: "Matcha Latte",
        kategori: "Minuman",
        harga: 22000,
        deskripsi: "Matcha dengan susu creamy.",
        emoji: "🍵",
        gambar: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=600&q=80",
        tersedia: true
    },
    {
        id: 12,
        nama: "Lemon Tea",
        kategori: "Minuman",
        harga: 12000,
        deskripsi: "Teh segar dengan rasa lemon.",
        emoji: "🍋",
        gambar: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
        tersedia: false
    }
];


// ================================================
// 2. VARIABEL DAN ELEMEN HTML
// ================================================

let keranjang = [];
let kategoriAktif = "Semua";
let kataKunci = "";

// Menghubungkan JavaScript dengan elemen HTML.
const menuGrid = document.getElementById("menuGrid");
const categories = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");
const resultText = document.getElementById("resultText");
const emptyMenu = document.getElementById("emptyMenu");

const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartCount = document.getElementById("cartCount");
const totalItems = document.getElementById("totalItems");
const totalPrice = document.getElementById("totalPrice");

const orderForm = document.getElementById("orderForm");
const confirmButton = document.getElementById("confirmButton");
const clearCartButton = document.getElementById("clearCart");
const receipt = document.getElementById("receipt");


// ================================================
// 3. FORMAT HARGA KE RUPIAH
// ================================================

function rupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
}


// ================================================
// 4. MEMBUAT TOMBOL KATEGORI
// ================================================

function tampilkanKategori() {
    const daftar = [
        "Semua",
        ...new Set(menus.map(menu => menu.kategori))
    ];

    categories.replaceChildren();

    daftar.forEach(kategori => {
        const tombol = document.createElement("button");

        tombol.type = "button";
        tombol.className = "category-btn";
        tombol.textContent = kategori;

        if (kategori === kategoriAktif) {
            tombol.classList.add("active");
        }

        // Saat tombol kategori ditekan, menu diperbarui.
        tombol.addEventListener("click", () => {
            kategoriAktif = kategori;
            tampilkanKategori();
            tampilkanMenu();
        });

        categories.appendChild(tombol);
    });
}


// ================================================
// 5. MENAMPILKAN KARTU MENU
// ================================================

function tampilkanMenu() {
    // Memfilter menu berdasarkan nama dan kategori.
    const hasil = menus.filter(menu => {
        const namaCocok = menu.nama
            .toLowerCase()
            .includes(kataKunci);

        const kategoriCocok =
            kategoriAktif === "Semua" ||
            menu.kategori === kategoriAktif;

        return namaCocok && kategoriCocok;
    });

    menuGrid.replaceChildren();

    resultText.textContent = `Menampilkan ${hasil.length} menu`;

    emptyMenu.classList.toggle("hidden", hasil.length > 0);

    hasil.forEach(menu => {
        const kartu = document.createElement("article");
        kartu.className = "menu-card";

        // Membuat area foto.
        const areaGambar = document.createElement("div");
        areaGambar.className = "image-wrap";

        const gambar = document.createElement("img");
        gambar.className = "menu-image";
        gambar.src = menu.gambar;
        gambar.alt = menu.nama;
        gambar.loading = "lazy";

        // Menampilkan emoji jika foto gagal dimuat.
        gambar.addEventListener("error", () => {
            const pengganti = document.createElement("div");

            pengganti.style.cssText =
                "display:grid;place-items:center;height:100%;font-size:55px";

            pengganti.textContent = menu.emoji;
            gambar.replaceWith(pengganti);
        }, { once: true });

        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = menu.tersedia ? menu.kategori : "Habis";

        if (!menu.tersedia) {
            badge.classList.add("habis");
        }

        areaGambar.append(gambar, badge);

        // Membuat informasi produk.
        const isi = document.createElement("div");
        isi.className = "menu-content";

        const nama = document.createElement("h3");
        nama.textContent = menu.nama;

        const deskripsi = document.createElement("p");
        deskripsi.className = "description";
        deskripsi.textContent = menu.deskripsi;

        const bawah = document.createElement("div");
        bawah.className = "menu-bottom";

        const harga = document.createElement("span");
        harga.className = "price";
        harga.textContent = rupiah(menu.harga);

        const tombolTambah = document.createElement("button");
        tombolTambah.type = "button";
        tombolTambah.className = "add-btn";
        tombolTambah.textContent = menu.tersedia ? "+" : "×";
        tombolTambah.disabled = !menu.tersedia;
        tombolTambah.setAttribute(
            "aria-label",
            `Tambah ${menu.nama} ke keranjang`
        );

        tombolTambah.addEventListener("click", () => {
            tambahKeKeranjang(menu.id);
        });

        bawah.append(harga, tombolTambah);
        isi.append(nama, deskripsi, bawah);
        kartu.append(areaGambar, isi);

        menuGrid.appendChild(kartu);
    });
}


// ================================================
// 6. PENCARIAN MENU
// ================================================

// Daftar menu diperbarui setiap kali pengguna mengetik.
searchInput.addEventListener("input", () => {
    kataKunci = searchInput.value.trim().toLowerCase();
    tampilkanMenu();
});


// ================================================
// 7. MENAMBAHKAN MENU KE KERANJANG
// ================================================

function tambahKeKeranjang(id) {
    const menu = menus.find(item => item.id === id);

    // Pastikan menu ada dan masih tersedia.
    if (!menu || !menu.tersedia) {
        return;
    }

    const sudahAda = keranjang.find(item => item.id === id);

    if (sudahAda) {
        sudahAda.jumlah++;
    } else {
        keranjang.push({
            id: id,
            jumlah: 1
        });
    }

    tampilkanKeranjang();

    // Sembunyikan bukti lama jika pesanan berubah.
    receipt.classList.add("hidden");
}


// ================================================
// 8. MENGUBAH JUMLAH MENU
// ================================================

function ubahJumlah(id, perubahan) {
    const item = keranjang.find(pesanan => pesanan.id === id);

    if (!item) return;

    item.jumlah += perubahan;

    // Menghapus produk ketika jumlahnya nol.
    if (item.jumlah <= 0) {
        keranjang = keranjang.filter(pesanan => pesanan.id !== id);
    }

    tampilkanKeranjang();
    receipt.classList.add("hidden");
}


// ================================================
// 9. MENAMPILKAN KERANJANG DAN TOTAL
// ================================================

function tampilkanKeranjang() {
    cartItems.replaceChildren();

    // Menghitung jumlah semua barang.
    const banyakItem = keranjang.reduce(
        (total, item) => total + item.jumlah,
        0
    );

    // Menghitung harga berdasarkan jumlah setiap produk.
    const total = keranjang.reduce((jumlah, item) => {
        const menu = menus.find(produk => produk.id === item.id);

        return jumlah + (menu ? menu.harga * item.jumlah : 0);
    }, 0);

    cartCount.textContent = banyakItem;
    totalItems.textContent = `${banyakItem} item`;
    totalPrice.textContent = rupiah(total);

    emptyCart.classList.toggle("hidden", keranjang.length > 0);

    confirmButton.disabled = keranjang.length === 0;
    clearCartButton.disabled = keranjang.length === 0;

    keranjang.forEach(item => {
        const menu = menus.find(produk => produk.id === item.id);

        if (!menu) return;

        const baris = document.createElement("div");
        baris.className = "cart-row";

        const emoji = document.createElement("div");
        emoji.className = "cart-emoji";
        emoji.textContent = menu.emoji;

        const info = document.createElement("div");
        info.className = "cart-info";

        const nama = document.createElement("h3");
        nama.textContent = menu.nama;

        const harga = document.createElement("p");
        harga.textContent = rupiah(menu.harga);

        const subtotal = document.createElement("p");
        subtotal.className = "cart-subtotal";
        subtotal.textContent = rupiah(menu.harga * item.jumlah);

        info.append(nama, harga, subtotal);

        // Tombol untuk menambah dan mengurangi jumlah.
        const kontrol = document.createElement("div");
        kontrol.className = "quantity";

        const kurang = document.createElement("button");
        kurang.type = "button";
        kurang.textContent = "−";
        kurang.setAttribute("aria-label", `Kurangi ${menu.nama}`);

        kurang.addEventListener("click", () => {
            ubahJumlah(menu.id, -1);
        });

        const jumlah = document.createElement("span");
        jumlah.textContent = item.jumlah;

        const tambah = document.createElement("button");
        tambah.type = "button";
        tambah.textContent = "+";
        tambah.setAttribute("aria-label", `Tambah ${menu.nama}`);

        tambah.addEventListener("click", () => {
            ubahJumlah(menu.id, 1);
        });

        kontrol.append(kurang, jumlah, tambah);
        baris.append(emoji, info, kontrol);
        cartItems.appendChild(baris);
    });
}


// ================================================
// 10. MENGOSONGKAN KERANJANG
// ================================================

clearCartButton.addEventListener("click", () => {
    keranjang = [];

    tampilkanKeranjang();
    receipt.classList.add("hidden");
});


// ================================================
// 11. MEMBUAT NOMOR PESANAN
// ================================================

// Nomor dibuat berdasarkan tanggal dan urutan lokal.
// Contoh: MN261021-001.
//
// Ini belum menjamin nomor unik antarperangkat.
// Untuk restoran sungguhan, gunakan database server.

function buatNomorPesanan() {
    const sekarang = new Date();

    const tanggal =
        String(sekarang.getFullYear()).slice(-2) +
        String(sekarang.getMonth() + 1).padStart(2, "0") +
        String(sekarang.getDate()).padStart(2, "0");

    const kunci = `menuin-counter-${tanggal}`;

    // localStorage menyimpan nomor terakhir pada browser ini.
    let urutan = Number(localStorage.getItem(kunci) || "0");

    urutan++;

    localStorage.setItem(kunci, String(urutan));

    return `MN${tanggal}-${String(urutan).padStart(3, "0")}`;
}


// ================================================
// 12. KONFIRMASI PESANAN
// ================================================

orderForm.addEventListener("submit", function(event) {
    // Mencegah browser memuat ulang halaman.
    event.preventDefault();

    if (keranjang.length === 0) {
        alert("Silakan pilih menu terlebih dahulu.");
        return;
    }

    const nama = document.getElementById("customerName")
        .value.trim();

    const meja = document.getElementById("tableNumber").value;

    const catatan = document.getElementById("orderNotes")
        .value.trim();

    if (!nama || !meja) {
        alert("Lengkapi nama pelanggan dan nomor meja.");
        return;
    }

    // Menyalin rincian produk dan menghitung subtotal.
    const detailPesanan = keranjang.map(item => {
        const menu = menus.find(produk => produk.id === item.id);

        return {
            id: menu.id,
            nama: menu.nama,
            harga: menu.harga,
            jumlah: item.jumlah,
            subtotal: menu.harga * item.jumlah
        };
    });

    const total = detailPesanan.reduce(
        (jumlah, item) => jumlah + item.subtotal,
        0
    );

    const dataPesanan = {
        nomor: buatNomorPesanan(),
        nama: nama,
        meja: meja,
        catatan: catatan,
        waktu: new Date().toLocaleString("id-ID"),
        items: detailPesanan,
        total: total
    };

    // Simpan riwayat pesanan secara lokal.
    // Data tidak otomatis terkirim ke pemilik cafe.
    try {
        const riwayat = JSON.parse(
            localStorage.getItem("menuin-orders") || "[]"
        );

        riwayat.push(dataPesanan);

        localStorage.setItem(
            "menuin-orders",
            JSON.stringify(riwayat)
        );
    } catch (error) {
        console.error("Riwayat pesanan tidak dapat disimpan:", error);
    }

    // Tampilkan nomor dan bukti pesanan.
    tampilkanBuktiPesanan(dataPesanan);

    // Kosongkan keranjang setelah pesanan dicatat.
    keranjang = [];
    tampilkanKeranjang();

    receipt.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});


// ================================================
// 13. MENAMPILKAN BUKTI PESANAN
// ================================================

function tampilkanBuktiPesanan(data) {
    document.getElementById("receiptNumber").textContent =
        data.nomor;

    document.getElementById("receiptDate").textContent =
        `Waktu: ${data.waktu}`;

    document.getElementById("receiptName").textContent =
        `Nama pelanggan: ${data.nama}`;

    document.getElementById("receiptTable").textContent =
        `Nomor meja: ${data.meja}`;

    document.getElementById("receiptNotes").textContent =
        data.catatan
            ? `Catatan: ${data.catatan}`
            : "Catatan: Tidak ada";

    document.getElementById("receiptTotal").textContent =
        `Total: ${rupiah(data.total)}`;

    const daftar = document.getElementById("receiptItems");
    daftar.replaceChildren();

    const judul = document.createElement("strong");
    judul.textContent = "Rincian pesanan";

    daftar.appendChild(judul);

    data.items.forEach(item => {
        const baris = document.createElement("p");

        baris.textContent =
            `${item.nama} x ${item.jumlah} — ${rupiah(item.subtotal)}`;

        daftar.appendChild(baris);
    });

    receipt.classList.remove("hidden");
}


// ================================================
// 14. MENCETAK BUKTI PESANAN
// ================================================

document.getElementById("printButton").addEventListener("click", () => {
    window.print();
});


// ================================================
// 15. NAVIGASI KE KERANJANG
// ================================================

document.getElementById("cartNav").addEventListener("click", () => {
    document.getElementById("pesanan").scrollIntoView({
        behavior: "smooth"
    });
});


// ================================================
// 16. MENJALANKAN WEBSITE
// ================================================

function mulaiWebsite() {
    tampilkanKategori();
    tampilkanMenu();
    tampilkanKeranjang();
}

// Menjalankan website ketika script dimuat.
mulaiWebsite();
