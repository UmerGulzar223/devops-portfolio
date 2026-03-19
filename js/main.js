/* ============================================================
   Muhammad Umer — DevOps Portfolio
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initNav();
    initReveal();
    initTyping();
    initCounters();
    initScrollProgress();
});

/* ── Loader ── */
function initLoader() {
    const loader = document.getElementById('loader');
    const bar    = document.getElementById('loaderBar');
    let p = 0;

    const iv = setInterval(() => {
        p += Math.random() * 20;
        if (p >= 100) { p = 100; clearInterval(iv); }
        bar.style.width = p + '%';
    }, 55);

    window.addEventListener('load', () => {
        setTimeout(() => {
            bar.style.width = '100%';
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
                // trigger hero name reveal
                document.querySelectorAll('.name-row').forEach((el, i) => {
                    setTimeout(() => el.classList.add('revealed'), 80 + i * 130);
                });
            }, 380);
        }, 250);
    });
}

/* ── Navigation ── */
function initNav() {
    const navbar   = document.getElementById('navbar');
    const toggle   = document.getElementById('nav-toggle');
    const menu     = document.getElementById('nav-menu');
    const links    = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        updateActive();
    }, { passive: true });

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
    links.forEach(l => l.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
    }));

    function updateActive() {
        const y = window.scrollY + 110;
        sections.forEach(s => {
            if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
                links.forEach(l => l.classList.remove('active'));
                const m = document.querySelector(`.nav-link[href="#${s.id}"]`);
                if (m) m.classList.add('active');
            }
        });
    }
    updateActive();
}

/* ── Scroll Reveal ── */
function initReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const delay = parseInt(e.target.getAttribute('data-delay') || 0);
            setTimeout(() => e.target.classList.add('revealed'), delay);
            obs.unobserve(e.target);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
}

/* ── Typing Effect ── */
function initTyping() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    const roles = [
        'DevOps Engineer',
        'Cloud Architect',
        'Kubernetes Specialist',
        'CI/CD Pipeline Expert',
        'Infrastructure as Code',
        'GitOps Practitioner',
        'Automation Engineer'
    ];

    let ri = 0, ci = 0, del = false, spd = 100;

    function tick() {
        const cur = roles[ri];
        if (del) { el.textContent = cur.slice(0, ci - 1); ci--; spd = 42; }
        else      { el.textContent = cur.slice(0, ci + 1); ci++; spd = 100; }

        if (!del && ci === cur.length) { spd = 2400; del = true; }
        else if (del && ci === 0)      { del = false; ri = (ri + 1) % roles.length; spd = 420; }

        setTimeout(tick, spd);
    }
    setTimeout(tick, 1400);
}

/* ── Counter Animation ── */
function initCounters() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el  = e.target;
            const end = parseInt(el.getAttribute('data-count'));
            countUp(el, end);
            obs.unobserve(el);
        });
    }, { threshold: 0.6 });

    document.querySelectorAll('.metric-num[data-count]').forEach(el => obs.observe(el));
}

function countUp(el, end) {
    const dur = 1600, start = performance.now();
    function step(now) {
        const t = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.floor(e * end);
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = end;
    }
    requestAnimationFrame(step);
}

/* ── Scroll Progress ── */
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = pct + '%';
    }, { passive: true });
}

/* ── Smooth Scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
});
