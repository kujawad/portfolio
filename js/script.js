let pageHeight, ticking, screenHeight, currentEl, pageSectionArr

function checkElement(scroll_pos) {
    let x = Math.floor(scroll_pos / (screenHeight / 2));

    if (currentEl !== x) {
        applyElement(x);
    }
}

function checkScroll() {
    let last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            checkElement(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', function (e) {
    checkScroll()
});

document.addEventListener("DOMContentLoaded", function (event) {

    screenHeight = screen.height
    pageSectionArr = document.getElementsByClassName('page-section');
    pageHeight = screenHeight * (pageSectionArr.length+1);

    document.getElementById('body').style.height = pageHeight / 2 + "px";

    checkScroll();
});


function applyElement(x) {

    currentEl = x;
    pageSectionArr = Array.from(document.getElementsByClassName('page-section'));

    for (let i = 0; i <= pageSectionArr.length - 1; i++) {
        pageSectionArr[i].classList.add("hidden");
    }

    document.getElementById('body').style.background = pageSectionArr[x].dataset.bgcolor || "white";
    document.getElementById('body').style.color = pageSectionArr[x].dataset.textcolor || "black";

    pageSectionArr[x].classList.remove('hidden');
    pageSectionArr[x].classList.add("shown");
}

document.getElementById("down-arrow").addEventListener("click", function (el) {
    window.scroll({
        top: (screenHeight / 2) + 100,
        left: 0,
        behavior: 'smooth'
    });
});




