// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');
const bookingForm = document.getElementById('booking-form');
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const guestsSelect = document.getElementById('guests');

// Set minimum date for check-in (today)
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

checkInInput.min = formatDate(today);
checkOutInput.min = formatDate(tomorrow);

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero slider images - Living room and bedroom only (no washroom)
const heroImages = [
    'assets/images/rooms/Living Room 1.jpeg',
    'assets/images/rooms/Living Room 2.jpeg',
    'assets/images/rooms/Bedroom.jpeg',
    'assets/images/rooms/Bedroom 2.jpeg',
    'assets/images/rooms/Study Area.jpeg',
    'assets/images/rooms/Kitchen.jpeg'
].map(img => img.replace(/ /g, '%20'));

// All gallery images
const galleryImages = [
    'gallery/Living%20Room%201.jpeg',
    'gallery/Living%20Room%202.jpeg',
    'gallery/Living%20Room%203.jpeg',
    'gallery/Living%20Room%204.jpeg',
    'gallery/Living%20Room%205.jpeg',
    'gallery/Living%20Room.jpeg',
    'gallery/Bedroom.jpeg',
    'gallery/Bedroom%202.jpeg',
    'gallery/Bedroom%203.jpeg',
    'gallery/Bedroom%204.jpeg',
    'gallery/Bedroom%205.jpeg',
    'gallery/Bedroom%2035.jpeg',
    'gallery/Kitchen.jpeg',
    'gallery/Study%20Area.jpeg',
    'gallery/Study%20Area%202.jpeg',
    'gallery/Study%20Area%203.jpeg',
    'gallery/Stairway.jpeg',
    'gallery/Stairway%202.jpeg',
    'gallery/Stairway%203.jpeg',
    'gallery/Stairway%204.jpeg',
    'gallery/Stairway%205.jpeg',
    'gallery/Washroom.jpeg',
    'gallery/Washroom%201.jpeg',
    'gallery/Washroom%202.jpeg',
    'gallery/Washroom%203.jpeg',
    'gallery/Washroom%204.jpeg',
    'gallery/Washroom5.jpeg'
];

// Initialize Swiper for hero slider
const initHeroSlider = () => {
    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Add hero images to the slider
    const heroSliderWrapper = document.querySelector('.swiper-wrapper');
    if (heroSliderWrapper) {
        heroImages.forEach(image => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.style.backgroundImage = `url('${image}')`;
            heroSliderWrapper.appendChild(slide);
        });
    }
};

// Social Media Links
const socialLinks = {
    airbnb: 'https://airbnb.com/h/rokamiloft',
    facebook: 'https://web.facebook.com/rokamifurnishedapartment/',
    instagram: 'https://www.instagram.com/rokami_apartments/',
    whatsapp: 'https://wa.me/254797819688'
};

// Room data for Rokami Loft
// Currency conversion rates (example rates, should be updated with real-time rates in production)
const exchangeRates = {
    'KES': 1,             // Kenyan Shilling (base currency)
    'USD': 0.0077,        // 1 KES = 0.0077 USD (example rate)
    'EUR': 0.0071,        // 1 KES = 0.0071 EUR (example rate)
    'GBP': 0.0061,        // 1 KES = 0.0061 GBP (example rate)
    'ZAR': 0.14,          // 1 KES = 0.14 ZAR (example rate)
};

const rooms = [
    {
        id: 1,
        name: 'Rokami Loft - 1 Bedroom Apartment',
        price: 4000,      // Price per night in KES
        currency: 'KES',  // Base currency
        capacity: 2,
        bed: '1 King Size Bed',
        image: 'rooms/Living%20Room%201.jpeg',
        amenities: [
            'Free WiFi', 
            'Fully Equipped Kitchen', 
            'Free Parking', 
            'Smart TV', 
            'Dedicated Workspace',
            'Security',
            'City Skyline View',
            'Self Check-in',
            'Elevator Access'
        ],
        description: 'Discover the epitome of quiet and serene at Rokami Loft, a stunning 1-bedroom loft nestled in a peaceful estate. Our loft is more than just a place to stay; it\'s an experience designed for those who appreciate spacious and beautifully crafted spaces.'
    }
];

