function SetBanners(){
	var randNumber = Math.floor((Math.random() * 20) + 0);
	var banners = [];

	banners[0] = '<a href="https://freebitco.in/?r=109131" target="_blank" rel="noopener"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin0.png" /></a>';
	banners[1] = '<a href="https://freebitco.in/?r=109131" target="_blank" rel="noopener"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin1.png" /></a>';
	banners[2] = '<a href="https://freebitco.in/?r=109131" target="_blank" rel="noopener"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin2.png" /></a>';
	banners[3] = '<a href="https://freebitco.in/?r=109131" target="_blank" rel="noopener"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin3.png" /></a>';
	banners[4] = '<a href="https://freebitco.in/?r=109131" target="_blank" rel="noopener"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin4.png" /></a>';
	banners[5] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_03/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[6] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_04/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[7] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_03/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[8] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_04/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[9] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_03/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[10] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_04/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[11] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_03/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[12] = '<iframe src="https://www.rotate4all.com/ptp/promo/changelly/anm_04/728x90.html" width="728" height="90" frameborder="0"></iframe>';
	banners[13] = '<a href="https://www.paidverts.com/ref/dguy/earners.html" target="_blank" rel="noopener"><img title="$10 per click!" width="728" height="90" alt="freebitco.in" src="https://i.imgur.com/3wxAGE4.gif" /></a>';
	banners[14] = '<a href="https://www.paidverts.com/ref/dguy/earners.html" target="_blank" rel="noopener"><img title="$10 per click!" width="728" height="90" alt="freebitco.in" src="https://i.imgur.com/3wxAGE4.gif" /></a>';
	banners[15] = '<a href="https://www.paidverts.com/ref/dguy/earners.html" target="_blank" rel="noopener"><img title="$10 per click!" width="728" height="90" alt="freebitco.in" src="https://i.imgur.com/3wxAGE4.gif" /></a>';
	banners[16] = '<a href="https://www.paidverts.com/ref/dguy/earners.html" target="_blank" rel="noopener"><img title="$10 per click!" width="728" height="90" alt="freebitco.in" src="https://i.imgur.com/3wxAGE4.gif" /></a>';
	banners[17] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank" rel="noopener"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/7JZLour.gif" /></a>';
	banners[18] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank" rel="noopener"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/4JdsC0Q.gif" /></a>';
	banners[19] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank" rel="noopener"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/7JZLour.gif" /></a>';
	banners[20] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank" rel="noopener"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/4JdsC0Q.gif" /></a>';
	banners[21] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank" rel="noopener"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/7JZLour.gif" /></a>';
	
	var currentBanner = banners[randNumber];

	$('.banners').hide().html(currentBanner).fadeIn('slow');
}

$(document).ready(function(){
	SetBanners();
});
