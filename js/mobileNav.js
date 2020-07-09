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
        $("#side-nav").append('<ul class="navbar-nav nav flex-column"> ' + 
        '<li><button href="#" class="btn btn-secondary" id="btn-close-nav">&times;</button></li>');
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
        
        $("#side-nav ul").append(str);

        $("#side-nav").append('</ul>');
    }

    // function navBarTest(navVarObj) {
    //     var str = "";
    //     // console.log(navVarObj["title"]);

    //     str = str + '<ul class="navbar-nav nav flex-column">';
        
    //     var navVar = navVarObj["sub"];
    //     // console.log(navVar);

    //     for (var key in navVar) {
            
    //         // console.log(navVar[key]["sub"]);
    //         if (jQuery.isEmptyObject( navVar[key]["sub"])) {
    //             // console.log("true");
    //             str = str + '<li class="nav-item">' + 
    //                     '<a href="#" class="nav-link">'+ navVar[key]["title"] +'</a>' +                       
    //                     '</li>';
                
    //             // $("#main-nav-2 ul").append(str);
    //         }
    //         else {
    //             str =  str + '<li class="nav-item dropdown">' + 

    //                         '<a href="#" class="nav-link dropdown-toggle" id="drop-'+key+'"'+
    //                         'data-toggle="dropdown" role="button">'+ navVar[key]["title"] +
    //                         '</a>'+  
    //                         navBarLv2(navVar[key]) +
    //                         '</li>';
    //             // $("#main-nav-2 ul").append(str);
    //         }

            

    //     }

    //     str = str + '</ul>';

    //     return str;
    // }

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

    
    $("#btn-nav").click(function() {
        if ($("#side-nav").hasClass("d-none")) {
            $("#side-nav").removeClass("d-none");
            $("#side-nav").css("width", "200px");
        }
        else {
            $("#side-nav").css("width", "200px");
        }
    });


    $("#btn-close-nav").click(function() {
        if (!$("#side-nav").hasClass("d-none")) {
            
            $("#side-nav").css("width", "0px");
            $("#side-nav").addClass("d-none");
        }
        else {
            $("#side-nav").css("width", "0px");
        }
    });

    $('.dropdown-submenu').on('click', function(e) {
        console.log("asdasd");
        
        $(this).toggleClass("dropdown-submenu-active");
        
        return false;
    });
    $('.dropdown-submenu-active').on('click', function(e) {
        console.log("asdasd");
        
        $(this).toggleClass("dropdown-submenu");
        
        return false;
    });


})

