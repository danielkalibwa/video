document.addEventListener('DOMContentLoaded',function(){
    const videos = document.getElementsByClassName('row');
    const forms = document.forms;

    //delete video
    videos.addEventListener('click',(e)=>{
        if(e.target.ClassName == 'delete'){
            const video = e.target.parentElement;
            video.parentNode.removeChild(video);
        }
    });

})
