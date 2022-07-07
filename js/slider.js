
let images =Array.from(document.querySelectorAll('.slider img')),
    current_slider = 1,
    slider_count = images.length,
    direction = document.getElementById('direction'),
    next = document.getElementById('next'),
    prev = document.getElementById('prev');




let ul_list = document.createElement('ul');
    ul_list.id = 'bullets';

for(let i=0; i<slider_count; i++){
    let li_list = document.createElement('li');
    li_list.setAttribute('data-count' , i+1);
    li_list.textContent = i+1;
    ul_list.appendChild(li_list);
}
direction.appendChild(ul_list);

let bullets = Array.from(document.querySelectorAll('#bullets li'));


for(let i=0 ; i<slider_count ; i++){
    bullets[i].onclick = ()=>{
        current_slider =parseInt(bullets[i].getAttribute('data-count'));
        chicker();
    }
}

chicker();
next.onclick = ()=>{
    if(current_slider === slider_count){
        return false;
        // console.log(11)
    }
    else{
        current_slider++;
        chicker();
    }

}

prev.onclick = ()=>{
    if(current_slider === 1){
        return false;
    }
    else{
        current_slider--;
        chicker();
    }
}


function chicker(){


    removeactive();

    images[current_slider - 1].classList.add('img-active');

    bullets[current_slider - 1].classList.add('li-active');

    if(current_slider === slider_count){
        next.classList.add('display-none');
    }else{
        next.classList.remove('display-none');
    }

    if(current_slider === 1){
        prev.classList.add('display-none');
    }else{
        prev.classList.remove('display-none');
    }


}



function removeactive(){

    images.forEach((img)=>{
        img.classList.remove('img-active');
    })
    bullets.forEach((bullet)=>{
        bullet.classList.remove('li-active');
    })
}




