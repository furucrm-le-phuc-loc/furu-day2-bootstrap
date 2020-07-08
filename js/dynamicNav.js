$(document).ready(function() {

    var navBar = {
            
        home: {
            title: "Home",
            sub: {}
        },

        categories: {
            title: "Categories",
            sub: {
                mobile: {
                    title: "Mobile",
                    sub: {
                        apple: {
                            title: "Apple",
                            sub: {}
                        },
                        samsung: {
                            title: "Samsung",
                            sub: {}
                        },
                        oppe: {
                            title: "Oppo",
                            sub: {}
                        }

                    }  
                },


                tablet: {
                    title: "Tablet",
                    sub: {

                    }
                },

                laptop: {
                    title: "Laptop",
                    sub: {
                        inc13: {
                            title: "13 Inc",
                            sub: {
                                apple: {
                                    title: "Apple",
                                    sub: {}
                                },
                                samsung: {
                                    title: "Samsung",
                                    sub: {}
                                },
                                oppe: {
                                    title: "Oppo",
                                    sub: {}
                                }
                            }
                        },

                        inc15: {
                            title: "15 Inc",
                            sub: {}
                        }
                    }
                }

            }
        },

        aboutUs: {
            title: "About Us",
            sub: {}
        },

        contactUs: {
            title: "Contact Us",
            sub: {}
        }
    };

    // var str = JSON.stringify(navBar);
    // str = JSON.stringify(navBar, null, 4);
    // console.log(str);

    // <li class="nav-item">
    //     <a href="#" class="nav-link">Home</a>
    // </li>
    

    function navBarValues(navVar) {
        $("#main-nav").append('<ul class="navbar-nav">');
        var str = "";
        for (var key in navVar) {
            
            // console.log(navVar[key]["sub"]);
            if (jQuery.isEmptyObject( navVar[key]["sub"])) {
                // console.log("true");
                str = str + '<li class="nav-item">' + 
                        '<a href="#" class="nav-link">'+ navVar[key]["title"] +'</a>' +                       
                        '</li>';
                
                // $("#main-nav-2 ul").append(str);
            }
            else {
                str =  str + '<li class="nav-item dropdown">' + 

                            '<a href="#" class="nav-link dropdown-toggle" id="drop-'+key+'"'+
                            'data-toggle="dropdown" role="button">'+ navVar[key]["title"] +
                            '</a>'+  
                            navBarLv2(navVar[key]) +
                            '</li>';
                // $("#main-nav-2 ul").append(str);
            }

            

        }
        $("#main-nav ul").append(str);

        $("#main-nav").append('</ul>');
    }

    
    

    function navBarLv2(navVarObj) {
        var str = "";
        // console.log(navVarObj["title"]);

        str = str + '<ul aria-labelledby="drop-' + 
        navVarObj['title']+'" class="dropdown-menu bg-dark">';
        
        var navVar = navVarObj["sub"];
        // console.log(navVar);

        for (var key in navVar) {
            // console.log(navVar[key]["sub"]);
            if (jQuery.isEmptyObject(navVar[key]["sub"])) {
                // console.log("true");
                str = str + '<li> <a class="text-white dropdown-item" href="">'+
                    navVar[key]['title'] +'</a> </li>';

            }
            else {
                // console.log(navVar[key]);
                str = str + '<li class="dropdown-submenu"> '+
                    '<a href="" class="dropdown-toggle dropdown-item text-white" data-toggle="dropdown"' +
                    'id="drop-'+ key +'" role="button">'+ navVar[key]['title'] +'</a>' +
                    navBarLv2(navVar[key]) +
                    '</li>';
            }
        }

        str = str + '</ul>';

        return str;
    }

    navBarValues(navBar);



    


})

