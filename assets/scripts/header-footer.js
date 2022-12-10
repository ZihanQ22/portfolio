// HEADER
$('#header-container').load('/assets/components/header.html', function(){

  // add code here for things that should happen once the <header> loads.

  // for example, this is where you would add functionality for dealing with a toggle-able hamburger menu.



});




// FOOTER

const footer = `<footer>&copy; ${new Date().getFullYear()} Portfolio Example</footer>`

$('body').append(footer)


/*
fetch('/assets/components/header.html').then(response => {
  return response.text();
}).then(header => {
  document.body.insertAdjacentHTML("afterbegin", header);
})
*/

  // FOOTER
/*
  const footer = document.createElement('footer');
  const footerText = document.createTextNode(`© ${new Date().getFullYear()} Portfolio Example`)
  footer.appendChild(footerText)

  document.body.append(footer)
  */