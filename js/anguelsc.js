var me = Snap('#me');

Snap.load('icons/me.svg', onSVGLoaded ) ;

function onSVGLoaded( data ){ 
    me.append( data );
}