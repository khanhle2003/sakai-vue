<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const toast = useToast();
const store = useStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const checked = ref(false);

const validateFormSubmit = () => {
    if (email.value == '' || password.value == '') {
        toast.add({ severity: 'warn', summary: 'Lời nhắc cảnh báo', detail: 'Yêu cầu tất cả các trường!', life: 3000 });
        return false;
    }
    return true;
};
const resetForm = () => {
    email.value = '';
    password.value = '';
};
const handleSubmit = () => {
    if (validateFormSubmit()) {
        store
            .dispatch('auth/login', {
                email: email.value,
                password: password.value
            })
            .then((response) => {
                if (response.status == 200) {
                    router.push('/');
                    toast.add({ severity: 'Success', summary: 'Login successfully!', life: 3000 });
                } else {
                    resetForm();
                    toast.add({ severity: 'error', summary: 'Login failure!', life: 3000 });
                }
            });
    }
};
</script>

<template>
    <Toast />
    <FloatingConfigurator />
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="text-center mb-8">
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">ĐĂNG NHẬP!</div>
                        <span class="text-muted-color font-medium">Đăng nhập để tiếp tục</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Tên tài khoản</label>
                        <InputText id="email1" type="text" placeholder="Tên tài khoản" class="w-full md:w-[30rem] mb-8" v-model="email" />

                        <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Mật khẩu</label>
                        <Password id="password1" v-model="password" placeholder="Mật khẩu" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <div class="flex items-center">
                                <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                <label for="rememberme1">Lưu mật khẩu</label>
                            </div>
                            <router-link :to="{ name: 'forgetPassword' }">
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Quên mật khẩu?</span>
                            </router-link>
                        </div>
                        <!-- <Button label="Sign In" @click="handleSubmit()" class="w-full" as="router-link" to="/"></Button> -->
                        <Button label="Đăng nhập" @click="handleSubmit()" class="w-full mb-4"></Button>
                        <router-link :to="{ name: 'register' }">
                            <Button label="Đăng ký" severity="info" class="w-full"></Button>
                        </router-link>
                        <Divider />
                        <Button label="Gmail" icon="pi pi-envelope" severity="danger" class="w-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
