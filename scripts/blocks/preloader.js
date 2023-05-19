export default function preloader() {
  window.onload= function(){
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  }
}
