// Honeymoon Web App - Fixed JavaScript with Proper Tab Functionality

// Interactive Day Data
const dayData = {
    1: {
        title: "Hari 1 - Kedatangan & Eksplorasi",
        date: "14 Januari 2026",
        activities: [
            { time: "14:00", activity: "Check-in Wana Karsa Hotel", location: "Jalan Monkey Forest, Ubud", icon: "fa-hotel", color: "pink" },
            { time: "16:00", activity: "Jelajahi Ubud Center", location: "Ubud Main Street", icon: "fa-walking", color: "purple" },
            { time: "19:00", activity: "Makan malam di warung lokal", location: "Ubud", icon: "fa-utensils", color: "blue" },
            { time: "20:30", activity: "Jalan malam romantis", location: "Sekitar Ubud", icon: "fa-moon", color: "indigo" }
        ],
        highlights: ["Hotel romantis", "Eksplorasi pertama", "Kuliner lokal"]
    },
    2: {
        title: "Hari 2 - Alam & Budaya",
        date: "15 Januari 2026",
        activities: [
            { time: "07:00", activity: "Sarapan di hotel", location: "Wana Karsa", icon: "fa-coffee", color: "yellow" },
            { time: "08:00", activity: "Monkey Forest Sanctuary", location: "Jl. Monkey Forest", icon: "fa-paw", color: "green", price: "Rp 100.000" },
            { time: "11:00", activity: "Makan siang di Bee Cafe", location: "Ubud", icon: "fa-utensils", color: "orange" },
            { time: "13:00", activity: "Tegalalang Rice Terraces", location: "Tegalalang", icon: "fa-mountain", color: "lime", price: "Rp 25.000" },
            { time: "16:00", activity: "Sunset view di sawah", location: "Tegalalang", icon: "fa-sun", color: "red" }
        ],
        highlights: ["Bertemu monyet", "Sawah terasering indah", "Sunset spektakuler"]
    },
    3: {
        title: "Hari 3 - Petualangan & Romantis",
        date: "16 Januari 2026",
        activities: [
            { time: "08:00", activity: "Sarapan di hotel", location: "Wana Karsa", icon: "fa-coffee", color: "yellow" },
            { time: "09:00", activity: "Real Bali Swing Bongkasa", location: "Bongkasa", icon: "fa-star", color: "pink", price: "Rp 650.000/orang" },
            { time: "13:00", activity: "Makan siang (sudah termasuk)", location: "Bali Swing", icon: "fa-utensils", color: "orange" },
            { time: "14:30", activity: "Check-in Ubud Heaven Villa", location: "Penestanan", icon: "fa-home", color: "purple" },
            { time: "15:00", activity: "Putri Ubud Spa - Couple Treatment", location: "Jl. Raya Bisma", icon: "fa-spa", color: "blue", price: "Rp 3.59jt/couple" },
            { time: "19:30", activity: "Candlelight Dinner di Apéritif", location: "Petulu, Ubud", icon: "fa-heart", color: "red", price: "Rp 1.9jt-2.5jt/orang" }
        ],
        highlights: ["Ayunan Instagram", "Spa romantis", "Malam istimewa"]
    },
    4: {
        title: "Hari 4 - Relaksasi & Kepergian",
        date: "17 Januari 2026",
        activities: [
            { time: "07:00", activity: "Sarapan di villa", location: "Ubud Heaven Villa", icon: "fa-coffee", color: "yellow" },
            { time: "09:00", activity: "Campuhan Ridge Walk", location: "Ubud", icon: "fa-hiking", color: "green" },
            { time: "11:00", activity: "Belanja oleh-oleh khas Ubud", location: "Ubud Market", icon: "fa-shopping-bag", color: "purple" },
            { time: "12:00", activity: "Makan siang & persiapan", location: "Ubud", icon: "fa-utensils", color: "orange" },
            { time: "14:00", activity: "Check-out & kepergian", location: "Airport", icon: "fa-plane", color: "blue" }
        ],
        highlights: ["Pagi terakhir", "Souvenir berkesan", "Perjalanan pulang"]
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    startCountdown();
    setupDayTabs();
    setupMobileMenu();
});

