let marks=0;
const selctedOption=document.querySelectorAll('.correct');
selctedOption.forEach(eachOption => {
    let visited=false;
    eachOption.addEventListener('click' , () => {
        
        if(!visited){
            marks++;
            visited=true;      
        }
    });
});

const submitButton=document.getElementById('submit');
submitButton.addEventListener('click', () => {
    const containerElement=document.getElementById('container');
    const resultElement=document.createElement('h6');
    resultElement.textContent="Final Call:"
    const marksElement=document.createElement('span');
    if(marks<2){
        marksElement.textContent='NO';
    }else if(marks >=2 || marks <=3){
        marksElement.textContent='MAY BE';
    }else{
        marksElement.textContent='YES';
    }

    resultElement.appendChild(marksElement);
    containerElement.appendChild(resultElement);
});