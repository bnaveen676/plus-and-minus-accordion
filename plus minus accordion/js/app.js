//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader
// start accordion
class Accordian {
    accordian(data) {

        // defualt accordian is open on loaded
        $(data.accordionEle).each((i, acr) => {
            if (i === data.defaultAcr) {
                $(acr).addClass(data.toggleClas);
            }
        });

        // open is current accordian 
        $(data.buttons).each((i, btn) => {
            $(btn).on(data.eventName, (e) => {
                const currentAccordian = $(e.target).parent().parent()[0];
                $(data.accordionEle).each((ind, accr) => {
                    if (accr !== currentAccordian) {
                        $(accr).removeClass(data.toggleClas);
                    }
                });
                $(currentAccordian).toggleClass(data.toggleClas);

            });
        });

    }
}

// end accordion
// dom content is loading
$(() => {
    // start accordion
    const accordianCls = new Accordian;
    accordianCls.accordian({
        accordionEle: '.accordion',
        buttons: '.accordion i',
        toggleClas: 'accordianActive',
        defaultAcr: 0,
        eventName: 'click'
    });
});