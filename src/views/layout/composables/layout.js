import { computed, reactive, readonly } from 'vue';

const sidebarState = reactive({
    visible: false,
    overlayActive: false
});

export function useSidebar() {
    // Toggle visibility of the sidebar
    const toggleSidebar = () => {
        sidebarState.visible = !sidebarState.visible;
        sidebarState.overlayActive = sidebarState.visible;
    };

    // Show the sidebar
    const showSidebar = () => {
        sidebarState.visible = true;
        sidebarState.overlayActive = true; // Cập nhật trạng thái overlay khi hiển thị
    };

    // Hide the sidebar
    const hideSidebar = () => {
        sidebarState.visible = false;
        sidebarState.overlayActive = false; // Cập nhật trạng thái overlay khi ẩn
    };

    // Computed property to check if sidebar is visible
    const isSidebarVisible = computed(() => sidebarState.visible);

    // Computed property to check if overlay is active
    const isOverlayActive = computed(() => sidebarState.overlayActive);

    return {
        sidebarState: sidebarState,
        toggleSidebar,
        showSidebar,
        hideSidebar,
        isSidebarVisible,
        isOverlayActive
    };
}
