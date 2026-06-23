// ข้อมูลรายชื่อ 77 จังหวัดพร้อมพิกัดโดยประมาณ (Latitude, Longitude)
const provinces = [
    // ภาคกลาง (22)
    { name: 'กรุงเทพมหานคร', lat: 13.7563, lon: 100.5018 },
    { name: 'กำแพงเพชร', lat: 16.4828, lon: 99.5227 },
    { name: 'ชัยนาท', lat: 15.1852, lon: 100.1251 },
    { name: 'นครนายก', lat: 14.2069, lon: 101.2131 },
    { name: 'นครปฐม', lat: 13.8199, lon: 100.0443 },
    { name: 'นครสวรรค์', lat: 15.7000, lon: 100.1333 },
    { name: 'นนทบุรี', lat: 13.8591, lon: 100.5217 },
    { name: 'ปทุมธานี', lat: 14.0208, lon: 100.5250 },
    { name: 'พระนครศรีอยุธยา', lat: 14.3516, lon: 100.5780 },
    { name: 'พิจิตร', lat: 16.4418, lon: 100.3488 },
    { name: 'พิษณุโลก', lat: 16.8211, lon: 100.2659 },
    { name: 'เพชรบูรณ์', lat: 16.4150, lon: 101.1550 },
    { name: 'ลพบุรี', lat: 14.7985, lon: 100.6540 },
    { name: 'สมุทรปราการ', lat: 13.5991, lon: 100.5968 },
    { name: 'สมุทรสงคราม', lat: 13.4165, lon: 100.0023 },
    { name: 'สมุทรสาคร', lat: 13.5475, lon: 100.2744 },
    { name: 'สิงห์บุรี', lat: 14.8877, lon: 100.3951 },
    { name: 'สุโขทัย', lat: 17.0053, lon: 99.8249 },
    { name: 'สุพรรณบุรี', lat: 14.4742, lon: 100.1222 },
    { name: 'สระบุรี', lat: 14.5289, lon: 100.9101 },
    { name: 'อ่างทอง', lat: 14.5896, lon: 100.4551 },
    { name: 'อุทัยธานี', lat: 15.3789, lon: 100.0246 },

    // ภาคเหนือ (9)
    { name: 'เชียงราย', lat: 19.9105, lon: 99.8406 },
    { name: 'เชียงใหม่', lat: 18.7883, lon: 98.9853 },
    { name: 'น่าน', lat: 18.7756, lon: 100.7730 },
    { name: 'พะเยา', lat: 19.1666, lon: 99.9022 },
    { name: 'แพร่', lat: 18.1446, lon: 100.1403 },
    { name: 'แม่ฮ่องสอน', lat: 19.3003, lon: 97.9654 },
    { name: 'ลำปาง', lat: 18.2888, lon: 99.4930 },
    { name: 'ลำพูน', lat: 18.5745, lon: 99.0087 },
    { name: 'อุตรดิตถ์', lat: 17.6201, lon: 100.0993 },

    // ภาคตะวันออกเฉียงเหนือ (20)
    { name: 'กาฬสินธุ์', lat: 16.4328, lon: 103.5061 },
    { name: 'ขอนแก่น', lat: 16.4322, lon: 102.8236 },
    { name: 'ชัยภูมิ', lat: 15.8105, lon: 102.0315 },
    { name: 'นครพนม', lat: 17.4048, lon: 104.7819 },
    { name: 'นครราชสีมา', lat: 14.9799, lon: 102.0978 },
    { name: 'บึงกาฬ', lat: 18.3638, lon: 103.6520 },
    { name: 'บุรีรัมย์', lat: 14.9930, lon: 103.1029 },
    { name: 'มหาสารคาม', lat: 16.1848, lon: 103.2988 },
    { name: 'มุกดาหาร', lat: 16.5453, lon: 104.7226 },
    { name: 'ยโสธร', lat: 15.7926, lon: 104.1487 },
    { name: 'ร้อยเอ็ด', lat: 16.0524, lon: 103.6520 },
    { name: 'เลย', lat: 17.4860, lon: 101.7223 },
    { name: 'ศรีสะเกษ', lat: 15.1186, lon: 104.3220 },
    { name: 'สกลนคร', lat: 17.1664, lon: 104.1486 },
    { name: 'สุรินทร์', lat: 14.8818, lon: 103.4936 },
    { name: 'หนองคาย', lat: 17.8783, lon: 102.7420 },
    { name: 'หนองบัวลำภู', lat: 17.2045, lon: 102.4357 },
    { name: 'อำนาจเจริญ', lat: 15.8659, lon: 104.6258 },
    { name: 'อุดรธานี', lat: 17.4138, lon: 102.7872 },
    { name: 'อุบลราชธานี', lat: 15.2297, lon: 104.8571 },

    // ภาคตะวันออก (7)
    { name: 'จันทบุรี', lat: 12.6114, lon: 102.1039 },
    { name: 'ฉะเชิงเทรา', lat: 13.6904, lon: 101.0719 },
    { name: 'ชลบุรี', lat: 13.3611, lon: 100.9847 },
    { name: 'ตราด', lat: 12.2428, lon: 102.5175 },
    { name: 'ปราจีนบุรี', lat: 14.0500, lon: 101.3667 },
    { name: 'ระยอง', lat: 12.6814, lon: 101.2816 },
    { name: 'สระแก้ว', lat: 13.8240, lon: 102.0722 },

    // ภาคตะวันตก (5)
    { name: 'กาญจนบุรี', lat: 14.0195, lon: 99.5297 },
    { name: 'ตาก', lat: 16.8770, lon: 99.1253 },
    { name: 'ประจวบคีรีขันธ์', lat: 11.8124, lon: 99.7975 },
    { name: 'เพชรบุรี', lat: 13.1121, lon: 99.9431 },
    { name: 'ราชบุรี', lat: 13.5283, lon: 99.8134 },

    // ภาคใต้ (14)
    { name: 'กระบี่', lat: 8.0863, lon: 98.9063 },
    { name: 'ชุมพร', lat: 10.4930, lon: 99.1800 },
    { name: 'ตรัง', lat: 7.5563, lon: 99.6114 },
    { name: 'นครศรีธรรมราช', lat: 8.4333, lon: 99.9667 },
    { name: 'นราธิวาส', lat: 6.4255, lon: 101.8253 },
    { name: 'ปัตตานี', lat: 6.8673, lon: 101.2501 },
    { name: 'พังงา', lat: 8.4501, lon: 98.5283 },
    { name: 'พัทลุง', lat: 7.6167, lon: 100.0833 },
    { name: 'ภูเก็ต', lat: 7.8804, lon: 98.3923 },
    { name: 'ยะลา', lat: 6.5411, lon: 101.2804 },
    { name: 'ระนอง', lat: 9.9658, lon: 98.6348 },
    { name: 'สงขลา', lat: 7.1898, lon: 100.5954 },
    { name: 'สตูล', lat: 6.6214, lon: 100.0673 },
    { name: 'สุราษฎร์ธานี', lat: 9.1333, lon: 99.3333 }
];

