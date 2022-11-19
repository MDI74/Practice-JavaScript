const dropBtn = document.querySelectorAll('[data-drop]');
const sideBtn = document.querySelector('.sidebar-btn');
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');
const dropContent = document.querySelectorAll('[data-drop-content]')

dropBtn.forEach(function(item){
    item.addEventListener('click',function(){

        const contentDrop = document.querySelector('#' + this.dataset.drop); //находим нужный contentdrop по id
        contentDrop.classList.toggle('hidden'); 
    })
})

sideBtn.addEventListener('click', function(){
       if (menuIcon.classList.toggle('active')) {
            sideBtn.style.cssText = 'left: 260px';    
       }
       else {
            sideBtn.style.cssText = 'left: 45px';      
       }

       dropContent .forEach(function (item) { //обходим все элементы dropContent
            item.classList.add('hidden');  // скрывается все элементы  
       })
       
       sideBar.classList.toggle('sidebar--show');
            
    })



