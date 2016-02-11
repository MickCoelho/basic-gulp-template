/**
 * Description
 *
 * @author Mickael Coelho <mickael@rehabstudio.com>
 */

'use strict';


import Test from './test';

export default class App {
    constructor(options){
        console.log( this.test() );
    }

    test(){
        let test = new Test();
        test.method1();
        test.method2('BOOM');

        return 'wow!?';
    }

}


new App();