// Room sections for detailed view
const roomSections = [
    {
        name: 'Living Room',
        description: 'Spacious living area with city skyline views, comfortable seating, and smart TV.',
        images: ['rooms/Living%20Room%201.jpeg', 'rooms/Living%20Room%202.jpeg']
    },
    {
        name: 'Bedroom',
        description: 'Cozy bedroom with king-size bed, quality linens, and ample storage.',
        images: ['rooms/Bedroom.jpeg', 'rooms/Bedroom%202.jpeg']
    },
    {
        name: 'Kitchen',
        description: 'Fully equipped kitchen with modern appliances for preparing your own meals.',
        images: ['rooms/Kitchen.jpeg']
    },
    {
        name: 'Study Area',
        description: 'Dedicated workspace perfect for remote work with high-speed WiFi.',
        images: ['rooms/Study%20Area.jpeg']
    },
    {
        name: 'Bathroom',
        description: 'Clean bathroom with hot water, shower, and quality toiletries.',
        images: ['rooms/Washroom%201.jpeg']
    }
];

// What this place offers - Amenities
const amenities = {
    scenicViews: {
        title: 'Scenic Views',
        icon: 'fas fa-mountain',
        items: ['City skyline view']
    },
    bathroom: {
        title: 'Bathroom',
        icon: 'fas fa-bath',
        items: ['Cleaning products', 'Shampoo', 'Conditioner', 'Body soap', 'Bidet', 'Hot water', 'Shower gel']
    },
    bedroomLaundry: {
        title: 'Bedroom & Laundry',
        icon: 'fas fa-bed',
        items: ['Essentials (Towels, bed sheets, soap, toilet paper)', 'Hangers', 'Bed linens', 'Extra pillows and blankets', 'Iron', 'Clothing storage']
    },
    entertainment: {
        title: 'Entertainment',
        icon: 'fas fa-tv',
        items: ['Smart TV']
    },
    homeSafety: {
        title: 'Home Safety',
        icon: 'fas fa-shield-alt',
        items: ['Fire extinguisher']
    },
    internetOffice: {
        title: 'Internet & Office',
        icon: 'fas fa-wifi',
        items: ['High-speed WiFi', 'Dedicated workspace']
    },
    kitchen: {
        title: 'Kitchen & Dining',
        icon: 'fas fa-utensils',
        items: ['Fully equipped kitchen', 'Space where guests can cook their own meals']
    },
    location: {
        title: 'Location Features',
        icon: 'fas fa-map-marker-alt',
        items: ['Laundromat nearby']
    },
    parking: {
        title: 'Parking & Facilities',
        icon: 'fas fa-parking',
        items: ['Free parking on premises', '2 parking floors', 'Elevator/Lift access']
    },
    services: {
        title: 'Services',
        icon: 'fas fa-concierge-bell',
        items: ['Self check-in with lockbox']
    }
};

// Host information
const hostInfo = {
    name: 'Hope',
    verified: true,
    superhost: true,
    responseRate: '100%',
    responseTime: 'within an hour',
    reviews: 53,
    rating: 4.92,
    yearsHosting: 4,
    languages: ['English', 'Swahili'],
    location: 'Nairobi, Kenya'
};

// House rules
const houseRules = {
    checkIn: '1:00 PM - 10:00 PM',
    checkOut: 'Before 10:00 AM',
    checkInMethod: 'Self check-in with lockbox',
    maxGuests: 2,
    duringStay: ['2 guests maximum'],
    beforeLeave: ['Turn things off', 'Return keys', 'Lock up']
};

// Location info
const locationInfo = {
    address: 'Joyland, Ruaka',
    description: 'The house is located at Joyland Ruaka. It has 2 parking floors and lift access to the house.',
    mapLink: 'https://maps.app.goo.gl/aXv9h3YKhxnkf2Sj8',
    phone: '+254 797 819688',
    nearbyAttractions: [
        { name: 'Two Rivers Mall', distance: '5 minutes' },
        { name: 'Village Market Mall', distance: '10 minutes' },
        { name: 'Rosslyn Riviera Mall', distance: '10 minutes' },
        { name: 'Westlands & Gigiri', distance: '15 minutes' }
    ]
};

