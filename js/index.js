$(document).ready(function () {
    /*var sliderCollection = document.getElementsByClassName('slider__item');
    for (let i = 0; i<= sliderCollection.length; i++){
        if (sliderCollection[i] == undefined || sliderCollection[i].nodeName == '#text') continue;
        
    }*/
    $('.wrapper').fadeIn(1000);
    var counterS = 0;
    var maxSliderItems = 4;
    var citeSliderButton = document.getElementsByClassName('slider-btn');
    var cite = document.getElementsByClassName('slider-items-container');

    for (let i = 0; i <= citeSliderButton.length; i++) {
        // console.log(true);
        if (citeSliderButton[i] == undefined || citeSliderButton[i].nodeName == '#text') continue;
        $(citeSliderButton[i]).click(function () {
            var direction = this.dataset.direction;
            // console.log(direction);
            var currentItem;
            if (+direction == 1) {
                counterS++;

                for (let j = 0; j <= cite.length; j++) {
                    if (cite[j] == undefined || cite[j].nodeName == '#text') continue;

                    if (parseInt(cite[j].dataset.order) == counterS) {
                        currentItem = this;
                        $(cite[j]).fadeOut(0);
                        // if ($(cite[j]).prev().className == 'cite') $(cite[j]).prev().fadeOut(500);
                        if (counterS < maxSliderItems) {
                            $(cite[j]).next().fadeIn('slow');
                        }
                        var aop = maxSliderItems;
                        if (counterS >= aop) {
                            $('#slider-item-first').fadeIn('slow');
                            counterS = 0;
                        }
                    }
                }

            } else {
                counterS--;
                for (let j = 0; j <= cite.length; j++) {
                    if (cite[j] == undefined || cite[j].nodeName == '#text') continue;
                    var helperAdditional = counterS + 1;
                    if (parseInt(cite[j].dataset.order) !== helperAdditional) {
                        if (counterS >= 0) {
                            $(cite[j]).fadeOut(0);
                        } else {
                            $('#slider-item-last').fadeIn('slow');
                            counterS = maxSliderItems - 1;
                            $('#slider-item-first').fadeOut(0);
                        }

                        // $(cite[j]).next().fadeIn(500);

                    } else {
                        //$(cite[j]).fadeIn('fast');
                        if (counterS >= 0) {
                            
                            $(cite[j]).fadeIn('slow');
                        }
                    }
                }
            }
        })
    }
})