let provincesData = []; 
let currentSort = 'best'; 
let currentSearch = '';
let currentView = 'list';
let myLocationMarker = null;

// Map & Chart Variables
let map = null;
let markersLayer = null;
let heatLayer = null;
let isHeatmapActive = true;
let forecastChart = null; 

// DOM Elements
const container = document.getElementById('provinces-container');
const mapContainer = document.getElementById('map-container');
const template = document.getElementById('card-template');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const liveBadge = document.getElementById('live-badge');
const dataSourceText = document.getElementById('data-source-text');
const btnListView = document.getElementById('btn-list-view');
const btnMapView = document.getElementById('btn-map-view');
const btnKnowledge = document.getElementById('btn-knowledge');
const btnGps = document.getElementById('btn-gps');
const heatmapToggle = document.getElementById('heatmap-toggle');
const heatScaleLegend = document.getElementById('heat-scale-legend');
const btnThemeToggle = document.getElementById('btn-theme-toggle');

// Detail Modal Elements
const detailModal = document.getElementById('detail-modal');
const closeDetailModal = document.getElementById('close-modal');
const modalProvince = document.getElementById('modal-province');
const modalAqiValue = document.getElementById('modal-aqi-value');
const modalTrend = document.getElementById('modal-trend');
const modalStatus = document.getElementById('modal-status');
const modalPm25 = document.getElementById('modal-pm25');
const modalPm10 = document.getElementById('modal-pm10');
const modalTemp = document.getElementById('modal-temp');
const modalHumidity = document.getElementById('modal-humidity');
const modalWind = document.getElementById('modal-wind');
const modalTime = document.getElementById('modal-time');
const modalCoords = document.getElementById('modal-coords');
const modalContent = detailModal.querySelector('.modal-content');
const chartLoader = document.getElementById('chart-loader');