// Guest reviews - Real reviews from Google & Airbnb
const reviews = [
    // Google Reviews
    {
        name: 'Joel Mugo',
        rating: 5,
        date: '2023-12-01',
        text: 'A serene escape in a well-appointed loft. The setup was fantastic, offering a peaceful retreat. The customer service was top-notch, making the stay truly enjoyable. The house exuded charm and made for a lovely stay.',
        source: 'Google',
        yearsOnPlatform: null
    },
    {
        name: 'Claire Akinyi',
        rating: 5,
        date: '2023-11-15',
        text: 'Rokami loft has the best host ever. I enjoyed my stay there, super clean and cosy. Can\'t wait to come again.',
        source: 'Google',
        yearsOnPlatform: null
    },
    {
        name: 'Liam G',
        rating: 5,
        date: '2023-10-20',
        text: 'Best apartment... Had an amazing time. Now this, I would recommend.',
        source: 'Google',
        yearsOnPlatform: null
    },
    {
        name: 'Ann Mwuthia',
        rating: 5,
        date: '2023-09-15',
        text: 'I loved my stay. Such a beautiful space!',
        source: 'Google',
        yearsOnPlatform: null
    },
    {
        name: 'Stephen Gachuri',
        rating: 5,
        date: '2023-08-10',
        text: 'I rarely comment but with this one I must. Nicely decorated house and good for techies 😊',
        source: 'Google',
        yearsOnPlatform: null
    },
    {
        name: 'Dennis Ruriga',
        rating: 4,
        date: '2023-07-20',
        text: 'I enjoyed my stay. Definitely recommend.',
        source: 'Google',
        yearsOnPlatform: null
    },
    {
        name: 'Jotham Mulika',
        rating: 5,
        date: '2023-06-15',
        text: 'Good',
        source: 'Google',
        yearsOnPlatform: null
    },
    {
        name: 'Rosebel Mutisw',
        rating: 5,
        date: '2023-05-10',
        text: 'Excellent',
        source: 'Google',
        yearsOnPlatform: null
    },
    // Airbnb Reviews
    {
        name: 'Dan',
        rating: 5,
        date: '2025-04-01',
        text: 'The photos really don\'t do this place justice, it\'s a very beautiful apartment with nice serene views of the green hills and valleys of Banana and beyond. The host is also very responsive easing the strain of staying away from home.',
        source: 'Airbnb',
        location: 'Nairobi, Kenya',
        yearsOnPlatform: null
    },
    {
        name: 'Jer',
        rating: 5,
        date: '2025-10-01',
        text: 'Nice stay, good views, cozy space.',
        source: 'Airbnb',
        location: 'Oakland, California',
        yearsOnPlatform: null
    },
    {
        name: 'Will',
        rating: 4,
        date: '2025-10-01',
        text: 'Place ok! Host was amazing and responsive.',
        source: 'Airbnb',
        location: 'Cambridge, United Kingdom',
        yearsOnPlatform: null
    },
    {
        name: 'Lovell',
        rating: 5,
        date: '2025-08-01',
        text: 'Hope\'s place is very beautiful and serene. I loved the place.',
        source: 'Airbnb',
        location: 'Accra, Ghana',
        yearsOnPlatform: null
    },
    {
        name: 'Tony',
        rating: 5,
        date: '2025-08-01',
        text: 'Awesome',
        source: 'Airbnb',
        yearsOnPlatform: 8
    },
    {
        name: 'Andrew',
        rating: 5,
        date: '2024-01-01',
        text: 'Hope\'s Airbnb in Ruaka, Nairobi, exceeded all expectations. The flat is situated in an excellent neighborhood, ensuring a peaceful and secure stay. The cleanliness of the place was impeccable, creating a comfortable and inviting atmosphere. Hope\'s attention to detail and hospitality truly made the experience exceptional. I highly recommend this Airbnb to anyone looking for a top-notch stay in Nairobi.',
        source: 'Airbnb',
        location: 'Kampala, Uganda',
        yearsOnPlatform: null
    },
    {
        name: 'Nicole',
        rating: 5,
        date: '2024-06-01',
        text: 'Hope is an amazing host. Her apartment was exactly as described. The surrounding area was peaceful with a rooster at sunrise and a cow throughout the day. Hope was always responsive and easy going. Excellent host.',
        source: 'Airbnb',
        location: 'France',
        yearsOnPlatform: null
    },
    {
        name: 'Antony',
        rating: 5,
        date: '2024-02-01',
        text: 'Easily one of the best experiences I have had in an airbnb. The place was very clean and Hope was very responsive and friendly. I would recommend this listing to anyone without hesitation. I will definitely be back.',
        source: 'Airbnb',
        yearsOnPlatform: 6
    },
    {
        name: 'Alvin',
        rating: 5,
        date: '2024-01-01',
        text: 'Hope is a great host, she has a spacious and comfortable space. Everything about that place is great, great views, uninterrupted internet and safe environment. I would definitely recommend any person looking for long or even short term stay.',
        source: 'Airbnb',
        yearsOnPlatform: 5
    },
    {
        name: 'Irene',
        rating: 5,
        date: '2024-11-01',
        text: 'It\'s a beautiful home, great space and Hope was very helpful and accommodating, would definitely recommend 👍',
        source: 'Airbnb',
        yearsOnPlatform: 5
    },
    {
        name: 'Ben',
        rating: 5,
        date: '2024-07-01',
        text: 'The apartment was absolutely spotless and beautifully decorated. Hope went above and beyond to make sure we felt at home. Will definitely be returning.',
        source: 'Airbnb',
        yearsOnPlatform: 3
    },
    {
        name: 'Hellen',
        rating: 5,
        date: '2024-01-01',
        text: 'The apartment is beautiful, clean and very accessible and hope is always available to help.',
        source: 'Airbnb',
        location: 'Naivasha, Kenya',
        yearsOnPlatform: null
    },
    {
        name: 'Ian',
        rating: 5,
        date: '2024-12-01',
        text: 'Quiet, lovely view and private.',
        source: 'Airbnb',
        location: 'Nairobi, Kenya',
        yearsOnPlatform: null
    },
    {
        name: 'Christopher',
        rating: 5,
        date: '2024-10-01',
        text: 'Wonderful place.',
        source: 'Airbnb',
        location: 'Nairobi, Kenya',
        yearsOnPlatform: null
    }
];

