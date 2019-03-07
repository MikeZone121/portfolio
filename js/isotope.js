$(function(){
    
  var $container = $('.grid'),
      filters = {};

  $container.isotope({
    itemSelector : '.color-shape'
  });

  // filter buttons
  $('select').change(function(){
    var $this = $(this);
    
    // store filter value in object
    // i.e. filters.color = 'red'
    var group = $this.attr('data-filter-group');
    
    filters[ group ] = $this.find(':selected').attr('data-filter');
    // console.log( $this.find(':selected') )
    // convert object into array
    var isoFilters = [];
    for ( var prop in filters ) {
      isoFilters.push( filters[ prop ] )
    }
    console.log(filters);
    var selector = isoFilters.join('');
    $container.isotope({ filter: selector });
  if ($('.grid:after').width < '1') $this.find(':selected').prop("disabled","1");
  

    return false;
  });
  
  
  
  $('.filters').on( 'click', '.button', function() {
          var $this = $(this);
          var group = $this.parent().data('filter-group');
          filters[ group ] = $this.data('filter'); 
          var isoFilters = [];
            for ( var prop in filters ) {
              isoFilters.push( filters[ prop ] )
            }
            console.log(filters);
            var selector = isoFilters.join('');
            $container.isotope({ filter: selector });
            return false; 
    
      });

  
    
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// reset all filters
var $anyButtons = $('.filters').find('button[data-filter=""]');
var $buttons = $('.filters button');
 
$('.isotope-reset').on( 'click', function() {
    filters = {};
    $container.isotope({ filter: '*' });
    $buttons.removeClass('is-checked');
    $anyButtons.addClass('is-checked');
  $('.filters-select option').prop('selected', function() {
        return this.defaultSelected;
    });
});
  
  });
  
  
