var me = Snap('#me');

Snap.load('http://localhost/v1/icons/me.svg', onSVGLoaded ) ;

function onSVGLoaded( data ){ 
    me.append( data );
}