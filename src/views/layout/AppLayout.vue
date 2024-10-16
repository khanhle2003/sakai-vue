<script setup>
import { ref } from 'vue';
import HeaderAdmin from './HeaderAdmin.vue';
import MenuAdmin from './MenuAdmin.vue';

const flag = ref(false);
const getData = (value) => {
    flag.value = value;
};
</script>

<template>
    <header-admin @changed-menu="getData"></header-admin>
    <menu-admin :status="flag"></menu-admin>
    <router-view></router-view>
</template>
