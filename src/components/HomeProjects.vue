<template>
    <div>
        <h3 class="pt-5 sub-header">Some of my works</h3>

        <div class="container">
            <div class="col-lg-12 mt-5 mb-5">
                <div class="mt-3 row">
                    <div class=" col-lg-6">
                        <div class="">
                            <img
                                style="max-width: 100%;"
                                src="../assets/images/cecyhealth.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="work-title">
                            CecyHealth
                        </p>
                        <p class="about-project">
                            CecyHealth is a healthcare organization with a passion to bring Quality and affordable healthcare to all parts of Africa.
                        </p>
                        
                        <div>
                            <a href="https://www.cecyhealth.com/" target="_blank" class="view"> View project </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-12 mt-5 mb-5">
                <div class="mt-3 row">
                    <div class=" col-lg-6">
                        <div class="">
                            <img
                                style="max-width: 100%;"
                                class="img-fluid"
                                src="../assets/images/tsg.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="work-title">
                            The Saints Gathering Church
                        </p>
                        <p class="about-project">
                            Website for The Saints Gathering Church with exciting features like downloadable sermons and devotionals.
                        </p>

                        <div>
                            <a href="https://thesaintsgathering.org/" target="_blank" class="view"> View project </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="see-more">
            <a href="/projects">See more</a>
        </div>

    </div>
</template>

<script setup></script>

<style scoped>
.sub-header {
    color: chartreuse;
}
a {
    max-width: fit-content;
}
a:hover {
    color: chartreuse;
}

.wrapper {
    margin-top: 20px;
}

.about-project  {
    font-size: 15px;
}

.archive {
    margin-left: 6px;
    text-decoration: underline;
}
.work-title {
    font-size: 18px;
    max-width: fit-content;
    color: var(--higlightColor);
    margin-top: 5px
}

.view {
    display: flex;
    justify-content: center;
    border: 1px solid;
    padding: 10px;
    max-width: fit-content;
}

.see-more, .see-more > a{
    text-align: center;
    margin: 15px 0;
    text-decoration: underline;
    color: chartreuse;
}
</style>
