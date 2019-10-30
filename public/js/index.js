
$(function () {
    $('#toggle').click(function () {
        $(this).toggleClass('on');
        $('#resize').toggleClass('active');
    });

    $('#resize ul li a').click(function () {
        $(this).toggleClass('on');
        $('#resize').toggleClass('active');
    });

    $('.close-btn').click(function () {
        $(this).toggleClass('on');
        $('#resize').toggleClass('active');
    });


    //EMAIL
    // name: contact-name 
    // email: contact-email
    // project: contact-project

    //trigger element form on an event submit
    $('form').on('submit', e => {
        e.preventDefault();

        //instaniate the elements to be filled with a value
        const name = $('#contact-name').val().trim();
        const email = $('#contact-email').val().trim();
        const project = $('#contact-project').val().trim();

        //get the values from user and store into an object
        const data = {
            name,
            email,
            project
        }

        //grab the value of each input field and send data to server
        //params: path of which server is waiting for the response 2. data request 3. callback
        $.post('/contact', data, function () {
            console.log('server recieved our data');
        })
    })


    // PROJECT
    const tl = new TimelineMax();

    tl.from('#brand', 1, {
        delay: .4,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });
    tl.staggerFrom('#menu li a', 1, {
        delay: .4,
        opacity: 0,
        ease: Expo.easeInOut
    }, .1);

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
    wow.init();
});