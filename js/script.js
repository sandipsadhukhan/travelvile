$('document').ready(function(){
    // init sidenav
    $('.button-collapse').sideNav({
        closeOnClick : true
    });

    // init slider
    $('.slider').slider({
        indicators: false,
        height: 500, 
        transition: 500,
        interval: 6000
    });

    // autocomplete functionallity
    $('.autocomplete').autocomplete({
        data : {
            'Durgapur' : null, 
            'Bankura' : null, 
            'Kolkata' : null, 
            'Burdwan' : null,
            'Darjelling': null,
            'Mumbai' : null,
            'Delhi' : null,
            'Gujrat': null
        }
    });

    // scrollspy
    $('.scrollspy').scrollSpy();
});