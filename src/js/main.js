// Переключения меню
$(document).ready(function () {
    $(".icon.arrow").click(function () {
        if ($(this).is(".open")) $('.user_info')
        else $('.user_info').slideDown(500);
        $(this).toggleClass("open");
    });
})


// Аккордион мобильного меню
$(".accordeon > li > a").click(function (e) {
	e.preventDefault();
	
	var menu = $(this).closest('.accordeon');
	
	if (false == $(this).next().is(':visible')) {
		menu.find('li').removeClass('slide active');
		menu.find('ul').slideUp();
	}
	
	$(this).next().slideToggle();
	$(this).parent().addClass('slide');
});

var mobMenuOpen = document.querySelector('.icon');
var mobMenu = document.querySelector('.mobile-menu');

mobMenuOpen.addEventListener('click', function() {
    mobMenu.classList.toggle('hidden')
})
