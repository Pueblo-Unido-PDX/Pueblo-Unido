<header class="navigation">
  <button class="ham">
    <!-- material icons https://material.io/resources/icons/ -->
    <span class="menuIcon material-icons" style="display: block">
      menu
    </span>
    <span class="xIcon material-icons" style="display: none; color: #ffffff;">
      close
    </span>
  </button>
  <ul class="menu">
    <li class="menuSection">
      <a class="button--link menuLink" href="get-help-detention.html.es">Obtenga Ayuda</a>
      <ul>
        <li>
          <a class="menuLink menuLink--nested" href="get-help-detention.html.es">Para Personas que Enfrentan la Deportación</a>
        </li>
        <li>
          <a class="menuLink menuLink--nested" href="get-help-other.html.es">Con Otras Cuestiones Migratorias</a>
        </li>
      </ul>
    </li>
    <li class="menuSection">
      <a class="button--link menuLink" href="donate.html.es">Donar</a>
      <ul>
        <li>
          <a class="menuLink menuLink--nested" href="sponsors.html.es">Patrocinadores</a>
        </li>
      </ul>
    </li>
    <li class="menuSection">
      <a class="button--link menuLink" href="volunteer.html.es">Ser Voluntarix</a>
      <ul>
        <li>
          <a class="menuLink menuLink--nested" href="volunteer-committees.html.es">Unáse</a>
        </li>
        <li>
          <a class="menuLink menuLink--nested" href="volunteer.html.es#equity-corps">Equity Corps Community Navigators</a>
        </li>
      </ul>
    </li>
    <li class="menuSection">
      <a class="button--link menuLink" href="about.html.es">Sobre Nosotros</a>
      <ul>
        <li>
          <a class="menuLink menuLink--nested" href="staff.html.es">Personal</a>
        </li>
        <li>
          <a class="menuLink menuLink--nested" href="community-feedback.html.es">Comentarios de la Comunidad</a>
        </li>
      </ul>
    </li>        
    <li class="menuSection">
      <a class="button--link menuLink" href="why-latinx.html.es">¿Porque Latinx?</a>
    </li>
    <li class="menuSection">
      <a class="button--link menuLink" href="collective-of-indigenous-interpreters-of-oregon.html.es">Colectivo de Intérpretes Indígenas de Oregon</a>
    </li>
    <li class="menuSection menuSection--logo">
      <img src="../assets/images/pu-logo/PNG/pueblo-unido-logo--all-white-01.png">
    </li>
  </ul>
  <div class="navigation-row">
    <div class="navigation-row--left">
      <a href="home.html.es">
        <img alt="Pueblo Unido Logo" src="./assets/images/pu-logo/SVG/pueblo-unido-logo.svg"></img>
      </a>
    </div>
    <div class="navigation-row--right">
      <ul class="navigation__link-group">
        <li class="navigation__dropdown">
          <a class="button--link" href="get-help-detention.html.es">Obtenga Ayuda</a>
          <ul class="submenu">
            <li>
              <a href="get-help-detention.html.es">Para Personas que Enfrentan la Deportación</a>
            </li >
            <li>
              <a href="get-help-other.html.es">Con Otras Cuestiones Migratorias</a>
            </li>
          </ul>
        </li>
        <li class="navigation__dropdown">
          <a class="button--link" href="donate.html.es">Donar</a>
          <ul class="submenu">
            <li>
              <a href="sponsors.html.es">Patrocinadores</a>
            </li>
          </ul>
        </li>
        <li class="navigation__dropdown">
          <a class="button--link" href="volunteer.html.es">Ser Voluntarix</a>
          <ul class="submenu">
            <li>
              <a href="volunteer-committees.html.es">Unáse</a>
            </li>
          </ul>
        </li>
        <li class="navigation__dropdown">
          <a class="button--link" href="about.html.es">Sobre Nosotros</a>
          <ul class="submenu">
            <li>
              <a href="staff.html.es">Personal</a>
            </li>
            <li>
              <a href="community-feedback.html.es">Comentarios de la Comunidad</a>
            </li>
          </ul>
        </li>        
        <li class="navigation__link">
          <a class="button--link" href="why-latinx.html.es">¿Porque Latinx?</a>
        </li>
        <li class="navigation__link">
          <a class="button--link" href="collective-of-indigenous-interpreters-of-oregon.html.es">Colectivo de Intérpretes Indígenas de Oregon</a>
        </li>
      </ul>
    </div>
  </div>
</header>
<script type="text/javascript">
  var menu = document.querySelector(".menu");
  var ham = document.querySelector(".ham");
  var xIcon = document.querySelector(".xIcon");
  var menuIcon = document.querySelector(".menuIcon");

  // toggle menu in and out when clicking on the hamburger
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      xIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      xIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  ham.addEventListener("click", toggleMenu);
  menu.classList.contains("showMenu");

  var menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleMenu);
    }
  )
</script>