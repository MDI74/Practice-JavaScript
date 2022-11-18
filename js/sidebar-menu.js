const dropBtn = document.querySelectorAll('[data-drop]');

dropBtn.forEach(function(item){
    item.addEventListener('click',function(){

        const contentDrop = document.querySelector('#' + this.dataset.drop);
        contentDrop.classList.toggle('hidden');
    })
})


