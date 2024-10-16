<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const toast = useToast();
const store = useStore();
const route = useRoute();
const router = useRouter();

const password = ref('');
const passwordAgain = ref('');
const token = ref(route.query.token);
const email = ref(route.query.email);

const resetForm = () => {
    password.value = '';
    passwordAgain.value = '';
};

const validateForm = () => {
    if (password.value.length < 6) {
        toast.add({ severity: 'error', summary: 'Mật khẩu không được ngắn hơn 6 ký tự', life: 3000 });
        return false;
    }

    if (password.value !== passwordAgain.value) {
        toast.add({ severity: 'error', summary: 'Mật khẩu không khớp', life: 3000 });
    }
    return true;
};

const handleSubmitResetPassword = () => {
    console.log(123);
    if (validateForm()) {
        store
            .dispatch('auth/resetPassword', {
                password: password.value,
                token: token.value,
                email: email.value
            })
            .then((response) => {
                if (response.status == 200) {
                    router.push('/auth/login');
                }
                resetForm();
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
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">THAY ĐỔI MẬT KHẨU</div>
                        <span class="text-muted-color font-medium">Nhập để tiếp tục</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Mật khẩu mới</label>
                        <Password id="password1" v-model="password" placeholder="Mật khẩu" :toggleMask="true" class="mb-4" fluid :feedback="true"></Password>

                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Nhập lại mật khẩu mới</label>
                        <Password id="password1" v-model="passwordAgain" placeholder="Mật khẩu" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>

                        <div class="flex items-center justify-between mt-4 mb-6 gap-8">
                            <div></div>
                            <router-link :to="{ name: 'login' }">
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Quay lại đăng nhập</span>
                            </router-link>
                        </div>
                        <!-- <Button label="Sign In" @click="handleSubmit()" class="w-full" as="router-link" to="/"></Button> -->
                        <Button @click="handleSubmitResetPassword()" class="w-full mb-4">
                            <span>Thay đổi mật khẩu</span>
                        </Button>
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
