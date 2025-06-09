<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-bg-animation"></div>
            <div class="footer-text-container">
                <p class="footer-text">{{ footerText }}</p>
                <div class="footer-icons">
                    <div class="icon-pulse"></div>
                    <div class="icon-pulse"></div>
                    <div class="icon-pulse"></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTexts } from '@/composables/useTexts'

const { loadTexts, getFooterText } = useTexts()

const footerText = computed(() => getFooterText())

onMounted(() => {
    loadTexts()
})
</script>

<style scoped>
.footer {
    position: relative;
    background: linear-gradient(135deg,
            rgba(16, 16, 30, 0.95) 0%,
            rgba(30, 30, 60, 0.95) 50%,
            rgba(16, 16, 30, 0.95) 100%);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: auto;
    overflow: hidden;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
}

.footer-bg-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    animation: floatingGradient 8s ease-in-out infinite;
}

.footer-text-container {
    text-align: center;
    position: relative;
}

.footer-text {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.5px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    animation: textGlow 3s ease-in-out infinite alternate;
}

.footer-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

.icon-pulse {
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 50%;
    animation: iconPulse 2s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

.icon-pulse:nth-child(2) {
    animation-delay: 0.5s;
}

.icon-pulse:nth-child(3) {
    animation-delay: 1s;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 2px;
    background: linear-gradient(90deg,
            transparent,
            #667eea,
            #764ba2,
            transparent);
    animation: borderScan 4s linear infinite;
}

@keyframes floatingGradient {

    0%,
    100% {
        transform: translateX(0) translateY(0);
        opacity: 0.5;
    }

    25% {
        transform: translateX(10px) translateY(-5px);
        opacity: 0.8;
    }

    50% {
        transform: translateX(-5px) translateY(10px);
        opacity: 0.3;
    }

    75% {
        transform: translateX(-10px) translateY(-10px);
        opacity: 0.7;
    }
}

@keyframes textGlow {
    from {
        text-shadow:
            0 2px 10px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(102, 126, 234, 0.3);
    }

    to {
        text-shadow:
            0 2px 10px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(118, 75, 162, 0.5);
    }
}

@keyframes iconPulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.7;
    }

    50% {
        transform: scale(1.5);
        opacity: 1;
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.8);
    }
}

@keyframes borderScan {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

@media (max-width: 768px) {
    .footer-content {
        padding: 1.5rem 1rem;
    }

    .footer-text {
        font-size: 0.9rem;
    }

    .footer-icons {
        gap: 0.8rem;
    }

    .icon-pulse {
        width: 6px;
        height: 6px;
    }
}

@media (max-width: 480px) {
    .footer {
        min-height: 100px;
    }

    .footer-content {
        padding: 1rem;
    }

    .footer-text {
        font-size: 0.8rem;
        letter-spacing: 0.3px;
    }
}
</style>
