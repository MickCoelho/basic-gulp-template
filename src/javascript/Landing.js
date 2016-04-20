import SectionBase from './SectionBase';

class Landing extends SectionBase{

	constructor(params) {
		super(params);
	}

	init(req, done) {
		super.init(req, done);
    	done();
	}
}

module.exports = Landing;
