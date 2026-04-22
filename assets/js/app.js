// ======================= INIT =======================
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initParticles();
    initMagneticCards();
    initReviewCarousel();
    initDiagnostic();
    initStickyCTA();
    initSmoothScroll();
    initBeforeAfter();
    initParallaxFloats();
    initFeatureCarousel();
});

// ======================= NAVBAR =======================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ======================= MOBILE MENU =======================
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const links = menu.querySelectorAll('a');
    let isOpen = false;

    function openMobileMenu() {
        isOpen = true;
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
        navbar.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
        const lines = btn.querySelectorAll('.burger-line');
        lines[0].style.transform = 'translateY(8px) rotate(45deg)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'translateY(-4px) rotate(-45deg)';
        lines[2].style.width = '24px';
    }

    function closeMobileMenu() {
        isOpen = false;
        menu.style.visibility = 'hidden';
        menu.style.opacity = '0';
        navbar.classList.remove('menu-open');
        document.body.style.overflow = '';
        const lines = btn.querySelectorAll('.burger-line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '1';
        lines[2].style.transform = '';
        lines[2].style.width = '16px';
    }

    btn.addEventListener('click', () => {
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    links.forEach(link => link.addEventListener('click', closeMobileMenu));
}

// ======================= PARTICLES =======================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = 8 + Math.random() * 12 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        container.appendChild(particle);
    }
}

// ======================= 21st.dev — MAGNETIC CARDS =======================
function initMagneticCards() {
    const cards = document.querySelectorAll('.magnetic-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = -(y / rect.height) * 6;
            const rotateY = (x / rect.width) * 6;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ======================= 21st.dev — PARALLAX FLOATS =======================
function initParallaxFloats() {
    const floats = document.querySelectorAll('[data-parallax]');
    if (!floats.length) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        floats.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.1;
            const rect = el.getBoundingClientRect();
            const offset = (rect.top + scrollY - window.innerHeight / 2) * speed;
            el.style.transform = `translateY(${offset}px)`;
        });
    }, { passive: true });
}

// ======================= BEFORE / AFTER SLIDER =======================
function initBeforeAfter() {
    const sliders = document.querySelectorAll('.ba-slider');

    sliders.forEach(slider => {
        const beforeEl = slider.querySelector('.ba-before');
        const beforeImg = beforeEl.querySelector('img');
        const handle = slider.querySelector('.ba-handle');
        let isDragging = false;

        // Make the before image match the full slider width
        function syncImageWidth() {
            beforeImg.style.width = slider.offsetWidth + 'px';
        }
        syncImageWidth();
        window.addEventListener('resize', syncImageWidth);

        function setPosition(x) {
            const rect = slider.getBoundingClientRect();
            let pct = ((x - rect.left) / rect.width) * 100;
            pct = Math.max(5, Math.min(95, pct));
            beforeEl.style.width = pct + '%';
            handle.style.left = pct + '%';
        }

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            setPosition(e.clientX);
        });
        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                setPosition(e.clientX);
            }
        });
        window.addEventListener('mouseup', () => isDragging = false);

        slider.addEventListener('touchstart', (e) => {
            isDragging = true;
            setPosition(e.touches[0].clientX);
        }, { passive: true });
        window.addEventListener('touchmove', (e) => {
            if (isDragging) setPosition(e.touches[0].clientX);
        }, { passive: false });
        window.addEventListener('touchend', () => isDragging = false);
    });
}

// ======================= REVIEW CAROUSEL =======================
function initReviewCarousel() {
    const track = document.getElementById('reviews-track');
    if (!track) return;
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    const dotsContainer = document.getElementById('review-dots');
    const cards = track.querySelectorAll('.review-card');

    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth + 24;
    let maxIndex = 0;
    let autoPlayInterval;

    function calculateMaxIndex() {
        const visibleWidth = track.parentElement.offsetWidth;
        cardWidth = cards[0].offsetWidth + 24;
        maxIndex = Math.max(0, cards.length - Math.floor(visibleWidth / cardWidth));
    }

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateDots();
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('div');
            dot.classList.add('review-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => { currentIndex = i; updateCarousel(); resetAutoPlay(); });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        dotsContainer.querySelectorAll('.review-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function next() {
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }

    function prev() {
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }

    function startAutoPlay() { autoPlayInterval = setInterval(next, 5000); }
    function resetAutoPlay() { clearInterval(autoPlayInterval); startAutoPlay(); }

    nextBtn.addEventListener('click', () => { next(); resetAutoPlay(); });
    prevBtn.addEventListener('click', () => { prev(); resetAutoPlay(); });

    // Touch support
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
            resetAutoPlay();
        }
    }, { passive: true });

    calculateMaxIndex();
    createDots();
    startAutoPlay();

    window.addEventListener('resize', () => {
        calculateMaxIndex();
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        createDots();
        updateCarousel();
    });
}

