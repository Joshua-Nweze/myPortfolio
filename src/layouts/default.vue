<template>
    <div class="body container p-4">
        <div class="row">
            <div
                class="col-lg-4 d-none d-lg-flex flex-column sidenav-container position-fixed py-5"
            >
                <div class="sidenav fs-2">
                    <div class="navbar-brand pt-4">Joshua Nweze</div>

                    <div
                        class="sidenav-items mt-5 d-flex flex-column fs-5 gap-2"
                    >
                        <RouterLink to="/" class="link">
                            <i class="bi bi-house me-2"></i>
                            home</RouterLink
                        >
                        <RouterLink to="/experience" class="link">
                            <i class="bi bi-briefcase me-2"></i>
                            experience
                        </RouterLink>
                        <RouterLink to="/projects" class="link">
                            <i class="bi bi-cone me-2"></i>
                            projects
                        </RouterLink>
                        <RouterLink to="/contact" class="link">
                            <i class="bi bi-person-rolodex me-2"></i>
                            contact
                        </RouterLink>
                        <RouterLink to="/certifications" class="link">
                            <i class="bi bi-folder me-2"></i>
                            certifications
                        </RouterLink>
                        <a :href="resumeLink" target="_blank" class="nav-link">
                            <i class="bi bi-file-earmark me-2"></i>
                            résumé
                        </a>
                    </div>
                </div>

                <div class="justify-content-end">
                    <a
                        href="https://twitter.com/TheJosh_N"
                        class="social-icon"
                        target="_blank"
                    >
                      <span><i class="bi bi-twitter fs-4"></i></span>
                    </a>

                    <a
                        href="https://github.com/Joshua-Nweze"
                        class="social-icon"
                        target="_blank"
                    >
                      <span><i class="bi bi-github fs-4"></i></span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/joshuanweze"
                        class="social-icon"
                        target="_blank"
                    >
                      <span><i class="bi bi-linkedin fs-4"></i></span>
                    </a>

                    <div class="footer pe-lg-5">
                        <hr />
                        &copy; {{ new Date().getFullYear() }}. Designed and
                        built by yours truly.
                    </div>
                </div>
            </div>
            <div class="col-lg-8 position-absolute right-0 main">
                <Nav />
                <div class="router-view">
                    <RouterView />
                </div>
                <Footer class="d-flex d-lg-none mt-5 py-2" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

let resumeLink = process.env.VUE_APP_RESUME_LINK;
</script>

<style>
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

.sidenav {
    height: 100%;
}

.sidenav-container {
    top: 0;
    bottom: 0;
    overflow: scroll;
    height: 100%;
    padding: 0 80px;
}

.link {
    max-width: fit-content;
}

.sidenav-container::-webkit-scrollbar {
    width: 0;
}

.sidenav-items {
    letter-spacing: -2px;
}

.router-link-exact-active {
    color: chartreuse;
}

.router-view,
.main {
    right: 0;
    position: relative;
    flex-grow: 1;
}

.social-icon {
    margin-right: 15px;
    color: var(--primaryColor);
    transition: 1s ease;
}

.social-icon:hover {
    margin-right: 15px;
    color: chartreuse;
    transition: 1s ease;
}

.nav-link {
    transition: 1s ease;
    color: var(--primaryColor);
}

.nav-link:hover {
    transition: 1s ease;
    color: chartreuse;
}

.footer {
    font-size: 15px;
}

@media only screen and (min-width: 1024px) {
    .main {
        padding-right: 80px;
    }
}

.main {
    min-height: 95vh;
    display: flex;
    flex-flow: column;
}

.navbar-brand {
    word-wrap: break-word;
    letter-spacing: -2px;
}
</style>
