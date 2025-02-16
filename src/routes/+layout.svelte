<script>
    let {children} = $props();
    import '../style/main.scss'
    import { onMount } from "svelte";

    let themes = ["light", "light-alt", "dark", "dark-alt"];
    let theme = "light";

    // Load saved theme from localStorage
    onMount(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        theme = savedTheme;
    });

    // Cycle through themes
    function switchTheme() {
        let currentIndex = themes.indexOf(theme);
        theme = themes[(currentIndex + 1) % themes.length]; // Cycle through array
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
</script>

<button on:click={switchTheme} class="theme-toggle">
  {theme === "light" ? "🌞 Light" :
   theme === "light-alt" ? "🌤️ Light-Alt" :
   theme === "dark" ? "🌙 Dark" : "🌌 Dark-Alt"}
</button>


<a href="/">Home</a>
<a href="/archive/">Archive</a>
<a href="/poem/">Poems</a>

{@render children()}

