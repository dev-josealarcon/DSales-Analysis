import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">DSale Analysis</h1>
                <p className="lead">Analyze your sales performance from different perspectives.</p>
                <hr />
                <p>This application consists of displaying a dashboard from data provided by a back end built with Spring Boot.<br /><br />
                Used technology: <br /><br />
                <span>FRONT-END:</span> HTML5 <i className="fab fa-html5"></i> - CSS3 <i className="fab fa-css3-alt"></i>- JAVASCRIPT (React JS) <i className="fab fa-react"></i><br/>
                <span>BACK-END: </span> JAVA(Spring tool Suite) <i className="fab fa-java"></i><br />
                <span>DATABASE:</span> PostgreSQL <i className="fas fa-database"></i></p>
                <br />

            <Link className="btn btn-primary btn-lg" to="/dashboard">
                Access to DSale
            </Link>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;