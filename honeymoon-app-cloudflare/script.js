// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Floating Hearts Animation
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 6 + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(heart);
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth Scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Nomor telepon tersalin!', 'success');
    }).catch(() => {
        showNotification('Gagal menyalin nomor', 'error');
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    notification.style.transform = 'translateX(400px)';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Active Navigation Highlight
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-pink-500', 'font-bold');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-pink-500', 'font-bold');
        }
    });
}

// Budget Calculator
function calculateBudget() {
    const accommodation = document.getElementById('accommodation-range').value;
    const activities = document.getElementById('activities-range').value;
    const dining = document.getElementById('dining-range').value;
    const spa = document.getElementById('spa-range').value;
    
    const total = parseInt(accommodation) + parseInt(activities) + parseInt(dining) + parseInt(spa);
    
    document.getElementById('budget-total').textContent = 'Rp ' + total.toLocaleString('id-ID');
    
    // Update progress bar
    const percentage = (total / 17000000) * 100;
    document.getElementById('budget-progress').style.width = percentage + '%';
    
    if (percentage > 100) {
        document.getElementById('budget-progress').classList.add('bg-red-500');
        document.getElementById('budget-progress').classList.remove('bg-green-500');
    } else {
        document.getElementById('budget-progress').classList.add('bg-green-500');
        document.getElementById('budget-progress').classList.remove('bg-red-500');
    }
}

// Interactive Timeline
function showDayDetails(day) {
    const dayDetails = {
        1: {
            title: 'Hari 1 - Arrival & Exploration',
            activities: [
                'Check-in Wana Karsa Hotel (14:00)',
                'Explore Ubud Center (16:00)',
                'Dinner at local warung (19:00)',
                'Evening walk around Ubud (20:30)'
            ]
        },
        2: {
            title: 'Hari 2 - Nature & Culture',
            activities: [
                'Breakfast at hotel (08:00)',
                'Monkey Forest Sanctuary (09:30)',
                'Lunch at Bee Cafe (12:00)',
                'Tegalalang Rice Terraces (14:00)',
                'Sunset at Tegalalang (18:00)'
            ]
        },
        3: {
            title: 'Hari 3 - Adventure & Romance',
            activities: [
                'Breakfast (08:00)',
                'Real Bali Swing Bongkasa (09:00)',
                'Lunch included in swing package (12:30)',
                'Check-out hotel, move to villa (14:00)',
                'Couple spa at Putri Ubud (15:00)',
                'Candlelight dinner at Swept Away (19:00)'
            ]
        },
        4: {
            title: 'Hari 4 - Relaxation & Departure',
            activities: [
                'Breakfast at villa (08:00)',
                'Campuhan Ridge Walk (09:00)',
                'Last minute shopping (11:00)',
                'Check-out & departure (12:00)'
            ]
        }
    };
    
    const details = dayDetails[day];
    if (details) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-xl p-6 max-w-md w-full max-h-96 overflow-y-auto">
                <h3 class="text-xl font-bold mb-4 romantic-text">${details.title}</h3>
                <ul class="space-y-2">
                    ${details.activities.map(activity => `
                        <li class="flex items-start">
                            <i class="fas fa-heart text-pink-500 mr-2 mt-1 text-sm"></i>
                            <span class="text-sm">${activity}</span>
                        </li>
                    `).join('')}
                </ul>
                <button onclick="this.closest('.fixed').remove()" class="mt-6 bg-pink-500 text-white px-4 py-2 rounded-full w-full hover:bg-pink-600 transition">
                    Tutup
                </button>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

// Weather Widget (Simulated)
function showWeather() {
    const weatherData = {
        temperature: '28°C',
        condition: 'Cerah Berawan',
        humidity: '75%',
        wind: '15 km/h'
    };
    
    showNotification(`Cuaca Ubud: ${weatherData.temperature}, ${weatherData.condition}`, 'info');
}

// Countdown Timer
function startCountdown() {
    const targetDate = new Date('January 14, 2026 00:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div class="flex justify-center space-x-4">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-pink-500">${days}</div>
                        <div class="text-sm text-gray-600">Hari</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-pink-500">${hours}</div>
                        <div class="text-sm text-gray-600">Jam</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-pink-500">${minutes}</div>
                        <div class="text-sm text-gray-600">Menit</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-pink-500">${seconds}</div>
                        <div class="text-sm text-gray-600">Detik</div>
                    </div>
                </div>
            `;
        }
        
        if (distance < 0) {
            clearInterval(timer);
            if (countdownElement) {
                countdownElement.innerHTML = '<h2 class="text-2xl font-bold romantic-text">Honeymoon Time! 🎉</h2>';
            }
        }
    }, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    startCountdown();
    
    // Add scroll event listener for navigation
    window.addEventListener('scroll', updateActiveNavigation);
    
    // Add smooth scroll to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation removal
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Performance optimization - Lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// PWA Support
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('ServiceWorker registration successful');
    }).catch(error => {
        console.log('ServiceWorker registration failed');
    });
}
