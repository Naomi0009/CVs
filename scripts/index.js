function dark(){
    const body = document.body;
    body.classList.toggle('darkmode');
}
function togglee(){
    let menu = document.getElementById('navigation_bar');
    let hamburgermenu = document.querySelector('humburger_menu');
    menu.classList.toggle('active');
    hamburgermenu.classList.toggle('active')
}