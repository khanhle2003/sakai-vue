<template>
    <div class="flex justify-between text-2xl font-semibold px-[56px] py-4 bg-gray-200">
        <div>LOGO</div>
        <div>
            <div class="relative inline-block">
                <Button class="mx-2" @click="toggleMenuUser()" icon="pi pi-user" severity="info" rounded outlined aria-label="User" />

                <div v-if="menuUser" class="absolute bg-red-300 top-[48px] left-[-70px] rounded-md">
                    <div class="w-[200px]">
                        <ul>
                            <li v-for="item in itemsMenu" :key="item.id">
                                <div class="flex justify-start hover:bg-yellow-100 cursor-pointer pl-3">
                                    <span class="text-lg">{{ item.name }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Button class="mx-2" icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
            <Button class="mx-2" icon="pi pi-cog" @click="toggleSidebar" severity="danger" rounded outlined aria-label="Cancel" />
        </div>
    </div>
</template>

<script setup>
import { useSidebar } from './composables/layout';
import { ref } from 'vue';

const { toggleSidebar } = useSidebar();
const menuUser = ref(false);

const toggleMenuUser = () => {
    menuUser.value = !menuUser.value;
};

const itemsMenu = [
    {
        icon: 'pi pi-bell',
        name: 'Đăng nhập'
    },
    {
        icon: 'pi pi-bell',
        name: 'Đăng nhập'
    },
    {
        icon: 'pi pi-bell',
        name: 'Đăng nhập'
    },
    {
        icon: 'pi pi-bell',
        name: 'Đăng nhập'
    }
];
</script>
