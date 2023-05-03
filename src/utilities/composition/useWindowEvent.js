import { onMounted, onUnmounted } from "vue";
export default function useWindowEvent(eventName,handlerEvent) {
    onMounted(() => {
        window.addEventListener("keydown", handlerEvent);
    });
    onUnmounted(() => {
        window.removeEventListener("keydown", handlerEvent);
    });
}