// Knowledge Modal Elements
const knowledgeModal = document.getElementById('knowledge-modal');
const closeKnowledgeModal = document.getElementById('close-knowledge-modal');

// คำนวณเทรนด์ฝุ่น (ดีขึ้น แย่ลง ทรงตัว)
function getTrendHTML(currentAqi, yesterdayAqi) {
    if (yesterdayAqi === null || yesterdayAqi === undefined) return '';
    const diff = currentAqi - yesterdayAqi;
    
    if (diff > 5) {
        return `<span class="trend-indicator trend-worse" title="เมื่อวาน: ${yesterdayAqi}">▲ แย่ลง (+${diff})</span>`;
    } else if (diff < -5) {
        return `<span class="trend-indicator trend-better" title="เมื่อวาน: ${yesterdayAqi}">▼ ดีขึ้น (${diff})</span>`;
    } else {
        return `<span class="trend-indicator trend-stable" title="เมื่อวาน: ${yesterdayAqi}">- ทรงตัว</span>`;
    }
}

// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme') || 'dark'; // Glassmorphism default is dark
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (btnThemeToggle) btnThemeToggle.textContent = '🌙 โหมดมืด';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (btnThemeToggle) btnThemeToggle.textContent = '☀️ โหมดสว่าง';
}

if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            btnThemeToggle.textContent = '☀️ โหมดสว่าง';
        } else {
            btnThemeToggle.textContent = '🌙 โหมดมืด';
        }

        // Update chart text colors if it's currently open
        if (forecastChart) {
            const textColor = newTheme === 'dark' ? '#94a3b8' : '#64748b';
            const gridColor = newTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            
            forecastChart.options.scales.x.ticks.color = textColor;
            forecastChart.options.scales.y.ticks.color = textColor;
            forecastChart.options.scales.y.grid.color = gridColor;
            
            // Update tooltip background
            forecastChart.options.plugins.tooltip.backgroundColor = newTheme === 'dark' ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)';
            forecastChart.options.plugins.tooltip.titleColor = newTheme === 'dark' ? '#94a3b8' : '#64748b';
            forecastChart.options.plugins.tooltip.bodyColor = newTheme === 'dark' ? '#fff' : '#1e293b';
            forecastChart.options.plugins.tooltip.borderColor = newTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

            forecastChart.update();
        }
    });
}

function getAqiInfo(aqi) {
    if (aqi === null || aqi === undefined) return { level: 'good', text: 'ไม่มีข้อมูล' };
    if (aqi <= 50) return { level: 'good', text: 'ดี (Good)' };
    if (aqi <= 100) return { level: 'moderate', text: 'ปานกลาง (Moderate)' };
    if (aqi <= 150) return { level: 'sensitive', text: 'เริ่มมีผลกระทบ (Unhealthy for Sensitive)' };
    if (aqi <= 200) return { level: 'unhealthy', text: 'มีผลกระทบ (Unhealthy)' };
    if (aqi <= 300) return { level: 'very-unhealthy', text: 'แย่มาก (Very Unhealthy)' };
    return { level: 'hazardous', text: 'อันตราย (Hazardous)' };
}

