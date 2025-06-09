<template>
    <div class="services">
        <section class="hero-section">
            <div class="hero-background">
                <div class="floating-particles">
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                </div>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">{{ getTitles().services }}</h1>
                <p class="hero-description">{{ currentLang === 'es' ? 'Conoce todos nuestros servicios de limpieza profesional' : 'Discover all our professional cleaning services' }}</p>
                <div class="hero-scroll-indicator">
                    <span>{{ currentLang === 'es' ? 'Desliza para explorar' : 'Scroll to explore' }}</span>
                    <div class="scroll-arrow">↓</div>
                </div>
            </div>
        </section>

        <section class="services-content">
            <div class="services-container">

                <div class="service-item" data-aos="fade-up">
                    <div class="service-card">
                        <div class="service-image">
                            <div class="image-overlay"></div>
                            <img src="/img/imagen-limpieza2.jpg" alt="Kitchen Cleaning" />
                            <div class="image-glow"></div>
                        </div>
                        <div class="service-content">
                            <div class="service-icon">🍳</div>
                            <h2>{{ currentLang === 'es' ? 'Limpieza de Cocina' : 'Kitchen Cleaning' }}</h2>
                            <p>{{ getText('servicesPage', 'p1') }}</p>
                            <div class="service-features">
                                <span class="feature">{{ currentLang === 'es' ? 'Desinfección profunda' : 'Deep disinfection' }}</span>
                                <span class="feature">{{ currentLang === 'es' ? 'Equipos especializados' : 'Specialized equipment' }}</span>
                                <span class="feature">{{ currentLang === 'es' ? 'Productos eco-friendly' : 'Eco-friendly products' }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service-item reverse" data-aos="fade-up" data-aos-delay="200">
                    <div class="service-card">
                        <div class="service-image">
                            <div class="image-overlay"></div>
                            <img src="/img/desinfectar-casa.jpg" alt="Home Cleaning" />
                            <div class="image-glow"></div>
                        </div>
                        <div class="service-content">
                            <div class="service-icon">🏠</div>
                            <h2>{{ currentLang === 'es' ? 'Limpieza de Hogares y Apartamentos' : 'Home and Apartment Cleaning' }}</h2>
                            <p>{{ getText('servicesPage', 'p2') }}</p>
                            <div class="service-features">
                                <span class="feature">{{ currentLang === 'es' ? 'Limpieza integral' : 'Comprehensive cleaning' }}</span>
                                <span class="feature">{{ currentLang === 'es' ? 'Atención al detalle' : 'Attention to detail' }}</span>
                                <span class="feature">{{ currentLang === 'es' ? 'Horarios flexibles' : 'Flexible schedules' }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service-item" data-aos="fade-up" data-aos-delay="400">
                    <div class="service-card">
                        <div class="service-image">
                            <div class="image-overlay"></div>
                            <img src="/img/persona-que-encarga-limpieza-oficinas.jpg" alt="Office Cleaning" />
                            <div class="image-glow"></div>
                        </div>
                        <div class="service-content">
                            <div class="service-icon">🏢</div>
                            <h2>{{ currentLang === 'es' ? 'Limpieza de Oficinas' : 'Office Cleaning' }}</h2>
                            <p>{{ getText('servicesPage', 'p3') }}</p>
                            <div class="service-features">
                                <span class="feature">{{ currentLang === 'es' ? 'Servicio nocturno' : 'Night service'
                                }}</span>
                                <span class="feature">{{ currentLang === 'es' ? 'Espacios profesionales' : 'Professional spaces' }}</span>
                                <span class="feature">{{ currentLang === 'es' ? 'Contratos personalizados' : 'Custom contracts' }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="cta-section">
            <div class="cta-background">
                <div class="cta-glow"></div>
            </div>
            <div class="cta-content">
                <h2 class="cta-title">{{ currentLang === 'es' ? '¿Listo para contratar nuestros servicios?' : 'Ready to hire our services?' }}</h2>
                <p class="cta-subtitle">{{ currentLang === 'es' ? 'Transforma tu espacio con nuestros servicios profesionales' : 'Transform your space with our professional services' }}</p>
                <router-link :to="currentLang === 'es' ? '/contacto' : '/contact'" class="cta-button">
                    <span>{{ currentLang === 'es' ? 'Contáctanos Ahora' : 'Contact Us Now' }}</span>
                    <div class="button-shine"></div>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTexts } from '@/composables/useTexts'

const { currentLang, loadTexts, getText, getTitles } = useTexts()

onMounted(() => {
    loadTexts()
})
</script>

<style scoped>
.services {
    padding: 0;
    overflow-x: hidden;
}

.hero-section {
    position: relative;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,
            #667eea 0%,
            #764ba2 100%);
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%),
        radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.floating-particles {
    position: absolute;
    width: 100%;
    height: 100%;
}

.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: floatParticle 4s ease-in-out infinite;
}

.particle:nth-child(1) {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
    animation-duration: 4s;
}

.particle:nth-child(2) {
    top: 60%;
    right: 30%;
    animation-delay: 1s;
    animation-duration: 5s;
}

.particle:nth-child(3) {
    bottom: 40%;
    left: 40%;
    animation-delay: 2s;
    animation-duration: 6s;
}

.particle:nth-child(4) {
    top: 30%;
    right: 20%;
    animation-delay: 3s;
    animation-duration: 4.5s;
}

.particle:nth-child(5) {
    bottom: 20%;
    right: 50%;
    animation-delay: 0.5s;
    animation-duration: 5.5s;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    max-width: 800px;
    padding: 2rem;
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    animation: titleGlow 2s ease-in-out infinite alternate;
}

.hero-description {
    font-size: 1.3rem;
    opacity: 0.95;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: fadeInUp 1s ease-out 0.6s both;
}

.hero-scroll-indicator span {
    font-size: 0.9rem;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.scroll-arrow {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
}

/* Services Content */
.services-content {
    padding: 6rem 0;
    background:
        linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%),
        radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 70%),
        radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 70%);
}

