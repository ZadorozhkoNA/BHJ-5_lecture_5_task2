let checkBoxs = document.body.querySelectorAll( 'input[type="checkbox"]' );

function check( event ) {
  event.preventDefault();
  if ( event.currentTarget.closest( '.interest' )) {
    let checks = event.currentTarget.closest( '.interest' ).querySelectorAll( 'input[type="checkbox"]' );

    if ( event.currentTarget.checked ) {
      checks.forEach( (item) => {
        item.checked = true;
      });
    } else {
      checks.forEach( (item) => {
        item.checked = false;
      });
    }
  }
}


checkBoxs.forEach( (item) => {
  item.addEventListener( 'change', check );
});