// โหลดข้อมูลกราฟพยากรณ์
async function loadForecastChart(lat, lon) {
    chartLoader.textContent = 'กำลังโหลดข้อมูลพยากรณ์...';
    chartLoader.classList.add('active');

    try {
        const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm2_5&past_hours=12&forecast_hours=24&timezone=auto`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch forecast');
        const data = await res.json();

        const times = data.hourly.time;
        const pm25Values = data.hourly.pm2_5;

        const labels = times.map(t => {
            const d = new Date(t);
            const day = d.getDate();
            const timeStr = d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
            return `${day} - ${timeStr}`;
        });

        if (forecastChart) {
            forecastChart.destroy();
        }

        const ctx = document.getElementById('forecast-chart').getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(96, 165, 250, 0.5)'); 
        gradient.addColorStop(1, 'rgba(96, 165, 250, 0.0)');

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const textColor = currentTheme === 'dark' ? '#94a3b8' : '#64748b';
        const gridColor = currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
        const ttBgColor = currentTheme === 'dark' ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)';
        const ttTitleColor = currentTheme === 'dark' ? '#94a3b8' : '#64748b';
        const ttBodyColor = currentTheme === 'dark' ? '#fff' : '#1e293b';
        const ttBorderColor = currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

        forecastChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'PM2.5 (µg/m³)',
                    data: pm25Values,
                    borderColor: '#60a5fa',
                    backgroundColor: gradient,
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4, 
                    pointRadius: 0, 
                    pointHoverRadius: 6, 
                    pointBackgroundColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: ttBgColor,
                        titleColor: ttTitleColor,
                        bodyColor: ttBodyColor,
                        borderColor: ttBorderColor,
                        borderWidth: 1,
                        callbacks: {
                            title: function(context) {
                                return `เวลา: ${context[0].label}`;
                            },
                            label: function(context) {
                                return `PM2.5: ${context.parsed.y} µg/m³`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { 
                            color: textColor,
                            maxTicksLimit: 6, 
                            callback: function(val, index) {
                                const fullLabel = this.getLabelForValue(val);
                                return fullLabel.split(' - ')[1]; 
                            }
                        }
                    },
                    y: {
                        grid: { color: gridColor },
                        ticks: { color: textColor },
                        beginAtZero: true
                    }
                }
            }
        });

        chartLoader.classList.remove('active');

    } catch (err) {
        console.error('Forecast Error:', err);
        chartLoader.textContent = 'ขออภัย ไม่สามารถโหลดข้อมูลพยากรณ์ได้';
    }
}

// เปิด Detail Modal
function openDetailModal(prov) {
    const info = getAqiInfo(prov.aqi);
    
    modalContent.setAttribute('data-aqi-level', info.level);
    modalProvince.textContent = prov.name;
    modalAqiValue.textContent = prov.aqi;
    
    modalTrend.innerHTML = getTrendHTML(prov.aqi, prov.yesterdayAqi);

    modalStatus.textContent = info.text;
    modalPm25.textContent = prov.pm25.toFixed(1);
    modalPm10.textContent = prov.pm10 ? prov.pm10.toFixed(1) : '-';
    modalTemp.textContent = prov.temp !== undefined ? prov.temp.toFixed(1) : '-';
    modalHumidity.textContent = prov.humidity !== undefined ? prov.humidity : '-';
    modalWind.textContent = prov.wind !== undefined ? prov.wind.toFixed(1) : '-';
    modalCoords.textContent = `${prov.lat.toFixed(4)}, ${prov.lon.toFixed(4)}`;
    
    if (prov.time) {
        const date = new Date(prov.time);
        modalTime.textContent = date.toLocaleString('th-TH');
    } else {
        modalTime.textContent = '-';
    }

    detailModal.classList.add('active');
    loadForecastChart(prov.lat, prov.lon);
}

closeDetailModal.addEventListener('click', () => detailModal.classList.remove('active'));
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) detailModal.classList.remove('active');
});

btnKnowledge.addEventListener('click', () => knowledgeModal.classList.add('active'));
closeKnowledgeModal.addEventListener('click', () => knowledgeModal.classList.remove('active'));
knowledgeModal.addEventListener('click', (e) => {
    if (e.target === knowledgeModal) knowledgeModal.classList.remove('active');
});

// ดึงข้อมูลหลัก
async function fetchAirQualityData() {
    const lats = provinces.map(p => p.lat).join(',');
    const lons = provinces.map(p => p.lon).join(',');
    
    const aqiApiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lats}&longitude=${lons}&current=us_aqi,pm2_5,pm10&hourly=us_aqi&past_days=1&timezone=auto`;
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    try {
        const [aqiRes, weatherRes] = await Promise.all([
            fetch(aqiApiUrl),
            fetch(weatherApiUrl)
        ]);

        if (!aqiRes.ok || !weatherRes.ok) throw new Error('Network response was not ok');
        
        const aqiData = await aqiRes.json();
        const weatherData = await weatherRes.json();
        
        const aqiResults = Array.isArray(aqiData) ? aqiData : [aqiData];
        const weatherResults = Array.isArray(weatherData) ? weatherData : [weatherData];
        
        const currentTime = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
        
        liveBadge.className = 'live-badge';
        dataSourceText.textContent = `อัปเดตล่าสุด: ${currentTime} (Live Open-Meteo)`;
        
        provincesData = provinces.map((prov, index) => {
            const currentAqi = aqiResults[index]?.current || {};
            const hourlyAqi = aqiResults[index]?.hourly || {};
            const currentWea = weatherResults[index]?.current || {};

            let yesterdayAqi = null;
            if (currentAqi.time && hourlyAqi.time) {
                const currDate = new Date(currentAqi.time);
                const yesterdayDate = new Date(currDate.getTime() - 24 * 60 * 60 * 1000);
                
                const pad = n => n.toString().padStart(2, '0');
                const yesterdayStr = `${yesterdayDate.getFullYear()}-${pad(yesterdayDate.getMonth() + 1)}-${pad(yesterdayDate.getDate())}T${pad(yesterdayDate.getHours())}:00`;
                
                const yIndex = hourlyAqi.time.indexOf(yesterdayStr);
                if (yIndex !== -1) {
                    yesterdayAqi = hourlyAqi.us_aqi[yIndex];
                }
            }

            return {
                ...prov,
                aqi: currentAqi.us_aqi || 0,
                yesterdayAqi: yesterdayAqi,
                pm25: currentAqi.pm2_5 || 0,
                pm10: currentAqi.pm10 || 0,
                temp: currentWea.temperature_2m || 0,
                humidity: currentWea.relative_humidity_2m || 0,
                wind: currentWea.wind_speed_10m || 0,
                time: currentAqi.time || new Date().toISOString()
            };
        });

        renderCards();
        if (map) updateMapMarkers();

    } catch (error) {
        console.error('Error fetching API:', error);
        liveBadge.className = 'live-badge error';
        dataSourceText.textContent = 'การเชื่อมต่อ API ขัดข้อง (Offline)';
        
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #ef4444;">
            เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองรีเฟรชหน้าเว็บอีกครั้ง
        </div>`;
    }
}

// GPS Logic
btnGps.addEventListener('click', () => {
    if (!navigator.geolocation) {
        alert('บราวเซอร์ของคุณไม่รองรับระบบ GPS');
        return;
    }

    const originalText = btnGps.textContent;
    btnGps.textContent = 'กำลังหาตำแหน่ง... ⏳';
    btnGps.classList.add('loading');

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                const aqiApiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm2_5,pm10&hourly=us_aqi&past_days=1&timezone=auto`;
                const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;

                const [aqiRes, weatherRes] = await Promise.all([
                    fetch(aqiApiUrl),
                    fetch(weatherApiUrl)
                ]);

                if (!aqiRes.ok || !weatherRes.ok) throw new Error('API Error');
                
                const aqiData = await aqiRes.json();
                const weatherData = await weatherRes.json();
                
                const currentAqi = aqiData.current || {};
                const hourlyAqi = aqiData.hourly || {};
                const currentWea = weatherData.current || {};

                let yesterdayAqi = null;
                if (currentAqi.time && hourlyAqi.time) {
                    const currDate = new Date(currentAqi.time);
                    const yesterdayDate = new Date(currDate.getTime() - 24 * 60 * 60 * 1000);
                    const pad = n => n.toString().padStart(2, '0');
                    const yesterdayStr = `${yesterdayDate.getFullYear()}-${pad(yesterdayDate.getMonth() + 1)}-${pad(yesterdayDate.getDate())}T${pad(yesterdayDate.getHours())}:00`;
                    const yIndex = hourlyAqi.time.indexOf(yesterdayStr);
                    if (yIndex !== -1) {
                        yesterdayAqi = hourlyAqi.us_aqi[yIndex];
                    }
                }

                const myLocData = {
                    name: '📍 ตำแหน่งของคุณ (GPS)',
                    lat: lat,
                    lon: lon,
                    aqi: currentAqi.us_aqi || 0,
                    yesterdayAqi: yesterdayAqi,
                    pm25: currentAqi.pm2_5 || 0,
                    pm10: currentAqi.pm10 || 0,
                    temp: currentWea.temperature_2m || 0,
                    humidity: currentWea.relative_humidity_2m || 0,
                    wind: currentWea.wind_speed_10m || 0,
                    time: currentAqi.time || new Date().toISOString()
                };

                openDetailModal(myLocData);

                if (map) {
                    map.setView([lat, lon], 12);
                    if (myLocationMarker) map.removeLayer(myLocationMarker);
                    
                    const info = getAqiInfo(myLocData.aqi);
                    const customIcon = L.divIcon({
                        className: 'custom-leaflet-icon',
                        html: `<div class="custom-marker marker-${info.level}" style="border: 3px solid #60a5fa; box-shadow: 0 0 15px #60a5fa; transform: scale(1.2);">${myLocData.aqi}</div>`,
                        iconSize: [38, 38],
                        iconAnchor: [19, 19]
                    });

                    myLocationMarker = L.marker([lat, lon], { icon: customIcon, zIndexOffset: 1000 }).addTo(map);
                    myLocationMarker.bindTooltip(`<b>📍 ตำแหน่งของคุณ</b><br>AQI: ${myLocData.aqi}<br>🌡️ ${myLocData.temp}°C`, { direction: 'top', offset: [0, -15] }).openTooltip();
                    myLocationMarker.on('click', () => openDetailModal(myLocData));
                    
                    toggleView('map');
                }

            } catch (error) {
                console.error(error);
                alert('ไม่สามารถดึงข้อมูลคุณภาพอากาศ ณ ตำแหน่งของคุณได้');
            } finally {
                btnGps.textContent = originalText;
                btnGps.classList.remove('loading');
            }
        },
        (error) => {
            console.error(error);
            alert('ไม่สามารถระบุตำแหน่งได้ กรุณาอนุญาตให้บราวเซอร์เข้าถึง Location (GPS) ของคุณ');
            btnGps.textContent = originalText;
            btnGps.classList.remove('loading');
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
});

