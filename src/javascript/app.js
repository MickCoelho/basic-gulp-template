/**
 * Description
 *
 * @author Mickael Coelho <mickael@rehabstudio.com>
 */

'use strict';

import BigWheel from 'bigwheel';
import Landing from './Landing';
import About from './About';
import Test from './test';

export default class App {
    constructor(options){
        this.initBigWheel();
        this.anchors();
    }

    initBigWheel(){
        // create our framework instance
        this.framework = BigWheel( function(done) {

        // the function passed to bigwheel should return
        // a setting object or alternately you can pass
        // the setting object to the callback defined as
        // done. This is nice if you need to do assynchronous
        // loading before content should be shown
        return {
            // define our routes
            // routes are associated to "sections"
            // sections are functions or objects
            // Any route can contain a routes object to specify subroutes. This example adds the '/Gallery' route and '/Gallery/:id'
            overlap: false,
            routes: {
                '/': new Landing({name: 'landing'}),
                '/about': new About({name: 'about'})
            }
            };
        });

        // this will start bigwheel and it will start resolving routes
        this.framework.init();
    }

    anchors(){
        let anchors = document.querySelectorAll('a');
        for (let i = 0 ; i < anchors.length ; i++ ){
            anchors[i].addEventListener('click', (event) => this.onAnchorClick(event) );
        }
    }

    onAnchorClick(event){
        event.preventDefault();
        let link = event.currentTarget.getAttribute('href');
        this.framework.go( link );

        return false;
    }
}


new App();
