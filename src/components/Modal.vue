<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <Title :text="name" />
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ text }}
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

import Title from './Title.vue';

export default defineComponent({
    name: "Modal",
    props: {
        name: String,
        text: String,
    },
    data() {
        return {};
    },
    methods: {},
    components: { Title }
})
</script>
<style scoped>
button {
    color: var(--text-color);
    background-color: var(--primary-color);
    font-size: 12px;
    font-weight: 700;
    border: none;
}
</style>