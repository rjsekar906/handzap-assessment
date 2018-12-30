/* Navbar events*/
$('.menu-item .navbar-nav li.nav-item').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('#menutitle').html($(this).find('a').text());
});	

/* Tab button event */
$('.nav-pills li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
});	