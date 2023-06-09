import { component$ } from "@builder.io/qwik";
import { LogoTricolor } from "../icons/logoTricolor";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <LogoTricolor height={150} width={150} />
          </a>
        </div>
        <ul>
          <li>
            <a href="#projets">Mes projets</a>
          </li>
          <li>
            <a href="#examples">Me contacter</a>
          </li>
        </ul>
      </div>
    </header>
  );
});
