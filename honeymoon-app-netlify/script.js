// Interactive Day Data
const dayData = {
    1: {
        title: "Hari 1 - Arrival & Exploration",
        date: "14 Januari 2026",
        activities: [
            { time: "14:00", activity: "Check-in Wana Karsa Hotel", icon: "fa-hotel", color: "pink" },
            { time: "16:00", activity: "Explore Ubud Center", icon: "fa-walking", color: "purple" },
            { time: "19:00", activity: "Dinner at local warung", icon: "fa-utensils", color: "blue" },
            { time: "20:30", activity: "Evening walk around Ubud", icon: "fa-moon", color: "indigo" }
        ],
        highlights: ["Romantic hotel check-in", "First taste of Ubud", "Local cuisine experience"]
    },
    2: {
        title: "Hari 2 - Nature & Culture",
        date: "15 Januari 2026",
        activities: [
            { time: "08:00", activity: "Breakfast at hotel", icon: "fa-coffee", color: "yellow" },
            { time: "09:30", activity: "Monkey Forest Sanctuary", icon: "fa-paw", color: "green" },
            { time: "12:00", activity: "Lunch at Bee Cafe", icon: "fa-utensils", color: "orange" },
            { time: "14:00", activity: "Tegalalang Rice Terraces", icon: "fa-mountain", color: "lime" },
            { time: "18:00", activity: "Sunset at Tegalalang", icon: "fa-sun", color: "red" }
        ],
        highlights: ["Meet the monkeys", "Stunning rice terraces", "Perfect sunset view"]
    },
    3: {
        title: "Hari 3 - Adventure & Romance",
        date: "16 Januari 2026",
        activities: [
            { time: "08:00", activity: "Breakfast", icon: "fa-coffee", color: "yellow" },
            { time: "09:00", activity: "Real Bali Swing Bongkasa", icon: "fa-star", color: "pink" },
            { time: "12:30", activity: "Lunch included", icon: "fa-utensils", color: "orange" },
            { time: "14:00", activity: "Move to private villa", icon: "fa-home", color: "purple" },
            { time: "15:00", activity: "Couple spa at Putri Ubud", icon: "fa-spa", color: "blue" },
            { time: "19:00", activity: "Candlelight dinner", icon: "fa-heart", color: "red" }
        ],
        highlights: ["Adrenaline swing experience", "Luxury spa treatment", "Romantic dinner"]
    },
    4: {
        title: "Hari 4 - Relaxation & Departure",
        date: "17 Januari 2026",
        activities: [
            { time: "08:00", activity: "Breakfast at villa", icon: "fa-coffee", color: "yellow" },
            { time: "09:00", activity: "Campuhan Ridge Walk", icon: "fa-hiking", color: "green" },
            { time: "11:00", activity: "Last minute shopping", icon: "fa-shopping-bag", color: "purple" },
            { time: "12:00", activity: "Check-out & departure", icon: "fa-plane", color: "blue" }
        ],
        highlights: ["Morning nature walk", "Souvenir shopping", "Departure with memories"]
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    startCountdown();
    showDay(1);
    setupBudgetCalculator();
    setupMobileMenu();
    createConfetti();
});

function initializeApp() {
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Add scroll animations
    window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('shadow-2xl');
    } else {
        nav.classList.remove('shadow-2xl');
    }
}

