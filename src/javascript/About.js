import SectionBase from './SectionBase';

class About extends SectionBase{

	constructor(params) {
		super(params);
	}

	init(req, done) {
		// super.init(req, done);

		this.el = document.createElement('h1');
		this.el.innerHTML = 'this is the ' + this.params.name + ' section';
		this.container.appendChild( this.el );


		TweenMax.set(this.el, {
			alpha: 0
		});

    	done();
	}


	animateOut(req, done){
		TweenMax.to(this.el,  2, {
			alpha: 0,
			onComplete: function(){
	        	done();
			}
		});
	}
}

module.exports = About;
