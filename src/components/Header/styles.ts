import styled from 'styled-components';


export const Container = styled.header`   
 

-moz-box-align: center;
align-items: center;
//-moz-box-pack: justify;
justify-content: space-between;
justify-content: center;
background: rgb(12, 43, 55) none repeat scroll 0% 0%;
height: 4rem;


//padding: 1px 1rem 1rem 1rem;
//z-index: 997;
//position: fixed;
display: flex;

img.home{
    border: none;
    width:36px;
    height: 36px;
    background-color: #0c2b37;
    color: #0c2b37;
    
    font-size: 2rem;
    cursor: pointer
}

ul.menu, .menu li, .menu a{
     margin:0;
     padding:0;
     list-style:none;
     text-decoration:none;
    }
    ul.menu ul{
     position:absolute;
     display:none;
     box-shadow:3px 3px 2px #333;
    }
//*****************O que é RFID*****************************/
.menu li:hover > ul.submenu-1-rfid{
     display:block;
     top:45px;
     left:0;
     padding:5px;
     width:510px;
     border-radius:5px 5px 5px 5px;
    }
.menu ul.submenu-1-rfid a{
     width: 500px;
     padding:0 20px;
     border-radius:5px;
    }
.submenu-1-rfid{
     background:#0c2b37;
    }
.submenu-1-rfid li:hover > a{
     background:#75a934;
}
//*****************VRA - VRS*****************************/
/* Configurações nivel 1*/
    ul.menu{
     float:left;
     font-family:Verdana, Geneva, sans-serif;
     font-size:22px;
     border-radius:5px;
     padding:0 30px;
    }
    .menu li{
     float:left;
     width:auto;
     position:relative;
    }
    .menu li a{
     display:block;
     padding:0 25px;
     line-height:45px;
     height:45px;
     float:left;
     transition:all 0.1s linear;
    }
/* Configurações nivel 2*/
    .menu li:hover > ul.submenu-1{
     display:block;
     top:45px;
     left:0;
     padding:5px;
     width:200px;
     border-radius:5px 5px 5px 5px;
    }
    .menu ul.submenu-1 a{
     width: 190px;
     padding:0 20px;
     border-radius:5px;
    }

/*Configurações de cores*/
/*nivel 1*/
.menu{
    background: #0c2b37;
    display: flex;
    align-items: center;
    justify-content: center;
}
.menu a{
     color:#FFF;
}
.menu li:hover > a{
     background:#75a934;
}
/*nivel 2*/
.submenu-1{
     background:#0c2b37;
}
.submenu-1 a{
    color:#FFF;
}
.submenu-1 li:hover > a{
     background:#75a934;
}

//*****************QUEM SOMOS*****************************/
.menu li:hover > ul.submenu-1-quem{
     display:block;
     top:45px;
     left:0;
     padding:5px;
     width: 210px;
     border-radius:5px 5px 5px 5px;
    }
.menu ul.submenu-1-quem a{
     width: 200px;
     padding:0 20px;
     border-radius:5px;
    }
.submenu-1-quem{
     background:#0c2b37;
    }
.submenu-1-quem li:hover > a{
     background:#75a934;
}


`;