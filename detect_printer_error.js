function printerError(s) {
  let error = s.split("").reduce( (acc,c) => c > "m" ? acc + 1 : acc, 0);
  let total = s.length;
  return `${error}/${total}`;
}


// add other solutions
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

const printerError = ($) => [ ($.match(/[n-z]/g) || []).length, $.length ].join('/')

var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

function printerError(s) {
  var allowed = 'abcdefghijklm';
  var error = 0;

  s.split('').forEach( function( item ) {
    return ( allowed.indexOf( item ) === -1 ) ? error++ : '';
  });
  
  return error + '/' + s.length;
}
