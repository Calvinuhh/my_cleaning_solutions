<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTexts } from '@/composables/useTexts'

const { currentLang, loadTexts, getText, getTitles } = useTexts()

onMounted(() => {
  loadTexts()
})
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span>{{ currentLang === 'es' ? 'Servicios Premium' : 'Premium Services' }}</span>
          </div>
          <h1 class="hero-title">
            <span class="title-line">My Cleaning</span>
            <span class="title-line title-gradient">Solutions</span>
          </h1>
          <div class="hero-text">
            <p class="hero-paragraph">{{ getText('indexPage', 'p1') }}</p>
            <p class="hero-paragraph">{{ getText('indexPage', 'p2') }}</p>
          </div>
          <div class="hero-buttons">
            <router-link :to="currentLang === 'es' ? '/servicios' : '/services'" class="btn-primary">
              <span>{{ currentLang === 'es' ? 'Nuestros Servicios' : 'Our Services' }}</span>
              <div class="btn-glow"></div>
            </router-link>
            <router-link :to="currentLang === 'es' ? '/contacto' : '/contact'" class="btn-secondary">
              <span>{{ currentLang === 'es' ? 'Contacto' : 'Contact' }}</span>
            </router-link>
          </div>
        </div>

        <div class="hero-image">
          <div class="image-container">
            <div class="image-glow"></div>
            <img src="/img/imagen-limpieza1.jpg" alt="Cleaning Services" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-preview">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">{{ getTitles().services }}</h2>
          <div class="section-subtitle">
            {{ currentLang === 'es' ? 'Soluciones profesionales para cada necesidad' : 'Professional solutions for every need' }}
          </div>
        </div>

        <div class="services-grid">
          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-glow"></div>
            <div class="card-image">
              <img src="/img/imagen-limpieza2.jpg" alt="Kitchen Cleaning" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <h3>{{ currentLang === 'es' ? 'Limpieza de Cocina' : 'Kitchen Cleaning' }}</h3>
              <p>{{ currentLang === 'es' ? 'Higiene profunda para tu espacio culinario' : 'Deep hygiene for your culinary space' }}</p>
            </div>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-glow"></div>
            <div class="card-image">
              <img src="/img/desinfectar-casa.jpg" alt="Home Cleaning" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <h3>{{ currentLang === 'es' ? 'Limpieza de Hogar' : 'Home Cleaning' }}</h3>
              <p>{{ currentLang === 'es' ? 'Tu hogar impecable y saludable' : 'Your home spotless and healthy' }}</p>
            </div>
          </div>

          <div class="service-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-glow"></div>
            <div class="card-image">
              <img src="/img/persona-que-encarga-limpieza-oficinas.jpg" alt="Office Cleaning" />
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <h3>{{ currentLang === 'es' ? 'Limpieza de Oficinas' : 'Office Cleaning' }}</h3>
              <p>{{ currentLang === 'es' ? 'Espacios profesionales siempre listos' : 'Professional spaces always ready'
                }}</p>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <router-link :to="currentLang === 'es' ? '/servicios' : '/services'" class="cta-button">
            <span>{{ currentLang === 'es' ? 'Ver Todos los Servicios' : 'View All Services' }}</span>
            <div class="cta-arrow">→</div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 0;
  overflow-x: hidden;
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg,
      rgba(16, 16, 30, 0.9) 0%,
      rgba(30, 30, 60, 0.8) 50%,
      rgba(16, 16, 30, 0.9) 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.3) 0%, transparent 50%),
    linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  opacity: 0.1;
  animation: floatShape 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 40%;
  right: 40%;
  animation-delay: 1s;
}

.hero-container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  gap: 4rem;
}

