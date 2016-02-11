/**
 * Description
 *
 * @author Mickael Coelho <mickael@rehabstudio.com>
 */

'use strict';


export default class Test {
    constructor(options){
        console.log("I'm a test");
    }

    method1 (){
        console.log('Method 1');
    }
    method2 (arg){
        console.log( 'Method 2 ' + arg);
    }

}
