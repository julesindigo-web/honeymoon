// Honeymoon Web App - Interactive JavaScript

// Modal Data
const modalData = {
    'wana-karsa': {
        title: 'Wana Karsa Ubud Hotel',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150556/search_images/fe3132c2494ef656974b7b1fa4e8653a47ec6fbf.jpg',
        description: 'Hotel bintang 4 yang terletak strategis di Jalan Monkey Forest, hanya 2 menit jalan kaki ke Ubud Monkey Forest Sanctuary. Pilihan sempurna untuk honeymoon dengan suasana romantis dan fasilitas lengkap. Rating 7.9/10 dari 31 reviews terverifikasi di Trip.com.',
        details: [
            { label: 'Harga per Malam', value: 'Rp 1.000.000 - 1.500.000' },
            { label: 'Lokasi', value: 'Jl. Monkey Forest, Ubud' },
            { label: 'Rating', value: '⭐⭐⭐⭐ (7.9/10)' },
            { label: 'Check-in/Out', value: '14:00 / 11:00' },
            { label: 'Fasilitas', value: 'Kolam renang, WiFi, Restoran' },
            { label: 'Status', value: '✅ Verified & Available' }
        ],
        cta: [
            { text: '📞 Hubungi: +62-361-975743', url: 'tel:+62-361-975743' },
            { text: '🔗 Booking di Traveloka', url: 'https://www.traveloka.com' }
        ]
    },
    'ubud-heaven': {
        title: 'Ubud Heaven Villa - Private Pool',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150568/search_images/0e75a712dc7cabeb57a02d3656bab84bb9d2e8e7.jpg',
        description: 'Villa mewah pribadi dengan kolam renang eksklusif, sempurna untuk momen romantis honeymoon Anda. Ukuran 300 m² dengan suasana yang intimate dan taman indah. Private pool dan romantic setup membuat pengalaman honeymoon tak terlupakan.',
        details: [
            { label: 'Harga per Malam', value: 'Rp 850.000' },
            { label: 'Lokasi', value: 'Area Penestanan, Ubud' },
            { label: 'Ukuran', value: '300 m²' },
            { label: 'Private Pool', value: 'Ya, eksklusif' },
            { label: 'WiFi', value: 'Tersedia' },
            { label: 'Fasilitas', value: 'Garden, Romantic Setup' }
        ],
        cta: [
            { text: '🔗 Booking di Airbnb', url: 'https://www.airbnb.com' },
            { text: '🔗 Booking di Booking.com', url: 'https://www.booking.com' }
        ]
    },
    'monkey-forest': {
        title: 'Ubud Monkey Forest Sanctuary',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150556/search_images/295fee340eef8c28b07ecc19bff934e235771768.jpg',
        description: 'Sanctuary monyet suci dengan 600+ populasi monyet, 3 kuil Hindu bersejarah (Pura Gunung Lebah), dan 186 spesies pohon. Hutan yang asri dan pemandangan alam yang menenangkan menjadikan ini destinasi wajib kunjung untuk honeymoon Anda. Nikmati pengalaman berinteraksi dengan monyet jinak dalam lingkungan yang natural.',
        details: [
            { label: 'Tiket Masuk', value: 'Rp 100.000/orang (weekday)' },
            { label: 'Tanggal Kunjung', value: '16 Januari (Kamis)' },
            { label: 'Jam Buka', value: '08:00 - 17:00' },
            { label: 'Durasi', value: '1.5 - 2 jam' },
            { label: 'Monyet', value: '600+ populasi jinak' },
            { label: 'Status', value: '✅ Always Open' }
        ],
        cta: [
            { text: '🎟️ Beli Tiket di Traveloka', url: 'https://www.traveloka.com' },
            { text: '📍 Lihat Lokasi di Maps', url: 'https://maps.google.com' }
        ]
    },
    'tegalalang': {
        title: 'Tegalalang Rice Terraces',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150556/search_images/c7553638b996a5b06b4345ae37e778d4db693f44.jpg',
        description: 'Sawah terasering ikonik Ubud dengan pemandangan spektakuler yang sering dijadikan lokasi foto pre-wedding dan honeymoon. Pemandangan hijau yang indah, terutama di pagi atau sore hari. Tempat sempurna untuk mengabadikan momen romantis dengan pasangan Anda di tengah alam Bali yang asli.',
        details: [
            { label: 'Tiket Masuk', value: 'Rp 25.000/orang' },
            { label: 'Jam Buka', value: '06:00 - 19:00' },
            { label: 'Best Time', value: 'Pagi (06:30-09:00) atau Sore (16:00-18:00)' },
            { label: 'Durasi', value: '2 - 3 jam' },
            { label: 'Aktivitas', value: 'Foto, Jalan santai, Lunch' },
            { label: 'Status', value: '✅ Always Open' }
        ],
        cta: [
            { text: '🎟️ Beli Tiket Online', url: 'https://www.traveloka.com' },
            { text: '📸 Lihat Foto dari Wisatawan', url: 'https://www.tripadvisor.com' }
        ]
    },
    'bali-swing': {
        title: 'Real Bali Swing Bongkasa',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150557/search_images/2ff79f11b888e7133442fd24cbf2bf018d21d695.jpg',
        description: 'Pengalaman swing premium dengan 12 ayunan unik termasuk tandem romantic swing yang sempurna untuk couple honeymoon. Dilengkapi dengan Instagram nests untuk foto sempurna, lunch buffet, dan asuransi. Data harga diupdate resmi 3 Januari 2026 oleh AdeeVaTours (official partner Real Bali Swing).',
        details: [
            { label: 'Paket Premium', value: 'Rp 650.000/orang' },
            { label: 'Included', value: '12 swings, lunch, drinks, insurance' },
            { label: 'Tandem Swing', value: 'Ya (romantic untuk couple)' },
            { label: 'Durasi', value: '2.5 - 3 jam' },
            { label: 'Shuttle', value: 'Depart 09:00, 11:00, 13:00, 15:00' },
            { label: 'Lokasi', value: 'Bongkasa (30-40 min dari Ubud)' }
        ],
        cta: [
            { text: '🔥 BOOK SEKARANG (Peak Season)', url: 'https://adeevatours.com' },
            { text: '📞 WhatsApp untuk Info', url: 'https://wa.me/6281234567890' }
        ]
    },
    'campuhan': {
        title: 'Campuhan Ridge Walk',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150556/search_images/1546e17ce43a6b30596c6d37cf58b6c9c68abf6c.jpg',
        description: 'Jalan setapak romantis sepanjang 2,5 km melalui lembah hijau, sungai, dan pemandangan gunung yang menakjubkan. Tempat terbaik untuk sunrise atau sunset photoshoot honeymoon Anda. Gratis tanpa biaya masuk, hanya memerlukan biaya transport Gojek/Grab. Jangan lewatkan kesempatan untuk berfoto di tengah alam Ubud yang asri.',
        details: [
            { label: 'Tiket Masuk', value: '🎉 GRATIS' },
            { label: 'Best Time', value: 'Pagi (07:00-09:00) untuk Sunrise' },
            { label: 'Distance', value: '2,5 km' },
            { label: 'Durasi', value: '1 - 1.5 jam' },
            { label: 'Transport', value: 'Rp 40.000-80.000 (Gojek/Grab)' },
            { label: 'Akses', value: '✅ Selalu buka' }
        ],
        cta: [
            { text: '🗺️ Lihat di Google Maps', url: 'https://maps.google.com' },
            { text: '📸 Lihat Review & Foto', url: 'https://www.tripadvisor.com' }
        ]
    },
    'aperitif': {
        title: 'Apéritif Restaurant - Fine Dining',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1767804675/search_images/3350fa956932d0f47b879af5dc1c932c478c5714.jpg',
        description: 'Restoran fine dining premium dengan konsep 1920s romantis yang sempurna untuk candlelight dinner honeymoon Anda. Menu 7-course degustation dengan wine pairing options, romantic candlelight setup penuh, dan personalized service. Pemandangan tropical jungle dengan suasana intimate membuat pengalaman dining yang unforgettable.',
        details: [
            { label: 'Menu 7-Course', value: 'Rp 1.900.000 - 2.500.000/orang' },
            { label: 'Dengan Champagne', value: 'Rp 2.500.000+/orang' },
            { label: 'Jam Buka', value: '17:30 - 23:00 (Daily)' },
            { label: 'Lokasi', value: 'Br. Nagi, Jl. Lanyahan, Petulu, Ubud' },
            { label: 'Dress Code', value: 'Smart Casual (Recommended)' },
            { label: 'Booking', value: '📞 +62-361-9082777' }
        ],
        cta: [
            { text: '📞 Hubungi: +62-361-9082777', url: 'tel:+62-361-9082777' },
            { text: '🔗 Website: aperitif.com', url: 'https://aperitif.com' }
        ]
    },
    'putri-spa': {
        title: 'Putri Ubud Spa - Honeymoon Package',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150570/search_images/097762bee821f06ee4fbc8ea29dae038da4264e4.jpg',
        description: 'Spa romantis dengan paket honeymoon khusus yang spesifik untuk couple. Honeymoon Ayurvedic Package 5 jam termasuk aroma therapy massage, Ayurvedic oil ceremony, body scrub with honey, flower bath dengan kelopak bunga, royal facial, dan lunch included. Pengalaman spa yang truly romantic dan relaxing untuk momen honeymoon spesial Anda.',
        details: [
            { label: 'Honeymoon Ayurvedic', value: 'Rp 3.590.000/couple' },
            { label: 'Durasi', value: '5 jam' },
            { label: 'Included', value: 'Massage, treatment, lunch' },
            { label: 'Jam Buka', value: '09:00 - 21:00 (Daily)' },
            { label: 'Lokasi', value: 'Jl. Raya Bisma No 97, Ubud' },
            { label: 'Booking', value: '📞 +62361 4792561' }
        ],
        cta: [
            { text: '📞 Hubungi: +62361 4792561', url: 'tel:+62361-4792561' },
            { text: '📱 WhatsApp: +62 819-3622-4944', url: 'https://wa.me/62819-3622-4944' }
        ]
    },
    'aperitif-dinner': {
        title: 'Candlelight Dinner - Apéritif',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150568/search_images/c8523ffc54ffe6825aec9398db1f1ba6f8d1d75e.jpg',
        description: 'Pengalaman candlelight dinner romantis yang tak terlupakan di Apéritif Restaurant dengan konsep 1920s elegant. Setiap detail dirancang untuk menciptakan suasana romantic sempurna dengan bunga, lilin, dan personalized service.',
        details: [
            { label: 'Tanggal', value: '16 Januari 2026 (Kamis)' },
            { label: 'Waktu', value: '19:30 - 22:00' },
            { label: 'Menu', value: '7-Course Degustation' },
            { label: 'Harga', value: 'Rp 3.8jt - 5jt untuk 2 orang' },
            { label: 'Fotografi', value: 'Photographer tersedia' },
            { label: 'Penting', value: '🔥 BOOK SEKARANG - Peak Season!' }
        ],
        cta: [
            { text: '📞 Hubungi: +62-361-9082777', url: 'tel:+62-361-9082777' },
            { text: '📧 Email untuk booking', url: 'mailto:aperitif@example.com' }
        ]
    },
    'spa-couple': {
        title: 'Couple Spa Treatment',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150570/search_images/619018458c89443695680c9b83685fa24c642e50.jpg',
        description: 'Pengalaman spa couple yang romantic dengan treatment khusus untuk honeymoon. Putri Ubud Spa menawarkan Honeymoon Ayurvedic Package yang mencakup berbagai treatment relaksasi dan rejuvenasi untuk kedua pasangan.',
        details: [
            { label: 'Tanggal', value: '16 Januari 2026 (Kamis)' },
            { label: 'Waktu', value: '15:00 - 20:00' },
            { label: 'Treatment', value: 'Honeymoon Ayurvedic 5 jam' },
            { label: 'Harga', value: 'Rp 3.590.000 (untuk 2 orang)' },
            { label: 'Lunch', value: 'Included' },
            { label: 'Rekomendasi', value: '⭐ Paling Lengkap & Spesifik' }
        ],
        cta: [
            { text: '📞 Hubungi: +62361 4792561', url: 'tel:+62361-4792561' },
            { text: '📱 WhatsApp untuk booking', url: 'https://wa.me/62819-3622-4944' }
        ]
    },
    'villa-pool': {
        title: 'Private Pool Villa',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150568/search_images/0e75a712dc7cabeb57a02d3656bab84bb9d2e8e7.jpg',
        description: 'Ubud Heaven Villa dengan private pool eksklusif yang sempurna untuk quality time berdua di honeymoon Anda. Desain romantic dan intimate dengan taman yang indah.',
        details: [
            { label: 'Tanggal Check-in', value: '16 Januari 2026' },
            { label: 'Tanggal Check-out', value: '17 Januari 2026' },
            { label: 'Private Pool', value: '✅ Eksklusif & Romantic' },
            { label: 'Harga', value: 'Rp 850.000 / 1 malam' },
            { label: 'Ukuran', value: '300 m²' },
            { label: 'Status', value: '✅ Available' }
        ],
        cta: [
            { text: '🔗 Booking di Airbnb', url: 'https://www.airbnb.com' },
            { text: '🔗 Booking di Booking.com', url: 'https://www.booking.com' }
        ]
    },
    'wana-karsa-2': {
        title: 'Wana Karsa Hotel - Room View',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150556/search_images/09a1676b8bb33a47f9f4bb694519c7c170b324a1.jpg',
        description: 'Kamar hotel Wana Karsa yang dirancang untuk romantic getaway. Dengan pemandangan taman dan fasilitas lengkap untuk kenyamanan maksimal Anda.',
        details: [
            { label: 'Tipe Kamar', value: 'Standar atau Deluxe' },
            { label: 'Harga', value: 'Rp 1.000.000 - 1.500.000' },
            { label: 'Fasilitas Kamar', value: 'AC, WiFi, TV, Bathroom' },
            { label: 'Kolam Renang', value: 'Shared pool hotel' },
            { label: 'Sarapan', value: 'Optional (extra charge)' },
            { label: 'Check-in', value: '14 Januari 2026' }
        ],
        cta: [
            { text: '🔗 Booking di Traveloka', url: 'https://www.traveloka.com' },
            { text: '🔗 Booking di Booking.com', url: 'https://www.booking.com' }
        ]
    },
    'candlelight': {
        title: 'Candlelight Dinner Romantic Setup',
        image: 'https://pplx-res.cloudinary.com/image/upload/v1768150570/search_images/c25d68b293e0a9ed980605ebb6271f6038be7539.jpg',
        description: 'Suasana candlelight dinner yang romantic di Apéritif dengan dekorasi penuh perhatian untuk momen spesial honeymoon Anda. Setiap detail dirancang untuk menciptakan pengalaman yang unforgettable.',
        details: [
            { label: 'Lokasi', value: 'Apéritif Restaurant, Ubud' },
            { label: 'Tanggal', value: '16 Januari 2026' },
            { label: 'Waktu', value: '19:30 - 22:00' },
            { label: 'Menu', value: '7-Course Premium' },
            { label: 'Candlelight', value: '✨ Full Setup' },
            { label: 'Photographer', value: 'Tersedia untuk hire' }
        ],
        cta: [
            { text: '📞 Hubungi: +62-361-9082777', url: 'tel:+62-361-9082777' },
            { text: '🔗 Website: aperitif.com', url: 'https://aperitif.com' }
        ]
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    setupMobileMenu();
    setupEventListeners();
});

