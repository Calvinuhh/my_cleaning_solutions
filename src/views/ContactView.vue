<template>
    <div class="contact">
        <section class="hero-section">
            <div class="hero-background">
                <div class="animated-grid">
                    <div class="grid-line"></div>
                    <div class="grid-line"></div>
                    <div class="grid-line"></div>
                    <div class="grid-line"></div>
                </div>
                <div class="floating-icons">
                    <div class="icon-container">📧</div>
                    <div class="icon-container">📱</div>
                    <div class="icon-container">🏢</div>
                    <div class="icon-container">🧹</div>
                </div>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">{{ getTitles().contact }}</h1>
                <p class="hero-description">{{ currentLang === 'es' ? 'Estamos aquí para ayudarte con todos tus servicios de limpieza' : 'We are here to help you with all your cleaning services' }}</p>
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">3+</span>
                        <span class="stat-label">{{ currentLang === 'es' ? 'Años' : 'Years' }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">500+</span>
                        <span class="stat-label">{{ currentLang === 'es' ? 'Clientes' : 'Clients' }}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">100%</span>
                        <span class="stat-label">{{ currentLang === 'es' ? 'Satisfacción' : 'Satisfaction' }}</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-content">
            <div class="content-container">

                <div class="contact-info-card" data-aos="fade-right">
                    <div class="card-header">
                        <div class="header-icon">💼</div>
                        <h2>{{ currentLang === 'es' ? 'Información de Contacto' : 'Contact Information' }}</h2>
                    </div>

                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-icon">📍</div>
                            <div class="info-content">
                                <h3>{{ currentLang === 'es' ? 'Ubicación' : 'Location' }}</h3>
                                <p>Miami, Florida</p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon">⭐</div>
                            <div class="info-content">
                                <h3>{{ currentLang === 'es' ? 'Experiencia' : 'Experience' }}</h3>
                                <p>{{ currentLang === 'es' ? 'Más de 3 años brindando servicios de limpieza' : 'More than 3 years providing cleaning services' }}</p>
                            </div>
                        </div>

                        <div class="info-item services-item">
                            <div class="info-icon">🛡️</div>
                            <div class="info-content">
                                <h3>{{ currentLang === 'es' ? 'Nuestros Servicios' : 'Our Services' }}</h3>
                                <div class="services-list">
                                    <div class="service-tag">{{ currentLang === 'es' ? 'Apartamentos' : 'Apartments' }}
                                    </div>
                                    <div class="service-tag">{{ currentLang === 'es' ? 'Casas' : 'Houses' }}</div>
                                    <div class="service-tag">{{ currentLang === 'es' ? 'Oficinas' : 'Offices' }}</div>
                                    <div class="service-tag">{{ currentLang === 'es' ? 'Limpieza Profunda' : 'Deep Cleaning' }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-icon">🎯</div>
                            <div class="info-content">
                                <h3>{{ currentLang === 'es' ? '¿Por qué elegirnos?' : 'Why choose us?' }}</h3>
                                <ul class="benefits-list">
                                    <li>{{ currentLang === 'es' ? 'Personal capacitado y confiable' : 'Trained and reliable staff' }}</li>
                                    <li>{{ currentLang === 'es' ? 'Productos eco-friendly' : 'Eco-friendly products' }}
                                    </li>
                                    <li>{{ currentLang === 'es' ? 'Precios competitivos' : 'Competitive prices' }}</li>
                                    <li>{{ currentLang === 'es' ? 'Disponibilidad flexible' : 'Flexible availability' }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact-form-wrapper" data-aos="fade-left">
                    <Form />
                </div>

            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTexts } from '@/composables/useTexts'
import Form from '@/components/Form.vue'

const { currentLang, loadTexts, getTitles } = useTexts()

onMounted(() => {
    loadTexts()
})
</script>

<style scoped>
.contact {
    padding: 0;
    overflow-x: hidden;
}

.hero-section {
    position: relative;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.animated-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.1;
}

.grid-line {
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    animation: gridMove 8s linear infinite;
}

.grid-line:nth-child(1) {
    width: 2px;
    height: 100%;
    left: 25%;
    animation-delay: 0s;
}

.grid-line:nth-child(2) {
    width: 2px;
    height: 100%;
    right: 25%;
    animation-delay: 2s;
}

.grid-line:nth-child(3) {
    width: 100%;
    height: 2px;
    top: 25%;
    animation-delay: 4s;
}

.grid-line:nth-child(4) {
    width: 100%;
    height: 2px;
    bottom: 25%;
    animation-delay: 6s;
}

.floating-icons {
    position: absolute;
    width: 100%;
    height: 100%;
}

.icon-container {
    position: absolute;
    font-size: 2rem;
    opacity: 0.2;
    animation: floatIcon 6s ease-in-out infinite;
}

.icon-container:nth-child(1) {
    top: 20%;
    left: 15%;
    animation-delay: 0s;
}

.icon-container:nth-child(2) {
    top: 60%;
    right: 20%;
    animation-delay: 1.5s;
}

.icon-container:nth-child(3) {
    bottom: 30%;
    left: 25%;
    animation-delay: 3s;
}

.icon-container:nth-child(4) {
    top: 40%;
    right: 40%;
    animation-delay: 4.5s;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    max-width: 900px;
    padding: 2rem;
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    animation: titlePulse 2s ease-in-out infinite alternate;
}

.hero-description {
    font-size: 1.3rem;
    opacity: 0.95;
    line-height: 1.6;
    margin-bottom: 3rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    animation: fadeInUp 1s ease-out 0.3s both;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    animation: fadeInUp 1s ease-out 0.6s both;
}

.stat-item {
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 1.5rem;
    min-width: 120px;
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.9rem;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.contact-content {
    padding: 6rem 0;
    background:
        linear-gradient(135deg, rgba(248, 249, 250, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%),
        radial-gradient(circle at 30% 30%, rgba(40, 167, 69, 0.05) 0%, transparent 70%),
        radial-gradient(circle at 70% 70%, rgba(32, 201, 151, 0.05) 0%, transparent 70%);
}

.content-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-info-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.contact-info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(40, 167, 69, 0.1),
            transparent);
    transition: left 0.8s ease;
}

.contact-info-card:hover::before {
    left: 100%;
}

.contact-info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid rgba(40, 167, 69, 0.2);
}

.header-icon {
    font-size: 2.5rem;
    animation: iconBounce 2s ease-in-out infinite;
}

.card-header h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    background: linear-gradient(135deg, #333 0%, #28a745 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.info-grid {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.info-item {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    transition: all 0.3s ease;
    border-left: 4px solid transparent;
}

.info-item:hover {
    background: rgba(255, 255, 255, 0.8);
    border-left-color: #28a745;
    transform: translateX(5px);
}

.info-icon {
    font-size: 1.8rem;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-content h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #28a745;
    margin-bottom: 0.8rem;
}

.info-content p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin: 0;
}

