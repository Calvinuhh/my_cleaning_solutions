<template>
    <div class="form-container">
        <h2>{{ formTexts.form }}</h2>

        <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
                <label for="name">{{ formTexts.name }}</label>
                <input type="text" id="name" v-model="formData.name" :placeholder="formTexts.placeholderName"
                    required />
            </div>

            <div class="form-group">
                <label for="lastName">{{ formTexts.lastName }}</label>
                <input type="text" id="lastName" v-model="formData.lastName"
                    :placeholder="formTexts.placeholderLastName" required />
            </div>

            <div class="form-group">
                <label for="email">{{ formTexts.email }}</label>
                <input type="email" id="email" v-model="formData.email" :placeholder="formTexts.placeholderEmail"
                    required />
            </div>

            <div class="form-group">
                <label for="message">{{ formTexts.message }}</label>
                <textarea id="message" v-model="formData.message" :placeholder="formTexts.placeholderMessage" rows="5"
                    required></textarea>
            </div> <button type="submit" class="btn-send" :disabled="isSubmitting">
                {{ isSubmitting ? (currentLang === 'es' ? 'Enviando...' : 'Sending...') : formTexts.btnSend }}
            </button>
        </form>
        <div class="whatsapp-section">
            <p>{{ messageContact }}</p>
            <a :href="whatsappLink" target="_blank" class="whatsapp-link">
                <img :src="whatsappImage" :alt="messageContact" class="whatsapp-image" />
            </a>
        </div>

        <Notification :show="notification.show" :message="notification.message" :type="notification.type"
            @close="closeNotification" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTexts } from '@/composables/useTexts'
import emailjs from '@emailjs/browser'
import Notification from './Notification.vue'

const { currentLang, loadTexts, getFormTexts, getMessageContact } = useTexts()

const formTexts = computed(() => getFormTexts())
const messageContact = computed(() => getMessageContact())

const formData = ref({
    name: '',
    lastName: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)

const notification = ref({
    show: false,
    message: '',
    type: 'info' as 'success' | 'error' | 'info'
})

const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    notification.value = { show: true, message, type }
}

const closeNotification = () => {
    notification.value.show = false
}

const whatsappLink = computed(() => {
    return currentLang.value === 'es'
        ? 'https://wa.link/dg5kkx'
        : 'https://wa.link/97qtjx'
})

const whatsappImage = computed(() => {
    return currentLang.value === 'es'
        ? '/img/wa.link_dg5kkx.png'
        : '/img/wa.link_97qtjx_EN.png'
})

const handleSubmit = async () => {
    if (isSubmitting.value) return

    isSubmitting.value = true

    try {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

        if (!publicKey) {
            throw new Error('EmailJS public key not configured')
        }

        const templateParams = {
            name: formData.value.name,
            apellido: formData.value.lastName,
            email: formData.value.email,
            mensaje: formData.value.message
        }
        await emailjs.send(serviceID, templateID, templateParams, publicKey)

        showNotification(
            currentLang.value === 'es'
                ? '¡Formulario enviado correctamente!'
                : 'Form sent successfully!',
            'success'
        )

        formData.value = {
            name: '',
            lastName: '',
            email: '',
            message: ''
        }

    } catch (error) {
        showNotification(
            currentLang.value === 'es'
                ? 'Error al enviar el formulario. Por favor, intenta de nuevo.'
                : 'Error sending form. Please try again.',
            'error'
        )
    } finally {
        isSubmitting.value = false
    }
}

onMounted(() => {
    loadTexts()
})
</script>

<style scoped>
.form-container {
    max-width: 700px;
    margin: 3rem auto;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 10px 20px rgba(0, 0, 0, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    animation: fadeInUp 0.8s ease-out;
    position: relative;
    overflow: hidden;
}

.form-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent);
    animation: shimmer 3s infinite;
}

.form-container h2 {
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    animation: textGlow 2s ease-in-out infinite alternate;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    position: relative;
    animation: slideInLeft 0.6s ease-out;
    animation-fill-mode: both;
}

.form-group:nth-child(2) {
    animation-delay: 0.1s;
}

.form-group:nth-child(3) {
    animation-delay: 0.2s;
}

.form-group:nth-child(4) {
    animation-delay: 0.3s;
}

.form-group:nth-child(5) {
    animation-delay: 0.4s;
}

.form-group label {
    margin-bottom: 0.8rem;
    font-weight: 600;
    color: #333;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.9;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
    padding: 0.5rem 0.75rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    border-left: 4px solid #667eea;
    backdrop-filter: blur(10px);
}

.form-group input,
.form-group textarea {
    padding: 1.2rem 1.5rem;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(102, 126, 234, 0.3);
    border-radius: 16px;
    font-size: 1.1rem;
    color: #333;
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(102, 126, 234, 0.6);
    font-style: italic;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-2px);
    box-shadow:
        0 10px 25px rgba(102, 126, 234, 0.3),
        0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.btn-send {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 1.2rem 3rem;
    border-radius: 16px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    animation: slideInUp 0.6s ease-out 0.5s both;
}

.btn-send::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn-send:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

.btn-send:hover:not(:disabled)::before {
    left: 100%;
}

.btn-send:active:not(:disabled) {
    transform: translateY(-1px);
}

.btn-send:disabled {
    background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
    box-shadow: none;
}

.whatsapp-section {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    animation: fadeIn 0.8s ease-out 0.6s both;
}

.whatsapp-section p {
    margin-bottom: 1.5rem;
    color: #333;
    font-size: 1.1rem;
    font-weight: 500;
    opacity: 0.9;
    background: rgba(255, 255, 255, 0.8);
    padding: 1rem;
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.whatsapp-link {
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.whatsapp-link:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.whatsapp-image {
    max-width: 220px;
    height: auto;
    border-radius: 16px;
    transition: all 0.4s ease;
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

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

@keyframes textGlow {
    from {
        text-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
    }

    to {
        text-shadow: 0 0 30px rgba(118, 75, 162, 0.8);
    }
}

@media (max-width: 768px) {
    .form-container {
        margin: 1.5rem;
        padding: 2rem;
        border-radius: 20px;
    }

    .form-container h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .contact-form {
        gap: 1.5rem;
    }

    .form-group input,
    .form-group textarea {
        padding: 1rem 1.25rem;
        font-size: 1rem;
    }

    .btn-send {
        padding: 1rem 2rem;
        font-size: 1rem;
    }

    .whatsapp-image {
        max-width: 180px;
    }
}

@media (max-width: 480px) {
    .form-container {
        margin: 1rem;
        padding: 1.5rem;
    }

    .form-container h2 {
        font-size: 1.8rem;
    }

    .whatsapp-image {
        max-width: 150px;
    }
}
</style>
