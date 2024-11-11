import profile from "../assets/img/dioren/Gi.gif";

function AboutSection () {
    return (
        <>
        


        <div class="container">
            <div class="full-screen-height row flex-lg-row-reverse justify-content-center align-items-center text-center g-5 py-3">
            <div class="col-10 col-sm-8 col-lg-6">

                <img src={profile} class="border-outline rounded-circle d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6 text-center">
            <h1 class="text-center display-6 fw-bold text-body-emphasis lh-1 mb-3">About Me</h1>
            <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
            Hello, I’m Dioren, or as my community knows me, Dominant Dioren. I’m a 22-year-old computer science student, fitness enthusiast, and content creator dedicated to merging the worlds of technology and self-improvement.                </p>
            </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default AboutSection;