// แสดงการ์ด
function renderCards() {
    if (provincesData.length === 0) return;

    let filteredData = provincesData.filter(prov => 
        prov.name.toLowerCase().includes(currentSearch.toLowerCase())
    );

    filteredData.sort((a, b) => {
        if (currentSort === 'best') return a.aqi - b.aqi;
        if (currentSort === 'worst') return b.aqi - a.aqi;
        return a.name.localeCompare(b.name, 'th');
    });

    container.innerHTML = '';

    filteredData.forEach((prov, index) => {
        const info = getAqiInfo(prov.aqi);
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.province-card');
        
        card.setAttribute('data-aqi-level', info.level);
        card.querySelector('.province-name').textContent = prov.name;
        card.querySelector('.aqi-value').textContent = prov.aqi;
        
        card.querySelector('.trend-indicator').innerHTML = getTrendHTML(prov.aqi, prov.yesterdayAqi);

        card.querySelector('.pollutant-value').textContent = prov.pm25.toFixed(1) + ' µg/m³';
        card.querySelector('.status-text').textContent = info.text;
        
        card.querySelector('.temp-value').textContent = prov.temp.toFixed(1);
        card.querySelector('.humidity-value').textContent = prov.humidity;
        card.querySelector('.wind-value').textContent = prov.wind.toFixed(1);
        
        card.style.animationDelay = `${(index % 10) * 0.05}s`;

        card.addEventListener('click', () => openDetailModal(prov));

        container.appendChild(clone);
    });

    if (filteredData.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">ไม่พบข้อมูลจังหวัดที่ค้นหา</p>';
    }
}

