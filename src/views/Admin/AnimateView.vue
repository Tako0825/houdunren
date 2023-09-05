<template>
    <div class="w-full h-full overflow-hidden">
        <button 
            @click="toggle"
            class="px-4 py-2 rounded-md bg-purple-200" 
        >Toggle</button>

        <transition name="fade" appear>
            <p v-if="show" class="p-2 my-4 bg-purple-400 rounded-md">This is a fade transition.</p>
        </transition>
        <transition name="slide" appear>
            <p v-if="show" class="p-2 my-4 bg-purple-400 rounded-md">This is a slide transition.</p>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        }
    },
    mounted() {
        this.show = true;
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active,
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-enter,
.fade-leave-to,
.slide-enter,
.slide-leave-to {
    opacity: 0;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}
</style>