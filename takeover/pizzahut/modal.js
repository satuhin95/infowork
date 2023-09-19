(function() {
    let bindEvent = (eventNames, selector, handler) => {
      eventNames.split(' ').forEach((eventName) => {
        document.addEventListener(eventName, function (event) {
          if (event.target.matches(selector + ', ' + selector + ' *')) {
            handler.apply(event.target.closest(selector), arguments)
          }
        }, false);
      })
    };

    bindEvent( 'click','.istation-close', function(e){
        e.preventDefault();
        var istation_classess = Array.from(document.querySelectorAll('[class^="istation_"]'));

        for(istation_class in istation_classess) {
            add_class(istation_classess[istation_class], 'hideZoomOut');
        }
    });

    function add_class(element, classname) {
        element.classList ? element.classList.add(classname) : element.className += (' ' + classname);
    }  
})();