// Leaflet Map & Heatmap
heatmapToggle.addEventListener('change', (e) => {
    isHeatmapActive = e.target.checked;
    
    // Toggle Legend visibility
    if (isHeatmapActive) {
        heatScaleLegend.classList.add('active');
    } else {
        heatScaleLegend.classList.remove('active');
    }

    updateMapMarkers();
});

function initMap() {
    map = L.map('map').setView([13.7, 100.5], 5);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);
    markersLayer = L.layerGroup().addTo(map);
}

function updateMapMarkers() {
    if (!map) return;
    markersLayer.clearLayers();
    
    if (heatLayer) {
        map.removeLayer(heatLayer);
        heatLayer = null;
    }

    let filteredData = provincesData.filter(prov => 
        prov.name.toLowerCase().includes(currentSearch.toLowerCase())
    );

    let heatPoints = [];

    filteredData.forEach(prov => {
        const info = getAqiInfo(prov.aqi);
        
        let intensity = Math.min(prov.aqi / 300, 1.0);
        heatPoints.push([prov.lat, prov.lon, intensity]);

        const customIcon = L.divIcon({
            className: 'custom-leaflet-icon',
            html: `<div class="custom-marker marker-${info.level}">${prov.aqi}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });

        const marker = L.marker([prov.lat, prov.lon], { icon: customIcon });
        
        marker.on('click', () => {
            openDetailModal(prov);
        });

        const trendStr = prov.yesterdayAqi ? `<br>เมื่อวาน: ${prov.yesterdayAqi}` : '';
        marker.bindTooltip(`<b>${prov.name}</b><br>AQI: ${prov.aqi}${trendStr}<br>🌡️ ${prov.temp}°C`, { direction: 'top', offset: [0, -10] });
        markersLayer.addLayer(marker);
    });
    
    // Create Heatmap Layer with optimized radius/blur to cover the country beautifully
    if (isHeatmapActive && heatPoints.length > 0) {
        heatLayer = L.heatLayer(heatPoints, {
            radius: 50, // Increased radius to blend points better across the map
            blur: 40,   // Smooth edges
            maxZoom: 8,
            gradient: {
                0.2: '#10b981', // Good
                0.4: '#fbbf24', // Moderate
                0.6: '#f97316', // Sensitive
                0.8: '#ef4444', // Unhealthy
                0.9: '#8b5cf6', // Very Unhealthy
                1.0: '#7f1d1d'  // Hazardous
            }
        }).addTo(map);
    }
    
    if (myLocationMarker) {
        myLocationMarker.addTo(map);
    }
}

function toggleView(viewType) {
    currentView = viewType;
    
    if (viewType === 'list') {
        btnListView.classList.add('active');
        btnMapView.classList.remove('active');
        container.classList.remove('hidden');
        mapContainer.classList.add('hidden');
    } else {
        btnListView.classList.remove('active');
        btnMapView.classList.add('active');
        container.classList.add('hidden');
        mapContainer.classList.remove('hidden');
        
        if (!map) {
            initMap();
            updateMapMarkers();
        }
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
}

sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderCards();
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderCards();
    if (map) updateMapMarkers();
});

btnListView.addEventListener('click', () => toggleView('list'));
btnMapView.addEventListener('click', () => toggleView('map'));

fetchAirQualityData();