// Initialize App
function initializeApp() {
    // Smooth scrolling untuk semua anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll animations untuk navbar
    window.addEventListener('scroll', handleScroll);
    
    // Default tampilkan Hari 1
    showDay(1);
}

// Handle scroll navbar
function handleScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav?.classList.add('shadow-lg');
    } else {
        nav?.classList.remove('shadow-lg');
    }
}

// Setup Day Tabs - PERBAIKAN UTAMA
function setupDayTabs() {
    // Ambil semua tab buttons
    const dayTabs = document.querySelectorAll('[data-day]');
    
    dayTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const dayNumber = tab.getAttribute('data-day');
            showDay(parseInt(dayNumber));
        });
    });
}

// Show Day Function - PERBAIKAN UTAMA
function showDay(dayNumber) {
    // Sembunyikan semua hari
    const allDayContents = document.querySelectorAll('[data-day-content]');
    allDayContents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Hapus active class dari semua tabs
    const allDayTabs = document.querySelectorAll('[data-day]');
    allDayTabs.forEach(tab => {
        tab.classList.remove('active', 'bg-pink-500', 'text-white');
        tab.classList.add('bg-white', 'text-gray-700');
    });

    // Tampilkan hari yang dipilih
    const selectedContent = document.querySelector(`[data-day-content="${dayNumber}"]`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        selectedContent.classList.add('active');
        
        // Add animation
        selectedContent.style.animation = 'fadeIn 0.5s ease-in';
    }

    // Aktifkan tab yang sesuai
    const selectedTab = document.querySelector(`[data-day="${dayNumber}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active', 'bg-pink-500', 'text-white');
        selectedTab.classList.remove('bg-white', 'text-gray-700');
    }

    // Render activities untuk hari tersebut
    renderActivities(dayNumber);
}

// Render Activities
function renderActivities(dayNumber) {
    const data = dayData[dayNumber];
    const container = document.querySelector(`[data-day-content="${dayNumber}"]`);
    
    if (!container || !data) return;

    let html = `
        <div class="mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">${data.title}</h3>
            <p class="text-gray-600">📅 ${data.date}</p>
        </div>

        <div class="space-y-4">
    `;

    data.activities.forEach((activity, index) => {
        html += `
            <div class="bg-white rounded-lg p-6 border-l-4 border-pink-500 hover:shadow-lg transition-shadow">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="text-lg font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded">
                                ${activity.time}
                            </span>
                            <h4 class="text-lg font-semibold text-gray-900">${activity.activity}</h4>
                        </div>
                        <p class="text-gray-600 ml-0 mb-2">📍 ${activity.location}</p>
                        ${activity.price ? `<p class="text-green-600 font-semibold">💰 ${activity.price}</p>` : ''}
                    </div>
                    <div class="text-3xl text-pink-400">
                        <i class="fas ${activity.icon}"></i>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
        </div>

        <div class="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
            <h4 class="font-semibold text-gray-900 mb-3">✨ Highlights Hari Ini:</h4>
            <ul class="space-y-2">
    `;

    data.highlights.forEach(highlight => {
        html += `<li class="text-gray-700">✓ ${highlight}</li>`;
    });

    html += `
            </ul>
        </div>
    `;

    container.innerHTML = html;
}

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

            const countdownEl = document.getElementById('countdown');
            if (countdownEl) {
                countdownEl.innerHTML = `
                    <div class="grid grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-pink-600">${days}</div>
                            <div class="text-sm text-gray-600">Hari</div>
                        </div>
                        <div class="bg-white rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-pink-600">${hours}</div>
                            <div class="text-sm text-gray-600">Jam</div>
                        </div>
                        <div class="bg-white rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-pink-600">${minutes}</div>
                            <div class="text-sm text-gray-600">Menit</div>
                        </div>
                        <div class="bg-white rounded-lg p-4 text-center">
                            <div class="text-3xl font-bold text-pink-600">${seconds}</div>
                            <div class="text-sm text-gray-600">Detik</div>
                        </div>
                    </div>
                `;
            }
        }
    }, 1000);
}

// Mobile Menu
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking links
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Modal Functions
function openModal(destinationId) {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Keyboard escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});