<!-- ITINERARY SECTION - HTML UPDATE UNTUK MEMPERBAIKI BUG TAB HARI -->

<!-- GUNAKAN HTML INI UNTUK MENGGANTI BAGIAN ITINERARY DI INDEX.HTML -->

<!-- Section Itinerary Header -->
<section id="itinerary" class="py-16 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
    <div class="max-w-7xl mx-auto px-4">
        
        <!-- Header -->
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
                ✨ Itinerary Honeymoon Kami ✨
            </h2>
            <p class="text-lg text-gray-600">
                4 hari magical honeymoon yang tak terlupakan di Ubud, Bali
            </p>
        </div>

        <!-- Countdown Timer -->
        <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 class="text-center text-2xl font-bold text-gray-900 mb-6">
                ⏰ Hitung Mundur Perjalanan
            </h3>
            <div id="countdown" class="grid grid-cols-4 gap-4">
                <div class="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
                    <div class="text-3xl font-bold text-pink-600" id="days">14</div>
                    <div class="text-sm text-gray-600 font-semibold">Hari</div>
                </div>
                <div class="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 text-center">
                    <div class="text-3xl font-bold text-purple-600" id="hours">12</div>
                    <div class="text-sm text-gray-600 font-semibold">Jam</div>
                </div>
                <div class="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-4 text-center">
                    <div class="text-3xl font-bold text-orange-600" id="minutes">30</div>
                    <div class="text-sm text-gray-600 font-semibold">Menit</div>
                </div>
                <div class="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 text-center">
                    <div class="text-3xl font-bold text-blue-600" id="seconds">45</div>
                    <div class="text-sm text-gray-600 font-semibold">Detik</div>
                </div>
            </div>
        </div>

        <!-- Day Selection Tabs -->
        <div class="flex gap-3 mb-8 flex-wrap justify-center lg:justify-start">
            <button data-day="1" class="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold active shadow-lg hover:shadow-xl transition-all">
                <i class="fas fa-calendar-check"></i> Hari 1
            </button>
            <button data-day="2" class="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-pink-100 border-2 border-gray-200 transition-all">
                <i class="fas fa-calendar"></i> Hari 2
            </button>
            <button data-day="3" class="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-pink-100 border-2 border-gray-200 transition-all">
                <i class="fas fa-calendar"></i> Hari 3
            </button>
            <button data-day="4" class="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-pink-100 border-2 border-gray-200 transition-all">
                <i class="fas fa-calendar"></i> Hari 4
            </button>
        </div>

        <!-- Day Contents Container -->
        <div class="bg-white rounded-xl shadow-xl overflow-hidden">
            <!-- Hari 1 -->
            <div data-day-content="1" class="day-content active p-8 bg-white"></div>

            <!-- Hari 2 -->
            <div data-day-content="2" class="day-content p-8 bg-white" style="display:none;"></div>

            <!-- Hari 3 -->
            <div data-day-content="3" class="day-content p-8 bg-white" style="display:none;"></div>

            <!-- Hari 4 -->
            <div data-day-content="4" class="day-content p-8 bg-white" style="display:none;"></div>
        </div>

        <!-- Info Box -->
        <div class="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <p class="text-gray-700">
                <i class="fas fa-info-circle text-blue-600 mr-3"></i>
                <strong>💡 Tips:</strong> Klik tab hari untuk melihat detail aktivitas per harinya. 
                Setiap aktivitas sudah termasuk harga estimasi dan contact booking.
            </p>
        </div>

    </div>
</section>

<!-- CSS untuk Animasi (Tambahkan di dalam tag <style> atau file CSS terpisah) -->
<style>
    /* Animasi fade-in untuk day content */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .day-content {
        animation: fadeIn 0.5s ease-in-out;
    }

    .day-content.active {
        display: block !important;
    }

    /* Tab button hover effect */
    [data-day] {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    [data-day]:hover {
        transform: translateY(-2px);
    }

    [data-day].active {
        box-shadow: 0 10px 25px rgba(217, 70, 151, 0.4);
    }

    /* Activity item animation */
    .activity-item {
        animation: fadeIn 0.6s ease-in-out;
    }

    .activity-item:nth-child(2) {
        animation-delay: 0.1s;
    }

    .activity-item:nth-child(3) {
        animation-delay: 0.2s;
    }

    .activity-item:nth-child(4) {
        animation-delay: 0.3s;
    }

    .activity-item:nth-child(5) {
        animation-delay: 0.4s;
    }

    .activity-item:nth-child(6) {
        animation-delay: 0.5s;
    }

    /* Responsive untuk mobile */
    @media (max-width: 768px) {
        .day-content {
            padding: 1.5rem !important;
        }

        [data-day] {
            padding: 0.6rem 1rem !important;
            font-size: 0.875rem;
        }

        [data-day] i {
            display: none;
        }
    }
</style>

<!-- ============================================
     INSTRUKSI IMPLEMENTASI:
     
     1. Copy HTML section di atas (dari "Section Itinerary Header" sampai akhir style)
     2. Cari section #itinerary di index.html Anda
     3. Ganti seluruh isi section tersebut dengan code di atas
     4. Pastikan sudah menggunakan script-fixed.js atau menambahkan setupDayTabs()
     5. Test dengan klik tab Hari 1, 2, 3, 4
     
     PENTING: 
     - Pastikan data-day="1" sampai data-day="4" pada buttons
     - Pastikan data-day-content="1" sampai data-day-content="4" pada divs
     - Tambahkan setupDayTabs() di event DOMContentLoaded
     - Ensure script-fixed.js is loaded
     
     STATUS: READY TO IMPLEMENT ✅
     ============================================ -->
