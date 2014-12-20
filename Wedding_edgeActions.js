
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:"http://cdn.edgecommons.org/an/1.4.0/js/min/EdgeCommons.js",complete:function(){EC.centerStage(sym);EC.Parallax.setup(sym);}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-895101083");