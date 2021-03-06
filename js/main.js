$(document).ready(function() {
    $.get('data.csv', function(data){
   
    var value = data.split('\n');
    var labels = value[0].split(',');
    var colors = value[1].split(',').map(colcolour);
    var vals = value[2].split(',').map(function(item) { return parseInt(item); });
 
      var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',
 
            // The data for our dataset
            data: {
                labels: labels,
                datasets: [{
                    label: "Satisfaction Level",
                    backgroundColor: colors,
                    data: vals,
                }]
            },
            // Configuration options go here
            options: {}
        })
    })
 
    AOS.init();
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 250, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    $("#AvatarImage").hover(function(){
      $(this).attr("src", "https://3b8vke2q8u7d1hbtzy29u7kt-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/AlexG1-1-1484x1484.jpg");
    }, function(){
    $(this).attr("src", "https://i.imgur.com/j6oHdzN.gif");
    });
});

function colcolour(c) {
   return '#'  + c;
}