// Mobile Menu
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Countdown Timer
function startCountdown() {
    const targetDate = new Date('January 14, 2026 00:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<h2 class="text-3xl font-bold">🎉 Honeymoon Time!</h2>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `
            <div class="flex justify-center space-x-6">
                <div class="text-center">
                    <div class="text-4xl font-bold">${days}</div>
                    <div class="text-sm opacity-75">Days</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold">${hours}</div>
                    <div class="text-sm opacity-75">Hours</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold">${minutes}</div>
                    <div class="text-sm opacity-75">Minutes</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold">${seconds}</div>
                    <div class="text-sm opacity-75">Seconds</div>
                </div>
            </div>
        `;
    }, 1000);
}

// Show Day Content
function showDay(day) {
    const data = dayData[day];
    const content = document.getElementById('dayContent');
    
    // Update button states
    document.querySelectorAll('.day-btn').forEach((btn, index) => {
        if (index + 1 === day) {
            btn.classList.add('bg-pink-500', 'text-white');
            btn.classList.remove('hover:bg-gray-200');
        } else {
            btn.classList.remove('bg-pink-500', 'text-white');
            btn.classList.add('hover:bg-gray-200');
        }
    });
    
    // Update content with animation
    content.style.opacity = '0';
    setTimeout(() => {
        content.innerHTML = `
            <div class="bg-white rounded-2xl shadow-xl p-8">
                <h3 class="text-3xl font-bold gradient-text mb-2">${data.title}</h3>
                <p class="text-gray-600 mb-6">${data.date}</p>
                
                <div class="space-y-4 mb-8">
                    ${data.activities.map((activity, index) => `
                        <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition" style="animation-delay: ${index * 0.1}s">
                            <div class="bg-${activity.color}-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                                <i class="fas ${activity.icon}"></i>
                            </div>
                            <div class="flex-1">
                                <div class="font-semibold">${activity.activity}</div>
                                <div class="text-sm text-gray-500">${activity.time}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6">
                    <h4 class="font-bold text-lg mb-3">Highlights:</h4>
                    <ul class="space-y-2">
                        ${data.highlights.map(highlight => `
                            <li class="flex items-center">
                                <i class="fas fa-heart text-pink-500 mr-2"></i>
                                <span>${highlight}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
        content.style.opacity = '1';
    }, 300);
}

// Budget Calculator
function setupBudgetCalculator() {
    const inputs = ['accommodation', 'activities', 'dining', 'spa'];
    
    inputs.forEach(id => {
        const input = document.getElementById(id);
        const valueSpan = document.getElementById(id + '-value');
        
        input.addEventListener('input', () => {
            valueSpan.textContent = 'Rp ' + parseInt(input.value).toLocaleString('id-ID');
            updateBudgetTotal();
        });
    });
}

function updateBudgetTotal() {
    const accommodation = parseInt(document.getElementById('accommodation').value);
    const activities = parseInt(document.getElementById('activities').value);
    const dining = parseInt(document.getElementById('dining').value);
    const spa = parseInt(document.getElementById('spa').value);
    
    const total = accommodation + activities + dining + spa;
    const percentage = (total / 17000000) * 100;
    
    document.getElementById('totalBudget').textContent = 'Rp ' + total.toLocaleString('id-ID');
    
    const budgetBar = document.getElementById('budgetBar');
    budgetBar.style.width = percentage + '%';
    
    if (percentage > 100) {
        budgetBar.classList.add('bg-red-500');
        budgetBar.classList.remove('bg-white');
    } else {
        budgetBar.classList.add('bg-white');
        budgetBar.classList.remove('bg-red-500');
    }
}

// Interactive Tour
function startInteractiveTour() {
    showNotification('Starting interactive tour...', 'info');
    scrollToSection('itinerary');
    
    // Auto-advance through days
    let currentDay = 1;
    const tourInterval = setInterval(() => {
        if (currentDay <= 4) {
            showDay(currentDay);
            currentDay++;
        } else {
            clearInterval(tourInterval);
            showNotification('Tour completed! 🎉', 'success');
        }
    }, 3000);
}

// Save Budget
function saveBudget() {
    const budgetData = {
        accommodation: document.getElementById('accommodation').value,
        activities: document.getElementById('activities').value,
        dining: document.getElementById('dining').value,
        spa: document.getElementById('spa').value,
        total: document.getElementById('totalBudget').textContent,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('honeymoonBudget', JSON.stringify(budgetData));
    showNotification('Budget plan saved successfully! 💾', 'success');
    createConfetti();
}

// Call Number
function callNumber(number) {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/)) {
        window.location.href = `tel:${number}`;
    } else {
        navigator.clipboard.writeText(number).then(() => {
            showNotification(`Number ${number} copied to clipboard! 📞`, 'info');
        });
    }
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
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

// Create Confetti Effect
function createConfetti() {
    const colors = ['#ff6b9d', '#e91e63', '#ffd700', '#2ecc71', '#3498db'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                document.body.removeChild(confetti);
            }, 3000);
        }, i * 50);
    }
}

// Load saved budget on page load
window.addEventListener('load', () => {
    const savedBudget = localStorage.getItem('honeymoonBudget');
    if (savedBudget) {
        const budgetData = JSON.parse(savedBudget);
        document.getElementById('accommodation').value = budgetData.accommodation;
        document.getElementById('activities').value = budgetData.activities;
        document.getElementById('dining').value = budgetData.dining;
        document.getElementById('spa').value = budgetData.spa;
        
        // Update displays
        ['accommodation', 'activities', 'dining', 'spa'].forEach(id => {
            const input = document.getElementById(id);
            const valueSpan = document.getElementById(id + '-value');
            valueSpan.textContent = 'Rp ' + parseInt(input.value).toLocaleString('id-ID');
        });
        
        updateBudgetTotal();
    }
});

// Gallery Functions
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.gallery-filter-btn');
    
    // Update button states
    buttons.forEach(btn => {
        btn.classList.remove('bg-pink-500', 'text-white');
        btn.classList.add('hover:bg-gray-200');
    });
    
    event.target.classList.add('bg-pink-500', 'text-white');
    event.target.classList.remove('hover:bg-gray-200');
    
    // Filter items
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 100);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

function openModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    captionText.innerHTML = `<h3 class="text-2xl font-bold mb-2">${caption}</h3>`;
    
    // Add loading animation
    modalImg.style.opacity = '0';
    modalImg.onload = function() {
        modalImg.style.opacity = '1';
    };
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Add keyboard navigation for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Enhanced gallery animations
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
});
