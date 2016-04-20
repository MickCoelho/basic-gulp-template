import TweenMax from 'gsap';


class SectionBase{

	constructor(sectionOpt) {
		this.params = sectionOpt;
		this.container = document.querySelector('.section-container');
	}


	init(req, done) {
		this.el = document.createElement('h1');
		this.el.innerHTML = 'this is the fucking ' + this.params.name + ' section';
		this.container.appendChild( this.el );

		TweenMax.set(this.el, {
			alpha: 0
		});

    	done();
	}

	animateIn(req, done) {
		TweenMax.to(this.el,  0.2, {
			alpha: 1,
			onComplete: function(){
	        	done();
			}
		});
	}

	resize(width, height) {
	}

	animateOut(req, done) {
		TweenMax.to(this.el,  0.1, {
			alpha: 0,
			onComplete: function(){
	        	done();
			}
		});
	}

	destroy(req, done) {
		this.container.removeChild( this.el );
		done();
	}

}

module.exports = SectionBase;
