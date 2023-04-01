
import HeadeNav from "../atoms/HeaderNav";
import TitleHeader from "../atoms/TitleHeader";
import Label from "../atoms/Label";


function WrapperNav() {
    return(
        <>
        <div id="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="index.html" class="navbar-brand">
                        <img src="" alt="" />
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav ml-auto">
                            <a href="index.html" class="nav-item nav-link active">Home</a>
                            <a href="about.html" class="nav-item nav-link">About</a>
                            <a href="service.html" class="nav-item nav-link">Service</a>
                            <a href="portfolio.html" class="nav-item nav-link">Portfolio</a>
                            <a href="pricing.html" class="nav-item nav-link">Pricing</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu">
                                    <a href="skill.html" class="dropdown-item">Skills</a>
                                    <a href="team.html" class="dropdown-item">Team Members</a>
                                    <a href="review.html" class="dropdown-item">Reviews</a>
                                    <a href="client.html" class="dropdown-item">Clients</a>
                                    <a href="single.html" class="dropdown-item">Single Page</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>

    );

}
export default WrapperNav;