$(function () {
    //allow to toggle between active nav menu when resized
    $('#toggle').click(function () {
        $(this).toggleClass('on');
        $('#resize').toggleClass('active');
    });

    //toggle is to display nav menu on full screen when active   
    $('#resize ul li a').click(function () {
        $(this).toggleClass('on');
        $('#resize').toggleClass('active');
    });

    //toggle between nav menu and show close when nav is selected 
    $('.close-btn').click(function () {
        $(this).toggleClass('on');
        $('#resize').toggleClass('active');
    });


    //EMAIL

    //trigger element form on an event submit
    $('form').on('submit', e => {
        e.preventDefault();

        //instaniate the elements to be filled with a value
        const subject = $('#contact-subject').val().trim();
        const email = $('#contact-email').val().trim();
        const text = $('#contact-text').val().trim();
        const form = $('#contact-form');

        //get the values from user and store into an object
        const data = {
            email,
            subject,
            text
        }

        //grab the value of each input field and send data to server
        //params: path of which server is waiting for the response 2. data request 3. callback
        $.post('/contact', data, function () {
            console.log('server recieved our data');
        });

        //reset all fields in the form
        form[0].reset();
    })


    // PROJECT
    const tl = new TimelineMax();

    //brand to show with a delay
    tl.from('#brand', 1, {
        delay: .4,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    //nav menu to show in stagger form
    tl.staggerFrom('#menu li a', 1, {
        delay: .4,
        opacity: 0,
        ease: Expo.easeInOut
    }, .1);

    //new wow animation
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    //initiate wow animation
    wow.init();
});
