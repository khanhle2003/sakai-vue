<template>
    <div class="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <!-- Logo and Name -->
        <div class="flex items-center">
            <img src="" alt="Logo" class="h-10 mr-2" />
            <span class="text-xl font-bold">BookStore</span>
        </div>

        <!-- Navigation Menu -->
        <ul class="flex space-x-20 text-lg">
            <li class="cursor-pointer hover:text-green-600">Trang chủ &#9662;</li>
            <li class="cursor-pointer hover:text-green-600">Tin sách &#9662;</li>
            <li class="cursor-pointer hover:text-green-600">Sách hot &#9662;</li>
            <li class="cursor-pointer hover:text-green-600">Tác giả &#9662;</li>
            <li class="cursor-pointer hover:text-green-600">Cuộc thi &#9662;</li>
            <li class="cursor-pointer hover:text-green-600">Về BookStore &#9662;</li>
            <li class="cursor-pointer hover:text-green-600">Liên hệ &#9662;</li>
        </ul>

        <!-- Search and Icons -->
        <div class="flex items-center space-x-4">
            <div class="relative">
                <input type="text" placeholder="Tìm kiếm..." class="border border-green-500 rounded-full px-4 py-1 w-64" />
                <button class="absolute right-2 top-1/2 transform -translate-y-1/2 ">
                    <i class="pi pi-search text-green-500"></i>
                </button>
            </div>
            <i class="pi pi-user text-xl cursor-pointer rounded-full text-green-500"></i>
            <i class="pi pi-shopping-cart text-xl cursor-pointer rounded-full text-green-500"></i>
        </div>
    </div>
</template>

<script setup>
// No changes needed in the script for this layout
</script>

