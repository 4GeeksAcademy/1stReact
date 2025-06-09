const Navbar = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand ms-5" href="#">Soy una Navbar oscura</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link " href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link me-5" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

  );

};


export default Navbar;