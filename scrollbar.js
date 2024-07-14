const progress = document.querySelector('.progress')

function myclick(){
    const totalofPage = document.body.scrollHeight;
    const currentDistanceFromTop = document.documentElement.scrollTop;
    
    const windowHeight = document.documentElement.clientHeight;

    const scrolledPercentage =(currentDistanceFromTop / (totalofPage - windowHeight ))*100;
    
    progress.style.width = Math.round(scrolledPercentage) + "%"
}

document.addEventListener('scroll',myclick)
  