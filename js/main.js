let tab,
    tabContent;
let classContainer = document.querySelector('.class-container');
let mainPlansCitroen = document.querySelector('#citroen .main-plans');
let mainPlansItemsCitroen = document.querySelectorAll('#citroen .main-plans li');
let mainImagesCitroen = document.querySelectorAll('#citroen .main-image>div');
let mainPlansMazda = document.querySelector('#mazda .main-plans');
let mainPlansItemsMazda = document.querySelectorAll('#mazda .main-plans li');
let mainImagesMazda = document.querySelectorAll('#mazda .main-image>div');
let mainPlansMercedes = document.querySelector('#mercedes .main-plans');
let mainPlansItemsMercedes = document.querySelectorAll('#mercedes .main-plans li');
let mainImagesMercedes = document.querySelectorAll('#mercedes .main-image>div');
let partialCitroen = document.querySelector('#citroen .options-block .partial');
let partialMazda = document.querySelector('#mazda .options-block .partial');
let partialMercedes = document.querySelector('#mercedes .options-block .partial');
let partialCitroenDropdown = document.querySelector('#citroen .main-plans>li:nth-child(7)');
let partialMazdaDropdown = document.querySelector('#mazda .main-plans>li:nth-child(7)');
let partialMercedesDropdown = document.querySelector('#mercedes .main-plans>li:nth-child(7)');
let mainAreaContainer = document.getElementsByClassName('main-area-container');

window.onload = function () {
    tab = document.getElementsByClassName('class-item');
    tabContent = document.getElementsByClassName('main-area-container');
    hideTabsContent(1);
};
classContainer.addEventListener('click', function (event) {
    let target = event.target;
    if (!target.classList.contains('class-container')) {
        while (!target.classList.contains('class-item')) {
            target = target.parentNode;
        }
        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove('active-item');
            for (let j = 0; j < mainAreaContainer[i].querySelectorAll('.main-plans>li').length; j++) {
                mainAreaContainer[i].querySelectorAll('.main-plans>li')[j].classList.remove('main-plans-active');
                mainAreaContainer[i].querySelectorAll('.main-plans>li li')[j].classList.remove('main-plans-active');
                mainAreaContainer[i].querySelectorAll('.main-image>div')[j].classList.remove('active-image');
                mainAreaContainer[i].querySelectorAll('.main-image>div>.main-bottom-parts')[j].classList.remove('main-bottom-parts-show');
            }
            if (target === tab[i]) {
                tab[i].classList.add('active-item');
                showTabsContent(i);
                mainAreaContainer[i].querySelector('.main-plans>li:nth-of-type(4)').classList.add('main-plans-active');
                mainAreaContainer[i].querySelector('.main-image>div:nth-of-type(4)').classList.add('active-image');
                mainAreaContainer[i].querySelectorAll('.main-image>div>.main-bottom-parts')[3].classList.add('main-bottom-parts-show');
            }
        }

    }
});

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

mainPlansCitroen.addEventListener('mouseover', function () {
    itemSelectorHover(event, mainPlansItemsCitroen, mainImagesCitroen);
});
mainPlansMazda.addEventListener('mouseover', function (event) {
    itemSelectorHover(event, mainPlansItemsMazda, mainImagesMazda);
});
mainPlansMercedes.addEventListener('mouseover', function (event) {
    itemSelectorHover(event, mainPlansItemsMercedes, mainImagesMercedes);
});
partialCitroenDropdown.addEventListener('click', function () {
    partialCitroen.classList.toggle('partial-show');
});
partialMazdaDropdown.addEventListener('click', function () {
    partialMazda.classList.toggle('partial-show');
});
partialMercedesDropdown.addEventListener('click', function () {
    partialMercedes.classList.toggle('partial-show');
});


mainPlansCitroen.addEventListener('click', function (event) {
    itemSelectorClick(event, mainPlansItemsCitroen, mainImagesCitroen);
});
mainPlansMazda.addEventListener('click', function (event) {
    itemSelectorClick(event, mainPlansItemsMazda, mainImagesMazda);
});
mainPlansMercedes.addEventListener('click', function (event) {
    itemSelectorClick(event, mainPlansItemsMercedes, mainImagesMercedes);
});

function itemSelectorHover(event, items, images) {
    if (event.target.tagName === 'LI') {
        for (let j = 0; j < items.length; j++) {
            if (event.target === items[6]) {
                break;
            } else {
                if (event.target === items[j]) {
                    if (event.target === items[6] || event.target === items[7]) {
                        break;
                    } else {
                        for (let i = 0; i < images.length; i++) {
                            images[i].classList.remove('active-image');
                            images[j].classList.add('active-image');
                        }
                    }
                }
            }
        }
    }
}
function itemSelectorClick(event, items, images) {
    if (event.target.tagName === 'LI') {
        if (event.target.tagName === 'LI') {
            for (let j = 0; j < items.length; j++) {
                if (event.target === items[6]) {
                    break;
                } else {
                    items[j].classList.remove('main-plans-active');
                    if (event.target === items[j]) {
                        if (event.target === items[6] || event.target === items[7]) {
                            break;
                        } else {
                            for (let i = 0; i < images.length; i++) {
                                event.target.classList.add('main-plans-active');
                                images[i].querySelector('.main-bottom-parts').classList.remove('main-bottom-parts-show');
                                images[j].querySelector('.main-bottom-parts').classList.add('main-bottom-parts-show');
                            }
                        }
                    }
                }
            }
        }
    }
}

