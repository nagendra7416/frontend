const menbtn = document.querySelector('.menu button');
const overlay = document.querySelector('.hiddensidebar');
const hiddenclose = document.getElementById('hiddensidebarclose');
const overlayclose = document.getElementById('closebtn');

if(menbtn){
	menbtn.addEventListener('click', function(){
		overlay.classList.toggle('active');
		hiddenclose.classList.toggle('active');
		overlayclose.classList.toggle('active');
	})
}

if(hiddenclose){
	hiddenclose.addEventListener('click', function(){
		overlay.classList.toggle('active');
		overlayclose.classList.toggle('active');
		hiddenclose.classList.toggle('active');
	})
}
if(overlayclose){
	overlayclose.addEventListener('click', function(){
		overlay.classList.toggle('active');
		overlayclose.classList.toggle('active');
		hiddenclose.classList.toggle('active');
	})
}








var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var img = entry.target;
            
            // Introduce a delay before loading the image
            setTimeout(function() {
                img.src = img.getAttribute('data-real-src');
            }, 1000); // Delay of 1000 milliseconds (1 second)
            
            observer.unobserve(img);
        }
    });
}, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1 // 10% of the image visible triggers the loading
});

// Select all images on the site
var allImages = document.querySelectorAll('img');

// Observe each image
allImages.forEach(function(img) {
    observer.observe(img);
});