.services-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1rem;
}

.service-tag {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(40, 167, 69, 0.3);
    transition: transform 0.3s ease;
}

.service-tag:hover {
    transform: translateY(-2px);
}

.benefits-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
}

.benefits-list li {
    position: relative;
    padding: 0.8rem 0 0.8rem 2rem;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: color 0.3s ease;
}

.benefits-list li:last-child {
    border-bottom: none;
}

.benefits-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0.8rem;
    color: #28a745;
    font-weight: bold;
    font-size: 1.1rem;
}

.benefits-list li:hover {
    color: #333;
}

.contact-form-wrapper {
    position: sticky;
    top: 2rem;
}

@keyframes gridMove {

    0%,
    100% {
        opacity: 0.1;
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(1.1);
    }
}

@keyframes floatIcon {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.2;
    }

    25% {
        transform: translateY(-15px) rotate(5deg);
        opacity: 0.4;
    }

    50% {
        transform: translateY(-5px) rotate(-5deg);
        opacity: 0.3;
    }

    75% {
        transform: translateY(-20px) rotate(3deg);
        opacity: 0.5;
    }
}

@keyframes titlePulse {
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

@keyframes iconBounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

@media (max-width: 1024px) {
    .content-container {
        gap: 3rem;
    }

    .contact-info-card {
        padding: 2.5rem;
    }
}

@media (max-width: 768px) {
    .hero-section {
        min-height: 60vh;
    }

    .hero-content {
        padding: 1.5rem;
    }

    .hero-stats {
        gap: 1.5rem;
    }

    .stat-item {
        padding: 1rem;
        min-width: 100px;
    }

    .stat-number {
        font-size: 1.5rem;
    }

    .contact-content {
        padding: 4rem 0;
    }

    .content-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 0 1.5rem;
    }

    .contact-info-card {
        padding: 2rem;
    }

    .card-header {
        margin-bottom: 2rem;
    }

    .card-header h2 {
        font-size: 1.8rem;
    }

    .info-item {
        padding: 1.2rem;
    }

    .contact-form-wrapper {
        position: static;
    }
}

@media (max-width: 480px) {
    .hero-stats {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .contact-info-card {
        padding: 1.5rem;
        margin: 0 1rem;
    }

    .info-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    .services-list {
        justify-content: center;
    }

    .service-tag {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }
}
</style>
