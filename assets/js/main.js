/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '850px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
		
			$(
				'<div id="navPanel">' +
					'<nav id="navNav">' +
						$('#nav').navList() +
						'<a id="mlh-trust-badge" style="max-width:100px;min-width:60px;top:0;width:10%;z-index:10000;border:none" href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=blue" target="_blank" rel="noopener"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg" alt="Major League Hacking 2020 Hackathon Season" style="height: 150px;width:100%"></a>' +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
				
				

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);



function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function checkIfWeShouldHideNewsletterSignup(){
	var newsletterValue = document.cookie.replace(/(?:(?:^|.*;\s*)removeNewsletter\s*\=\s*([^;]*).*$)|^.*$/, "$1"); 

	if(newsletterValue && newsletterValue === 'true'){
		const signup = document.getElementById('mailchimp_list')
		const mainTitle = $('p[class="mainTitle"]')
		if(signup && mainTitle){
			signup.style.display = 'none'
			mainTitle.text('Digital Hackathon')
		}
	}else{
		createCookie('removeNewsletter', 'false', 365)
	}
}

function popupNewsletter(butSrc){
	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("signupNewsletterBut");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	if(butSrc === btn) {
		modal.style.display = "block";
	}
	

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}
/*
function embedMap(){
	if($("#iframeMap").length ==0){
		$("#map").append('<iframe id = "iframeMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19415.572785949436!2d-79.39407270275663!3d43.66601311698041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb359d1515e7%3A0xfec6b680ae45e7b0!2sGeorge%20Vari%20Engineering%20and%20Computing%20Centre!5e0!3m2!1sen!2sca!4v1579418155666!5m2!1sen!2sca" style="border: none; height: 100%; width: 80%;"></iframe>')
		$("#mapImg").remove();
	}
}*/

	/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */

 /*
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var findMe = document.querySelector('#mapImg');

window.addEventListener('scroll', function (event) {
	if (isInViewport(findMe)) {
		embedMap();
		$("#mapImg").remove();
	}
}, false);*/