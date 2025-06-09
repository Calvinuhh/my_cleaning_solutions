<template>
    <Transition name="notification">
        <div v-if="show" :class="['notification', type]">
            <div class="notification-content">
                <div class="notification-icon">
                    <span v-if="type === 'success'">✓</span>
                    <span v-else-if="type === 'error'">✗</span>
                    <span v-else>ℹ</span>
                </div>
                <div class="notification-message">
                    {{ message }}
                </div>
                <button @click="close" class="notification-close">×</button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
    message: string
    type?: 'success' | 'error' | 'info'
    duration?: number
    show?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    type: 'info',
    duration: 5000,
    show: false
})

const emit = defineEmits<{
    close: []
}>()

const show = ref(props.show)

let timer: number | null = null

const close = () => {
    show.value = false
    emit('close')
}

watch(() => props.show, (newValue) => {
    show.value = newValue

    if (newValue && props.duration > 0) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(close, props.duration)
    }
}, { immediate: true })
</script>

<style scoped>
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 400px;
    min-width: 300px;
}

.notification-content {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    background: white;
}

.notification.success .notification-content {
    border-left: 4px solid #28a745;
}

.notification.error .notification-content {
    border-left: 4px solid #dc3545;
}

.notification.info .notification-content {
    border-left: 4px solid #007bff;
}

.notification-icon {
    margin-right: 0.75rem;
    font-size: 1.25rem;
    font-weight: bold;
}

.notification.success .notification-icon {
    color: #28a745;
}

.notification.error .notification-icon {
    color: #dc3545;
}

.notification.info .notification-icon {
    color: #007bff;
}

.notification-message {
    flex: 1;
    color: #333;
    font-weight: 500;
}

.notification-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #666;
    cursor: pointer;
    padding: 0;
    margin-left: 0.75rem;
    line-height: 1;
}

.notification-close:hover {
    color: #333;
}

.notification-enter-active,
.notification-leave-active {
    transition: all 0.3s ease;
}

.notification-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.notification-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
