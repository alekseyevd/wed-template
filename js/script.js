$('document').ready(function() {
        'use strict';
        
        let end = $('.countdown').data('end');
        let date = new Date();
        let now = date.getTime();
		let start = $('.countdown').data('start');

		$('.countdown').final_countdown({
			'start': start,
			'end': end,
			'now': now      
		});

        $('.slider').slick({
        	dots: true,
			centerMode: true,
			arrows: false,
			slidesToShow: 1,
			variableWidth: true,
			responsive: [
			    {
			      breakpoint: 1078,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: true,
			        variableWidth: false,
			        centerPadding: '0',
			      }
			    }
			  ]			
		});

        function recurse(){
			$('.slick-center').next().on('click', function(){
				$('.slider').slick('slickNext');
				recurse();
			});
			$('.slick-center').prev().on('click', function(){
				$('.slider').slick('slickPrev');
				recurse();
			});			        	
        }

		recurse();

		//document.querySelector('.slick-center').previousSibling.addEventListener('click', ); // #foo1

        function dropdown(event) {
		 /* if (this.classList.contains('active')) {
		    this.classList.remove('active')
		  } else this.classList.add('active');*/
		    event.preventDefault();
		    console.log('click');
		    
			  this.parentElement.classList.toggle('active');
			  let options = this.parentElement.getElementsByTagName('a');
			  let wrapper= this.parentElement;
			  for (const option of options) {
			  	option.addEventListener('click', function(event) {
			  		event.preventDefault();
			  		wrapper.getElementsByTagName('div')[0].innerText = option.innerText;
			  		wrapper.classList.add('filled');
			  		
			  		
			  	})
			  }
			
		}

		let selects = document.querySelectorAll('.wrapper-dropdown .select');
		for (const select of selects) {
			select.addEventListener('click', dropdown);
			select.addEventListener('blur', function() {
				this.parentElement.classList.remove('active');
			});
		}

		document.querySelector('textarea').addEventListener('input', function() {
			if (this.value != '') {
				this.classList.add('filled')
			} else {
				this.classList.remove('filled')
			}
		});

		var player = document.getElementsByTagName('audio')[0];
		document.getElementsByClassName('playstate')[0].onclick = function() {
			if (!document.getElementsByClassName('mediaplayer')[0].classList.contains('play')) {
		      player.play();
			  document.getElementsByClassName('mediaplayer')[0].classList.add('play');		
			}
			 else {
		      player.pause();
			  document.getElementsByClassName('mediaplayer')[0].classList.remove('play');	
			}
		}		

		document.querySelector('#menu_toggle').addEventListener('click', toggleMobileMenu);

		function toggleMobileMenu(event) {
			event.preventDefault();
			document.querySelector('.head').classList.toggle('active');
			//document.querySelector('.mobile__toggle').classList.toggle('hidden');
		}

		document.querySelector('.mobile_close_menu').addEventListener('click', toggleMobileMenu);
    });
