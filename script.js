function loadScript(src) {
     return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
        
    });
}
const scriptUrl = 'script.js';

loadScript(scriptUrl)


   .then(()=>{

    alert(`Script '${scriptUrl}' loaded successfully`);

    }) 
    .catch((error) => {
        alert(`This time you are faild to load '${scriptUrl}':`, error);
    });



