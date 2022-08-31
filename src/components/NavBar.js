import logo from '../logo.svg';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-Primary">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">React</a> */}
                    <img src={logo} className="App-logo-bs" alt="logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Productos</a>
                        <a class="nav-link" href="#">Nosotros</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;