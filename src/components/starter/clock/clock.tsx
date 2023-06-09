import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({
    date: new Date().toLocaleDateString("fr-FR"),
    time: new Date().toLocaleTimeString("fr-FR"),
  });

  useVisibleTask$(({ cleanup }) => {
    const update = () => {
      store.date = new Date().toLocaleDateString("fr-FR");
      store.time = new Date().toLocaleTimeString("fr-FR");
    };
    const interval = setInterval(update, 1000);
    cleanup(() => clearInterval(interval));
  });

  return (
    <span>
      {store.date} {store.time}
    </span>
  );
});
