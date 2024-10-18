<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="sidebarState.visible" header="Sidebar">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
    </div>
</template>

<script setup>
import { useSidebar } from './composables/layout';

const { hideSidebar, showSidebar, sidebarState } = useSidebar();
</script>
