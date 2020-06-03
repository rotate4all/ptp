function SetBanners(){
	var randNumber = Math.floor((Math.random() * 20) + 0);
	var banners = [];

	banners[0] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin0.png" /></a>';
	banners[1] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin1.png" /></a>';
	banners[2] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin2.png" /></a>';
	banners[3] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin3.png" /></a>';
	banners[4] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin4.png" /></a>';
	banners[5] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/HJ7J6bA.png" /></a>';
	banners[6] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/62RBF2V.png" /></a>';
	banners[7] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/WrConLY.png" /></a>';
	banners[8] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/8W2PSux.png" /></a>';
	banners[9] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/IfvbsW4.png" /></a>';
	banners[10] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/Wki7BxG.png" /></a>';
	banners[11] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/HJ7J6bA.png" /></a>';
	banners[12] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/62RBF2V.png" /></a>';
	banners[13] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/WrConLY.png" /></a>';
	banners[14] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/8W2PSux.png" /></a>';
	banners[15] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/IfvbsW4.png" /></a>';
	banners[16] = '<a href="https://grammarly.go2cloud.org/aff_c?offer_id=10&aff_id=57788" target="_blank"><img title="20 million people use Grammarly to improve their writing" alt="Grammarly" src="https://i.imgur.com/Wki7BxG.png" /></a>';
	banners[17] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/7JZLour.gif" /></a>';
	banners[18] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/4JdsC0Q.gif" /></a>';
	banners[19] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/7JZLour.gif" /></a>';
	banners[20] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/4JdsC0Q.gif" /></a>';
	banners[21] = '<a href="https://www.easyhits4u.com/splash/?ref=ryan102383" target="_blank"><img title="EasyHits4U - Site Promotion Made Easy" alt="EasyHits4U" src="https://i.imgur.com/7JZLour.gif" /></a>';
	
	var currentBanner = banners[randNumber];

	$('.banners').hide().html(currentBanner).fadeIn('slow');
}

$(document).ready(function(){
	SetBanners();
});
