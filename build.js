const fs = require( 'fs' );
const path = require( 'path' );
const sass = require( 'node-sass' );

const ROOT_PATH = path.resolve( __dirname );
const SCSS_PATH = path.resolve( ROOT_PATH, 'src' );

const feedback_strings = {
    'starting': '  Starting node-sass...' ,
    'write_success': '  File written to ' + path.resolve( SCSS_PATH, 'test.css' ) ,
    'write_fail': '  File not written.' ,
    'duration': '  Duration: '
};

console.log( `    ${ feedback_strings.starting }` );

sass.render( {
    file: path.resolve( SCSS_PATH, 'test.scss' ),
    includePaths: [
        'node_modules/accoutrement'
    ],
    outputStyle: 'nested',
    outFile: path.resolve( SCSS_PATH, 'test.css' ),
    sourceMap: true
}, function( error, result ) {
    // console.log( error || result );
    if ( !error ) {
        // No errors during the compilation, write this result on the disk
        fs.writeFile( path.resolve( SCSS_PATH, 'test.css' ), result.css, function( err ) {
            if ( !err ) {
                // file written on disk
                console.log( `    ${ feedback_strings.write_success }` );
            }
            else {
                console.error( `    ${ feedback_strings.write_fail }`, err );
            }
            console.log( `    ${ feedback_strings.duration + result.stats.duration + 'ms' }` );
        } );
    }
    else {
        console.error( error );
    }
} );