// ======================= DIAGNOSTIC TUNNEL =======================
function initDiagnostic() {
    const steps = {
        1: document.getElementById('diag-step-1'),
        2: document.getElementById('diag-step-2'),
        3: document.getElementById('diag-step-3'),
    };
    const success = document.getElementById('diag-success');
    const progress = document.getElementById('diag-progress');
    const stepLabel = document.getElementById('diag-step-label');
    const submitBtn = document.getElementById('diag-submit');
    if (!submitBtn) return;

    let currentStep = 1;
    const answers = {};

    function showStep(step) {
        Object.values(steps).forEach(s => s.classList.add('hidden'));
        success.classList.add('hidden');

        if (step <= 3) {
            steps[step].classList.remove('hidden');
            steps[step].style.animation = 'none';
            steps[step].offsetHeight;
            steps[step].style.animation = '';
        }

        progress.style.width = `${(step / 3) * 100}%`;
        stepLabel.textContent = step <= 3 ? `${step} / 3` : '';
    }

    document.querySelectorAll('#diag-step-1 .diag-option, #diag-step-2 .diag-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.closest('.diag-step');
            parent.querySelectorAll('.diag-option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            const step = parent.id === 'diag-step-1' ? 1 : 2;
            answers[`step${step}`] = btn.dataset.value;

            setTimeout(() => {
                currentStep = step + 1;
                showStep(currentStep);
            }, 400);
        });
    });

    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('diag-name').value.trim();
        const phone = document.getElementById('diag-phone').value.trim();

        if (!name || !phone) {
            submitBtn.style.animation = 'shake 0.5s ease';
            setTimeout(() => submitBtn.style.animation = '', 500);
            if (!name) document.getElementById('diag-name').style.borderColor = '#ef4444';
            if (!phone) document.getElementById('diag-phone').style.borderColor = '#ef4444';
            return;
        }

        answers.name = name;
        answers.phone = phone;
        answers.description = document.getElementById('diag-desc').value.trim();

        Object.values(steps).forEach(s => s.classList.add('hidden'));
        success.classList.remove('hidden');
        success.style.animation = 'none';
        success.offsetHeight;
        success.style.animation = '';
        progress.style.width = '100%';
        stepLabel.textContent = '';

        console.log('Diagnostic submitted:', answers);
    });

    ['diag-name', 'diag-phone'].forEach(id => {
        document.getElementById(id).addEventListener('focus', function () {
            this.style.borderColor = '';
        });
    });
}

// ======================= STICKY CTA =======================
function initStickyCTA() {
    const cta = document.getElementById('sticky-cta');
    const hero = document.getElementById('hero');
    if (!cta || !hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            cta.style.transform = entry.isIntersecting ? 'translateY(100%)' : 'translateY(0)';
        });
    }, { threshold: 0.3 });

    observer.observe(hero);
}

// ======================= SMOOTH SCROLL =======================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ======================= FEATURE CAROUSEL =======================
function initFeatureCarousel() {
    const labels = document.querySelectorAll('.carousel-label');
    const slides = document.querySelectorAll('.carousel-slide');
    const pips = document.querySelectorAll('.carousel-pip');
    if (!labels.length || !slides.length) return;

    let current = 0;
    let autoInterval;

    function goTo(index) {
        current = index;
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = '1';
                slide.style.transform = 'scale(1)';
                slide.style.pointerEvents = 'auto';
            } else {
                slide.style.opacity = '0';
                slide.style.transform = 'scale(0.95)';
                slide.style.pointerEvents = 'none';
            }
        });
        labels.forEach((label, i) => {
            label.classList.toggle('active', i === index);
        });
        pips.forEach((pip, i) => {
            pip.style.background = i === index ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)';
        });
    }

    function next() {
        goTo((current + 1) % slides.length);
    }

    function startAuto() { autoInterval = setInterval(next, 4000); }
    function resetAuto() { clearInterval(autoInterval); startAuto(); }

    labels.forEach(label => {
        label.addEventListener('click', () => {
            goTo(parseInt(label.dataset.index));
            resetAuto();
        });
    });

    startAuto();
}
