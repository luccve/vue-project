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
            return process.env.VUE_APP_KEY_SITE_RECAPTCHA;
        });

        const handleError = () => {
            // Do some validation
        };


        return {

            handleError,
            siteKey,
        };
    },
    methods: {
        handleSuccess(response: string) {
            const secret = process.env.VUE_APP_KEY_SERVER_RECAPTCHA;
            const body = "secret=" + secret + "&response=" + response;

            fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', mode: "no-cors", headers: { 'Content-Type': 'application/json' }, body: body })
                .then((responseBack) => responseBack.json()).then((response) => console.log(response));

            this.$emit('success', response);
        }
    }
});
</script>