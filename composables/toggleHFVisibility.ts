import { ref, computed } from "vue";

export const items = ref([
  { name: "Get Started Free", path: "/signin", isActive: false },
  { name: "Log In", path: "/login", isActive: false },
  { name: "Sign In", path: "/signin", isActive: false },
]);

export const ActivateItem = (index: number) => {
  items.value.forEach((item, i) => {
    item.isActive = i === index;
  });

  console.log("Active items:");
  items.value.forEach((item) => {
    console.log(`${item.name}: ${item.isActive}`);
  });
};

export const toggleVisibility = computed(() => {
  return items.value.some((item) => item.isActive);
});