// Function to format currency
const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

// Function to convert price
const convertPrice = (price, fromCurrency, toCurrency) => {
    if (fromCurrency === toCurrency) return price;
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    return Math.round(price * rate * 100) / 100; // Round to 2 decimal places
};

// Function to update prices based on selected currency
const updatePrices = (currency) => {
    document.querySelectorAll('.room-card').forEach((card, index) => {
        const room = rooms[index];
        const convertedPrice = convertPrice(room.price, room.currency, currency);
        const priceElement = card.querySelector('.room-price');
        if (priceElement) {
            priceElement.innerHTML = `${formatCurrency(convertedPrice, currency)} <small>/ night</small>`;
        }
    });};

// Function to generate star rating HTML
const getStarRating = (rating) => {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
};

// Render rooms
const renderRooms = () => {
    const roomsContainer = document.getElementById('rooms-container');
    if (!roomsContainer) return;

    // Add currency selector
    const currencySelector = `
        <div class="currency-selector" style="margin-bottom: 2rem; text-align: right;">
            <label for="currency-select" style="margin-right: 0.5rem;">Currency:</label>
            <select id="currency-select" class="form-control" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ddd;">
                <option value="KES">KES</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="ZAR">ZAR</option>
            </select>
        </div>
    `;

    roomsContainer.innerHTML = currencySelector + rooms.map(room => `
        <div class="room-card" data-aos="fade-up">
            <div class="room-image" style="background-image: url('assets/images/${room.image}')">
                <span class="room-price" data-original-price="${room.price}" data-currency="${room.currency}">
                    ${formatCurrency(room.price, room.currency)} <small>/ night</small>
                </span>
            </div>
            <div class="room-details">
                <h3>Rokami Loft - 1 Bedroom Apartment</h3>
                <div class="room-meta">
                    <span><i class="fas fa-user-friends"></i> ${room.capacity} Guests</span>
                    <span><i class="fas fa-bed"></i> ${room.bed}</span>
                </div>
                <div class="room-amenities">
                    ${room.amenities.map(amenity => `<span class="amenity">${amenity}</span>`).join('')}
                </div>
                <a href="#booking" class="btn btn-primary">BOOK NOW</a>
            </div>
        </div>
    `).join('');
    
    // Render room sections after rooms
    renderRoomSections();
};

