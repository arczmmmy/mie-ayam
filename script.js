// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika Menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di Luar Sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})



// bagian admin

// document.addEventListener('DOMContentLoaded', function() {
//   const links = document.querySelectorAll('.sidebar ul li a');
//   const sections = document.querySelectorAll('.content .section');

//   links.forEach(link => {
//       link.addEventListener('click', function(event) {
//           event.preventDefault();

//           links.forEach(link => link.classList.remove('active'));
//           this.classList.add('active');

//           const sectionId = this.getAttribute('href').substring(1);
//           sections.forEach(section => {
//               if (section.id === sectionId) {
//                   section.classList.add('active');
//               } else {
//                   section.classList.remove('active');
//               }
//           });
//       });
//   });

//   // Activate the first link by default
//   if (links.length > 0) {
//       links[0].click();
//   }
// });
xx