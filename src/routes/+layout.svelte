<script>
    let {children} = $props();
    import '../style/main.scss'
    import { onMount } from "svelte";

    let themes = ["light", "dark", ];
    let theme = $state("dark");

    // Load saved theme from localStorage
    onMount(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);
        theme = savedTheme;
    });
    // Cycle through themes
    function switchTheme() {
    const btn =  document.querySelector(".theme-toggle");
        let currentIndex = themes.indexOf(theme);
        theme = themes[(currentIndex + 1) % themes.length]; // Cycle through array
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
</script>


<div class="logo">
    <a href="/">
        Mani's Archive
    </a>
    <button on:click={switchTheme} class="theme-toggle">
  {theme === "light" ? "🌞 Light" :
   theme === "light-alt" ? "🌤️ Light-Alt" :
   theme === "dark" ? "🌙 Dark" : "🌌 Dark-Alt"}
</button>
</div>

<nav>
    <a href="/#about">About</a>
    <a href="/archive/">Archive</a>
    <a href="/poem/">Poems</a>
</nav>


<style>
  .logo{
        margin-top: var(--font-h6);
  }
    .logo a{
        font-size: var(--font-logo);
        font-weight: 200;
        text-decoration: underline 1px;
    }
    nav{
        max-width: var(--nav-width);
        display: flex;
        justify-content: space-between;
    }
    nav a{
        font-size: var(--font-h6);
        font-weight: 500;
    }
</style>
{@render children()}

<footer>
    Hello
</footer>
