
class ContactSection{

	constructor(sectionOpt) {
		this.params = sectionOpt;
		this.container = document.querySelector('.section-container');
	}

	init(req, done) {
		this.el = document.createElement('p');
		this.el.innerHTML = 'this is the fucking ' + this.params.name + ' section';
		this.container.appendChild( this.el );
    	done();
	}

	animateIn(req, done) {
        done();
	}

	resize(width, height) {
	}

	animateOut(req, done) {
		done();
	}

	destroy(req, done) {
		this.container.removeChild( this.el );
		done();
	}

}

module.exports = ContactSection;