// Countdown Timer
function startCountdown() {
    const targetDate = new Date('January 14, 2026 00:00:00').getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
        }
    }, 1000);
}

// Mobile Menu
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Day tabs - Fix event listener setup
    const dayTabs = document.querySelectorAll('.day-tab');
    dayTabs.forEach((tab, index) => {
        const dayNumber = index + 1;
        tab.addEventListener('click', () => showDay(dayNumber));
        console.log(`Setup listener for day ${dayNumber}`);
    });
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on the ×
    if (navLinks) {
        navLinks.addEventListener('click', (e) => {
            if (e.target === navLinks) {
                navLinks.classList.remove('active');
            }
        });
    }
}

// Show Day
function showDay(dayNumber) {
    console.log(`Showing day ${dayNumber}`);
    
    // Hide all days
    for (let i = 1; i <= 4; i++) {
        const dayContent = document.getElementById(`day-${i}`);
        const dayTab = document.querySelectorAll('.day-tab')[i-1]; // Fix selector
        
        if (dayContent) dayContent.classList.remove('active');
        if (dayTab) dayTab.classList.remove('active');
    }
    
    // Show selected day
    const selectedDay = document.getElementById(`day-${dayNumber}`);
    const selectedTab = document.querySelectorAll('.day-tab')[dayNumber-1]; // Fix selector
    
    if (selectedDay) {
        selectedDay.classList.add('active');
        console.log(`Day ${dayNumber} content activated`);
    }
    if (selectedTab) {
        selectedTab.classList.add('active');
        console.log(`Day ${dayNumber} tab activated`);
    }
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Open Accommodation Modal
function openAccommodationModal(accommodationId) {
    const data = modalData[accommodationId];
    if (!data) return;
    
    openModalWithData(data);
}

// Open Destination Modal
function openDestinationModal(destinationId) {
    const data = modalData[destinationId];
    if (!data) return;
    
    openModalWithData(data);
}

// Open Gallery Modal
function openGalleryModal(galleryId) {
    const data = modalData[galleryId];
    if (!data) return;
    
    openModalWithData(data);
}

// Open Modal with Data
function openModalWithData(data) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const modalCTA = document.getElementById('modalCTA');
    
    modalImage.src = data.image;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    
    // Details
    modalDetails.innerHTML = '';
    data.details.forEach(detail => {
        const detailDiv = document.createElement('div');
        detailDiv.className = 'modal-detail-item';
        detailDiv.innerHTML = `
            <div class="modal-detail-label">${detail.label}</div>
            <div class="modal-detail-value">${detail.value}</div>
        `;
        modalDetails.appendChild(detailDiv);
    });
    
    // CTA Buttons
    modalCTA.innerHTML = '';
    data.cta.forEach(button => {
        const btn = document.createElement('a');
        btn.href = button.url;
        btn.className = 'btn-booking';
        btn.textContent = button.text;
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        modalCTA.appendChild(btn);
    });
    
    // Show modal
    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});