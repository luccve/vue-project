<template>
    <VueRecaptcha :sitekey="siteKey" :load-recaptcha-script="true" @verify="handleSuccess" @error="handleError">
    </VueRecaptcha>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';

export default defineComponent({
    name: 'ReCaptcha',
    components: {
        VueRecaptcha
    },
    setup() {
        const siteKey = computed(() => {
            return '6LdsFO4jAAAAAFZvRkDyP90O3lfX1h-bOdg7tC04';
        });

        const handleError = () => {
            // Do some validation
        };

        const handleSuccess = (response: string) => {
            console.log(response);
        };

        return {
            handleSuccess,
            handleError,
            siteKey,
        };
    }
});
</script>