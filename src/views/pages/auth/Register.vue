<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const toast = useToast();
const router = useRouter();

const username = ref('');
const email = ref('');
const password = ref('');
const passwordAgain = ref('');

const validateForm = () => {
    if (username.value == '' || email.value == '' || password.value == '' || passwordAgain.value == '') {
        toast.add({ severity: 'error', summary: 'Yêu cầu nhập tất cả các trường', life: 3000 });
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        toast.add({ severity: 'error', summary: 'Email không đúng định dạng', life: 3000 });
        return false;
    }

    if (password.value.length < 6) {
        toast.add({ severity: 'error', summary: 'Mật khẩu phải dài hơn 6 ký tự', life: 3000 });
        return ffalse;
    }

    if (password.value !== passwordAgain.value) {
        toast.add({ severity: 'error', summary: 'Mật khẩu và mật khẩu nhập lại không giống nhau', life: 3000 });
        return false;
    }
    return true;
};

const resetForm = () => {
    username.value = '';
    email.value = '';
    password.value = '';
    passwordAgain.value = '';
};

const handleSubmitRegisterForm = () => {
    if (validateForm()) {
        store
            .dispatch('auth/register', {
                username: username.value,
                email: email.value,
                password: password.value
            })
            .then((response) => {
                if (response.status == 200) {
                    router.push('/auth/login');
                } else {
                    const error = response.response.data.message;
                    resetForm();
                    toast.add({ severity: 'error', summary: error, life: 3000 });
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
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">ĐĂNG KÝ!</div>
                        <span class="text-muted-color font-medium">Đăng ký để tiếp tục</span>
                    </div>

                    <div>
                        <label for="username" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Họ và tên</label>
                        <InputText id="username" type="text" placeholder="Họ và tên" class="w-full md:w-[30rem] mb-8" v-model="username" />

                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                        <InputText id="email1" type="text" placeholder="Địa chỉ email" class="w-full md:w-[30rem] mb-6" v-model="email" />

                        <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Mật khẩu</label>
                        <Password id="password1" v-model="password" placeholder="Mật khẩu" :toggleMask="true" class="mb-8" fluid :feedback="true"></Password>
                        <label for="passwordAgain" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Nhập lại mật khẩu</label>
                        <Password id="passwordAgain" v-model="passwordAgain" placeholder="Nhập lại mật khẩu" :toggleMask="true" class="mb-8" fluid :feedback="false"></Password>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <div></div>
                            <router-link :to="{ name: 'login' }">
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Quay lại đăng nhập</span>
                            </router-link>
                        </div>
                        <!-- <Button label="Sign In" @click="handleSubmit()" class="w-full" as="router-link" to="/"></Button> -->
                        <Button label="Đăng ký" @click="handleSubmitRegisterForm()" class="w-full"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
