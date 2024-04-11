<template>
    <nav
        class="nav navbar navbar-expand-lg d-lg-none border-bottom border-secondary"
        id="navbar"
        ref="navbar"
    >
        <div class="container">
            <div @click="navigateTo('/')" class="navbar-brand nav-link addChartreuse"
                >JN</div
            >

            <button
                class="navbar-toggler addChartreuse"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span><i class="bi bi-list-nested"></i></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <div class="navitems">
                    <ul class="navbar-nav justify-content-end">
                        <li class="nav-item">
                            <div
                                class="nav-link"
                                @click="navigateTo('/')"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown"
                                ref="home"
                            >
                                <i class="bi bi-house me-2"></i> home
                            </div>
                        </li>
                        <li class="nav-item">
                            <div
                                class="nav-link"
                                @click="navigateTo('/experience')"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown"
                                ref="experience"
                            >
                                <i class="bi bi-briefcase me-2"></i> experience
                            </div>
                        </li>
                        <li class="nav-item">
                            <div
                                class="nav-link"
                                @click="navigateTo('/projects')"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown"
                                ref="projects"
                            >
                                <i class="bi bi-cone me-2"></i> projects
                            </div>
                        </li>
                        <li class="nav-item">
                            <div
                                class="nav-link"
                                @click="navigateTo('/contact')"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown"
                                ref="contact"
                            >
                                <i class="bi bi-person-rolodex me-2"></i>contact
                            </div>
                        </li>
                        <li class="nav-item ml-5 mr-5">
                            <a
                                class="nav-link"
                                href="https://drive.google.com/file/d/1FLIJcPVAH60Fytx3AF6w7-cMfI_CSic_/view?usp=sharing"
                                target="_blank"
                                ><i class="bi bi-file-earmark me-2"></i>
                                resume</a
                            >
                        </li>
                    </ul>
                </div>

                <div class="mt-4 mb-2">
                    <a
                        href="https://twitter.com/TheJosh_N"
                        class="social-icon"
                        target="_blank"
                        ><span><i class="bi bi-twitter fs-4"></i></span
                    ></a>
                    <a
                        href="https://github.com/Joshua-Nweze"
                        class="social-icon"
                        target="_blank"
                        ><span><i class="bi bi-github fs-4"></i></span
                    ></a>
                    <a
                        href="https://www.linkedin.com/in/joshuanweze"
                        class="social-icon"
                        target="_blank"
                        ><span><i class="bi bi-linkedin fs-4"></i></span
                    ></a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

let route = useRoute();
let router = useRouter();

let home = ref(null)
let experience = ref(null)
let projects = ref(null)
let contact = ref(null)

let navbar = ref(null)

function styleNavLink() {
    setTimeout(() => {
        home.value.classList.remove('router-link-exact-active')
        experience.value.classList.remove('router-link-exact-active')
        projects.value.classList.remove('router-link-exact-active')
        contact.value.classList.remove('router-link-exact-active')

        if (route.path == '/') {
            home.value.classList.add('router-link-exact-active')
        }
        if (route.path == '/experience') {
            experience.value.classList.add('router-link-exact-active')
        }
        if (route.path == '/projects') {
            projects.value.classList.add('router-link-exact-active')
        }
        if (route.path == '/contact') {
            contact.value.classList.add('router-link-exact-active')
        }
    }, 500);
}
styleNavLink();

function navigateTo(route) {
    router.push(route);

    styleNavLink();
}
</script>

<style scoped>
nav {
    text-align: center;
    background-color: var(--backGround);
}

.navbar {
    transition: 0.5s;
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    right: 0;
}

.navbar-brand {
    font-size: 30px;
}

.navitems {
    margin-left: auto;
}

.addChartreuse {
    color: chartreuse;
}

.navbar-toggler {
    /* border-color: chartreuse;   */
    /* color: chartreuse; */
    border: none;
}

.router-link-exact-active {
    color: chartreuse;
}
</style>
