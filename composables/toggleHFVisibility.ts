import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

interface NavItem {
  name: string;
  path: string;
  isActive: boolean;
}

const defaultItems: NavItem[] = [
  { name: "Get Started Free", path: "/signin", isActive: false },
  { name: "Log In", path: "/login", isActive: false },
  { name: "Sign In", path: "/signin", isActive: false },
];

export const items = ref<NavItem[]>([...defaultItems]);
export const toggleVisibility = ref(false);

export const ActivateItem = (index: number) => {
  items.value.forEach((item, i) => {
    item.isActive = i === index;
  });

  toggleVisibility.value = items.value.some((item) => item.isActive);
};

// ✅ Use route and watch for changes
export const useVisibilityControl = () => {
  const route = useRoute();

  const applyVisibilityLogic = () => {
    if (route.path === "/login" || route.path === "/signin") {
      const stored = localStorage.getItem("navRefresh");
      if (stored) {
        try {
          items.value = JSON.parse(stored);
        } catch (e) {
          items.value = [...defaultItems];
        }
      }
      toggleVisibility.value = items.value.some((item) => item.isActive);

      // Watch for localStorage saving only on target routes
      watch(
        items,
        (newItems) => {
          localStorage.setItem("navRefresh", JSON.stringify(newItems));
        },
        { deep: true }
      );
    } else {
      // If on other routes, reset visibility
      toggleVisibility.value = false;
    }
  };

  // Call it on mount
  onMounted(() => {
    if (typeof window !== "undefined") applyVisibilityLogic();
  });

  // Also call when route changes
  watch(
    () => route.path,
    () => {
      if (typeof window !== "undefined") applyVisibilityLogic();
    }
  );
};