.hero-content {
  flex: 1;
  animation: slideInLeft 1s ease-out;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-badge span {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-title {
  margin: 0 0 2rem 0;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
}

.title-line {
  display: block;
  color: white;
  animation: slideInRight 0.8s ease-out;
}

.title-gradient {
  color: #4fc2f73b;
  background: linear-gradient(55deg, #4fc2f7b0 0%, #29b5f6ab 50%, #03a8f494 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideInRight 0.8s ease-out 0.2s both, textGlow 3s ease-in-out infinite alternate;
  text-shadow: 0 0 30px rgba(125, 205, 241, 0.5);
  filter: drop-shadow(0 0 10px rgba(79, 194, 247, 0.39));
  position: relative;
}

.title-gradient::before {
  content: 'Solutions';
  position: absolute;
  top: 0;
  left: 0;
  color: #4fc2f7a8;
  z-index: -1;
  text-shadow: 0 0 20px rgba(79, 195, 247, 0.8);
}

.hero-text {
  margin-bottom: 3rem;
}

.hero-paragraph {
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
}

.hero-paragraph:nth-child(1) {
  animation-delay: 0.4s;
}

.hero-paragraph:nth-child(2) {
  animation-delay: 0.6s;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.btn-primary,
.btn-secondary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 2.5rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
  text-decoration: none;
  color: white;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover .btn-glow {
  left: 100%;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  text-decoration: none;
  color: white;
}

.hero-image {
  flex: 1;
  animation: slideInRight 1s ease-out 0.3s both;
}

.image-container {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

.image-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg,
      transparent 30%,
      rgba(102, 126, 234, 0.3) 50%,
      transparent 70%);
  animation: rotateGlow 8s linear infinite;
  z-index: 1;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 24px;
  position: relative;
  z-index: 2;
  transition: transform 0.6s ease;
}

.hero-image:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.2) 0%,
      rgba(118, 75, 162, 0.2) 100%);
  border-radius: 24px;
  z-index: 3;
}

/* Services Preview Section */
.services-preview {
  position: relative;
  padding: 6rem 0;
  background:
    linear-gradient(135deg, rgba(248, 249, 250, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%),
    radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 70%),
    radial-gradient(circle at 70% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 70%);
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease-out;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #333 0%, #666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-weight: 500;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.service-card {
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
}

.service-card:nth-child(1) {
  animation-delay: 0.1s;
}

.service-card:nth-child(2) {
  animation-delay: 0.3s;
}

.service-card:nth-child(3) {
  animation-delay: 0.5s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(102, 126, 234, 0.1) 0%,
      rgba(118, 75, 162, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .card-glow {
  opacity: 1;
}

.card-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.service-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom,
      transparent 0%,
      rgba(102, 126, 234, 0.3) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .card-overlay {
  opacity: 1;
}

.card-content {
  padding: 2rem;
}

.card-content h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  transition: color 0.3s ease;
}

.service-card:hover .card-content h3 {
  color: #667eea;
}

.card-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

.cta-section {
  text-align: center;
  animation: fadeInUp 0.8s ease-out 0.7s both;
}

.cta-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem 3rem;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  text-decoration: none;
  color: white;
}

.cta-arrow {
  font-size: 1.5rem;
  transition: transform 0.4s ease;
}

.cta-button:hover .cta-arrow {
  transform: translateX(5px);
}

/* Animations */
@keyframes floatShape {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  25% {
    transform: translate(10px, -10px) rotate(90deg);
  }

  50% {
    transform: translate(-5px, 15px) rotate(180deg);
  }

  75% {
    transform: translate(-15px, -5px) rotate(270deg);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
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

@keyframes rotateGlow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes textGlow {
  from {
    text-shadow:
      0 0 20px rgba(79, 195, 247, 0.8),
      0 0 30px rgba(79, 195, 247, 0.6),
      0 0 40px rgba(79, 195, 247, 0.4);
    filter: drop-shadow(0 0 10px rgba(79, 195, 247, 0.8));
  }

  to {
    text-shadow:
      0 0 30px rgba(41, 182, 246, 0.9),
      0 0 40px rgba(41, 182, 246, 0.7),
      0 0 50px rgba(41, 182, 246, 0.5);
    filter: drop-shadow(0 0 15px rgba(41, 182, 246, 1));
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-container {
    gap: 3rem;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 90vh;
  }

  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    padding: 1.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .btn-primary,
  .btn-secondary {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .services-preview {
    padding: 4rem 0;
  }

  .section-container {
    padding: 0 1.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 1rem;
  }

  .hero-text .hero-paragraph {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .cta-button {
    padding: 1.2rem 2rem;
    font-size: 1rem;
  }
}
</style>
