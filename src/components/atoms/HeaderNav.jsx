import styled from 'styled-components';

const HeadeNav= styled.header`
#nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    padding: 20px 0;
    z-index: 999;
}

#nav.nav-sticky {
    height: 70px;
    padding: 8px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
    transition: all 0.3s;
}

#nav .navbar {
    height: 100%;
    background: transparent !important;
}

#nav .navbar-brand {
    padding: 0;
}

#nav .navbar-brand img {
    position: absolute;
    max-height: 60px;
    margin-top: -27px;
    transition: all .5s;
}

#nav.nav-sticky .navbar-brand img {
    position: absolute;
    max-height: 50px;
    margin-top: -25px;
    transition: all .5s;
}

#nav .nav-link,
#nav .nav-link:focus,
#nav .nav-link:hover,
#nav .nav-link.active {
    color: #ffffff;
}

#nav .nav-link:hover,
#nav .nav-link.active {
    color: #4F84C4;
    background: #ffffff;
    transition: none;
}

#nav .dropdown-menu {
    margin-top: 0;
    border: 0;
    border-radius: 0;
    background: #f8f9fa;
}

@media (min-width: 768px) {
    #nav,
    #nav .navbar {
        background: rgba(0, 0, 0, 1) !important;
    }
    
    #nav a.nav-link {
        padding: 8px 15px;
        font-size: 15px;
        text-transform: uppercase;
    }
}

@media (max-width: 768px) {   
    #nav,
    #nav .navbar {
        background: rgba(0, 0, 0, 1) !important;
    }
    
    #nav a.nav-link {
        padding: 5px;
    }
    
    #nav .dropdown-menu {
        box-shadow: none;
    }
    
    #nav .container-fluid {
        padding: 0;
    }
}

    
`;

export default HeadeNav;