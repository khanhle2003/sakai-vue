<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const toast = useToast();
const store = useStore();
const router = useRouter();

const TIME_SENT_OTP = 10;
const email = ref('');
const isLoading = ref(false);
const timer = ref(0);
const isTimerActive = ref(false);

const validateFormSubmit = () => {
    if (email.value == '') {
        toast.add({ severity: 'warn', summary: 'Lời nhắc cảnh báo', detail: 'Yêu cầu tất cả các trường!', life: 3000 });
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        toast.add({ severity: 'error', summary: 'Email không đúng định dạng', life: 3000 });
        return false;
    }

    return true;
};

const resetForm = () => {
    email.value = '';
};

const handleSubmitForgetPassword = () => {
    if (!validateFormSubmit()) {
        return;
    }
    isLoading.value = true;
    timer.value = TIME_SENT_OTP;
    isTimerActive.value = true;

    const interval = setInterval(() => {
        if (timer.value > 0) {
            timer.value--;
        } else {
            clearInterval(interval);
            isLoading.value = false;
            isTimerActive.value = false;
        }
    }, 1000);

    store
        .dispatch('auth/handleOTP', {
            email: email.value
        })
        .then((response) => {
            console.log(response);
            if (response.status == 200) {
                console.log(response.status);
            } else {
                const error = response.response.data.message;
                resetForm();
                toast.add({ severity: 'error', summary: error, life: 3000 });
            }
        });
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
                        <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">QUÊN MẬT KHẨU</div>
                        <span class="text-muted-color font-medium">Nhập để tiếp tục</span>
                    </div>

                    <div>
                        <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Tên tài khoản</label>
                        <InputText id="email1" type="text" placeholder="Tên tài khoản" class="w-full md:w-[30rem]" v-model="email" />

                        <div class="flex items-center justify-between mt-4 mb-6 gap-8">
                            <div></div>
                            <router-link :to="{ name: 'login' }">
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Quay lại đăng nhập</span>
                            </router-link>
                        </div>
                        <!-- <Button label="Sign In" @click="handleSubmit()" class="w-full" as="router-link" to="/"></Button> -->
                        <Button @click="handleSubmitForgetPassword()" :disabled="isLoading" class="w-full mb-4">
                            <template v-if="isTimerActive">
                                <span>{{ timer }} giây còn lại</span>
                            </template>
                            <template v-else>
                                <span>Gửi mã OTP</span>
                            </template>
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
