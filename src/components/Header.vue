<template>
    <header class="header">
        <nav>
            <div class="logo">
                <router-link :to="currentLang === 'es' ? '/' : '/english'">
                    <img src="/img/Logo-color.png" alt="My Cleaning Solutions" />
                </router-link>
            </div>

            <ul class="nav-links">
                <li>
                    <router-link :to="currentLang === 'es' ? '/' : '/english'" :class="{ active: isActive('home') }">
                        {{ headerTexts.home }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="currentLang === 'es' ? '/servicios' : '/services'"
                        :class="{ active: isActive('services') }">
                        {{ headerTexts.services }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="currentLang === 'es' ? '/contacto' : '/contact'"
                        :class="{ active: isActive('contact') }">
                        {{ headerTexts.contact }}
                    </router-link>
                </li>
            </ul>

            <div class="language-selector">
                <router-link :to="currentLang === 'es' ? '/english' : '/'" class="language-link">
                    {{ currentLang === 'es' ? languageTexts.english : languageTexts.español }}
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTexts } from '@/composables/useTexts'

const route = useRoute()
const { currentLang, loadTexts, getHeaderTexts, getLanguageTexts } = useTexts()

const headerTexts = computed(() => getHeaderTexts())
const languageTexts = computed(() => getLanguageTexts())

const isActive = (page: string) => {
    const routeName = route.name
    return routeName && typeof routeName === 'string' && routeName.includes(page)
}

onMounted(() => {
    loadTexts()
})
</script>

<style scoped>
.header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.logo img {
    height: 60px;
    width: auto;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
}

.language-selector {
    display: flex;
    align-items: center;
}

.language-link {
    text-decoration: none;
    color: #667eea;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border: 2px solid #667eea;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: white;
}

.language-link:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem 1rem;
    }

    .nav-links {
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .nav-links a {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
    }

    .language-link {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
    }
}

@media (max-width: 480px) {
    .nav-links {
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
    }

    .nav-links a {
        text-align: center;
    }
}
</style>
