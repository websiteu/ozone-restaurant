// شريط التنقل للجوال
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// معرض صور المطعم
let restaurantSlideIndex = 0;
const restaurantSlides = document.querySelectorAll('#restaurant-slider .slide');
const restaurantDots = document.querySelectorAll('#restaurant-slider .dot');

function showRestaurantSlide(n) {
    if (n >= restaurantSlides.length) restaurantSlideIndex = 0;
    if (n < 0) restaurantSlideIndex = restaurantSlides.length - 1;
    
    restaurantSlides.forEach(slide => slide.classList.remove('active'));
    restaurantDots.forEach(dot => dot.classList.remove('active'));
    
    restaurantSlides[restaurantSlideIndex].classList.add('active');
    restaurantDots[restaurantSlideIndex].classList.add('active');
}

function nextRestaurantSlide() {
    restaurantSlideIndex++;
    showRestaurantSlide(restaurantSlideIndex);
}

function prevRestaurantSlide() {
    restaurantSlideIndex--;
    showRestaurantSlide(restaurantSlideIndex);
}

function goToRestaurantSlide(n) {
    restaurantSlideIndex = n;
    showRestaurantSlide(restaurantSlideIndex);
}

// معرض صور الطعام
let foodSlideIndex = 0;
const foodSlides = document.querySelectorAll('#food-slider .slide');
const foodDots = document.querySelectorAll('#food-slider .dot');

function showFoodSlide(n) {
    if (n >= foodSlides.length) foodSlideIndex = 0;
    if (n < 0) foodSlideIndex = foodSlides.length - 1;
    
    foodSlides.forEach(slide => slide.classList.remove('active'));
    foodDots.forEach(dot => dot.classList.remove('active'));
    
    foodSlides[foodSlideIndex].classList.add('active');
    foodDots[foodSlideIndex].classList.add('active');
}

function nextFoodSlide() {
    foodSlideIndex++;
    showFoodSlide(foodSlideIndex);
}

function prevFoodSlide() {
    foodSlideIndex--;
    showFoodSlide(foodSlideIndex);
}

function goToFoodSlide(n) {
    foodSlideIndex = n;
    showFoodSlide(foodSlideIndex);
}

// تبديل الشرائح تلقائياً
setInterval(nextRestaurantSlide, 4000);
setInterval(nextFoodSlide, 4000);

// التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(17, 17, 17, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.background = 'rgba(17, 17, 17, 0.95)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    }
});