// Render room sections (Living Room, Bedroom, etc.)
const renderRoomSections = () => {
    const container = document.getElementById('room-sections-container');
    if (!container) return;

    const sectionIcons = {
        'Living Room': 'fas fa-couch',
        'Bedroom': 'fas fa-bed',
        'Kitchen': 'fas fa-utensils',
        'Study Area': 'fas fa-laptop',
        'Bathroom': 'fas fa-bath'
    };

    container.innerHTML = roomSections.map((section, index) => {
        const isSingleImage = section.images.length === 1;
        return `
            <div class="room-section" data-aos="fade-up" data-aos-delay="${index * 50}">
                <div class="room-section-header">
                    <i class="${sectionIcons[section.name] || 'fas fa-home'}"></i>
                    <h3>${section.name}</h3>
                </div>
                <div class="room-section-images ${isSingleImage ? 'single-image' : ''}">
                    ${section.images.map(img => `
                        <div class="room-section-image clickable-image" data-image="assets/images/${img}" data-caption="${section.name}">
                            <img src="assets/images/${img}" alt="${section.name}" loading="lazy">
                            <div class="overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <p class="room-section-description">${section.description}</p>
            </div>
        `;
    }).join('');
    
    // Add click handlers for room section images
    initClickableImages();
};

// Render amenities
const renderAmenities = () => {
    const container = document.getElementById('amenities-container');
    if (!container) return;

    container.innerHTML = Object.values(amenities).map(category => `
        <div class="amenity-category" data-aos="fade-up">
            <div class="amenity-category-header">
                <i class="${category.icon}"></i>
                <h4>${category.title}</h4>
            </div>
            <ul>
                ${category.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
};

// Render gallery
const renderGallery = () => {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = galleryImages.map((image, index) => {
        const imagePath = `assets/images/${image}`;
        const imageName = image.replace('gallery/', '').replace(/%20/g, ' ').replace('.jpeg', '').replace('.jpg', '');
        
        return `
            <div class="gallery-item" data-index="${index}" data-aos="zoom-in" data-aos-delay="${index * 50}">
                <img src="${imagePath}" alt="${imageName}" onerror="this.style.display='none'">
                <div class="overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers for lightbox
    initGalleryLightbox();
};

// Lightbox functionality
let currentImageIndex = 0;

const initGalleryLightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    if (!lightbox) return;
    
    // Open lightbox on gallery item click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox();
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });
    
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
    
    function openLightbox() {
        const imagePath = `assets/images/${galleryImages[currentImageIndex]}`;
        const imageName = galleryImages[currentImageIndex].replace('gallery/', '').replace(/%20/g, ' ').replace('.jpeg', '').replace('.jpg', '');
        
        lightboxImg.src = imagePath;
        lightboxCaption.textContent = imageName;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function navigateLightbox(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
        if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
        openLightbox();
    }
};

// Initialize clickable images (for room sections and other areas)
const initClickableImages = () => {
    const clickableImages = document.querySelectorAll('.clickable-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    if (!lightbox || !clickableImages.length) return;
    
    clickableImages.forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.dataset.image;
            const caption = item.dataset.caption || '';
            
            lightboxImg.src = imageSrc;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Hide navigation for single images
            lightboxPrev.style.display = 'none';
            lightboxNext.style.display = 'none';
        });
    });
    
    // Close on click
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxPrev.style.display = '';
        lightboxNext.style.display = '';
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            lightboxPrev.style.display = '';
            lightboxNext.style.display = '';
        }
    });
};

// Render reviews
const renderReviews = () => {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;

    // Generate initials from name for avatar placeholder
    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    // Get source icon
    const getSourceIcon = (source) => {
        if (source === 'Google') return '<i class="fab fa-google"></i>';
        if (source === 'Airbnb') return '<i class="fab fa-airbnb"></i>';
        return '';
    };

    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="swiper-slide">
            <div class="review-card">
                <div class="review-source ${review.source?.toLowerCase() || ''}">
                    ${getSourceIcon(review.source)} ${review.source || ''}
                </div>
                <div class="review-header">
                    <div class="review-avatar avatar-initials">
                        <span>${getInitials(review.name)}</span>
                    </div>
                    <div class="reviewer-info">
                        <h4>${review.name}</h4>
                        ${review.location ? `<span class="reviewer-location"><i class="fas fa-map-marker-alt"></i> ${review.location}</span>` : ''}
                        ${review.yearsOnPlatform ? `<span class="years-on-platform">${review.yearsOnPlatform} years on ${review.source}</span>` : ''}
                    </div>
                </div>
                <div class="review-rating">
                    ${getStarRating(review.rating)}
                    <span class="rating-text">${review.rating}/5</span>
                </div>
                <div class="review-text">
                    <p>"${review.text}"</p>
                </div>
                <div class="review-date">
                    ${new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </div>
            </div>
        </div>
    `).join('');
};

// Initialize reviews slider
const initReviewsSlider = () => {
    const reviewsSwiper = new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.reviews-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
};

// Handle booking form submission
const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    const guestName = document.getElementById('guest-name').value;
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    const guests = guestsSelect.value;
    
    if (!guestName) {
        alert('Please enter your name.');
        return;
    }
    
    if (!checkIn || !checkOut) {
        alert('Please select both check-in and check-out dates.');
        return;
    }
    
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    
    if (checkOutDate <= checkInDate) {
        alert('Check-out date must be after check-in date.');
        return;
    }
    
    // Format dates for display
    const formattedCheckIn = new Date(checkIn).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const formattedCheckOut = new Date(checkOut).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Calculate number of nights
    const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Create WhatsApp message with proper encoding
    const message = `Hello! I would like to book Rokami Loft.%0A%0A` +
                   `*Name:* ${guestName}%0A` +
                   `*Check-in:* ${formattedCheckIn}%0A` +
                   `*Check-out:* ${formattedCheckOut} (${nights} nights)%0A` +
                   `*Guests:* ${guests}%0A%0A` +
                   `Please confirm availability. Thank you!`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/254797819688?text=${message}`, '_blank');
};

// Event Listeners
if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingSubmit);
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize hero slider
    initHeroSlider();
    
    // Render components
    renderRooms();
    renderAmenities();
    renderGallery();
    renderReviews();
    initReviewsSlider();
    
    // Initialize currency selector
    const currencySelect = document.getElementById('currency-select');
    if (currencySelect) {
        // Set default currency
        let selectedCurrency = localStorage.getItem('preferredCurrency') || 'KES';
        currencySelect.value = selectedCurrency;
        updatePrices(selectedCurrency);
        
        // Add event listener for currency change
        currencySelect.addEventListener('change', (e) => {
            const newCurrency = e.target.value;
            localStorage.setItem('preferredCurrency', newCurrency);
            updatePrices(newCurrency);
        });
    }
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});

// Handle check-in date change to set minimum check-out date
if (checkInInput) {
    checkInInput.addEventListener('change', () => {
        if (checkInInput.value) {
            const nextDay = new Date(checkInInput.value);
            nextDay.setDate(nextDay.getDate() + 1);
            checkOutInput.min = formatDate(nextDay);
            
            // If current check-out is before new check-in, reset it
            if (checkOutInput.value && new Date(checkOutInput.value) <= new Date(checkInInput.value)) {
                checkOutInput.value = '';
            }
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});