.services-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.service-item {
    margin-bottom: 6rem;
    animation: fadeInUp 0.8s ease-out;
}

.service-item:last-child {
    margin-bottom: 0;
}

.service-card {
    display: flex;
    align-items: center;
    gap: 4rem;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(102, 126, 234, 0.1),
            transparent);
    transition: left 0.8s ease;
}

.service-card:hover::before {
    left: 100%;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.service-item.reverse .service-card {
    flex-direction: row-reverse;
}

.service-image {
    flex: 1;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
}

.service-image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.service-card:hover .service-image img {
    transform: scale(1.1);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
            rgba(102, 126, 234, 0.3) 0%,
            rgba(118, 75, 162, 0.3) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.service-card:hover .image-overlay {
    opacity: 1;
}

.image-glow {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg,
            #667eea,
            #764ba2,
            #667eea);
    border-radius: 24px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    filter: blur(20px);
}

.service-card:hover .image-glow {
    opacity: 0.3;
}

.service-content {
    flex: 1;
    padding: 1rem;
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: inline-block;
    animation: iconFloat 3s ease-in-out infinite;
}

.service-content h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #333 0%, #667eea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.service-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 2rem;
}

.service-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.feature {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
    transition: transform 0.3s ease;
}

.feature:hover {
    transform: translateY(-2px);
}

/* CTA Section */
.cta-section {
    position: relative;
    background: linear-gradient(135deg,
            rgba(16, 16, 30, 0.95) 0%,
            rgba(30, 30, 60, 0.95) 100%);
    padding: 6rem 2rem;
    text-align: center;
    overflow: hidden;
}

.cta-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.cta-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle,
            rgba(102, 126, 234, 0.3) 0%,
            rgba(118, 75, 162, 0.2) 50%,
            transparent 70%);
    border-radius: 50%;
    animation: pulseGlow 4s ease-in-out infinite;
}

.cta-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
}

.cta-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    animation: titleGlow 2s ease-in-out infinite alternate;
}

.cta-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
    line-height: 1.6;
}

.cta-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
    padding: 1.5rem 3rem;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(40, 167, 69, 0.4);
}

.cta-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(40, 167, 69, 0.6);
    text-decoration: none;
    color: white;
}

.button-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent);
    transition: left 0.6s ease;
}

.cta-button:hover .button-shine {
    left: 100%;
}

/* Animations */
@keyframes floatParticle {

    0%,
    100% {
        transform: translateY(0) translateX(0);
        opacity: 0.6;
    }

    25% {
        transform: translateY(-20px) translateX(10px);
        opacity: 1;
    }

    50% {
        transform: translateY(-10px) translateX(-15px);
        opacity: 0.8;
    }

    75% {
        transform: translateY(-30px) translateX(5px);
        opacity: 0.4;
    }
}

@keyframes titleGlow {
    from {
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    to {
        text-shadow:
            0 4px 20px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(255, 255, 255, 0.5);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}

@keyframes iconFloat {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes pulseGlow {

    0%,
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.3;
    }

    50% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0.5;
    }
}

/* Responsive Design */
@media (max-width: 1024px) {
    .service-card {
        gap: 3rem;
        padding: 2.5rem;
    }

    .service-image img {
        height: 300px;
    }
}

@media (max-width: 768px) {
    .hero-section {
        min-height: 50vh;
    }

    .hero-content {
        padding: 1.5rem;
    }

    .services-content {
        padding: 4rem 0;
    }

    .services-container {
        padding: 0 1.5rem;
    }

    .service-card,
    .service-item.reverse .service-card {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        padding: 2rem;
    }

    .service-image img {
        height: 250px;
    }

    .service-content h2 {
        font-size: 1.8rem;
    }

    .service-content p {
        font-size: 1rem;
    }

    .service-features {
        justify-content: center;
    }

    .cta-section {
        padding: 4rem 1.5rem;
    }

    .cta-button {
        padding: 1.2rem 2rem;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .service-card {
        padding: 1.5rem;
        margin: 0 1rem;
    }

    .service-image img {
        height: 200px;
    }

    .service-content h2 {
        font-size: 1.5rem;
    }

    .feature {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }

    .cta-content {
        padding: 0 1rem;
    }
}
</style>
