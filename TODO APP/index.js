let adtask=document.getElementById('adtask')
let adbtn=document.getElementById('adbtn')
adbtn.addEventListener('click',function(){

    adtaskval=adtask.value;
    if( adtaskval.trim()!=0){

    
let webtask=localStorage.getItem('localtask')
if(webtask== null){
    taskOb=[];
}
else{
    taskOb=JSON.parse(webtask);
}

taskOb.push(adtaskval)
localStorage.setItem('localtask',JSON.stringify(taskOb))
 }
showtask()
})

//Add list.................................

function showtask(){
    let webtask=localStorage.getItem('localtask')
if(webtask== null){
    taskOb=[];
}
else{
    taskOb=JSON.parse(webtask)
}
let html='';
let adlist=document.getElementById('adlist')
taskOb.forEach((item,index) => {
    html += `<tr>
    <th scope='row'>${index+1}</th>
    <td>${item}</td>
    <td><button type="button" class='blue' onclick='edittask(${index})'> Edit </button></td>
    <td><button type="button" class='danger' onclick='ditem(${index})' > Delete </button></td>
</tr>`
});

adlist.innerHTML=html;
}

//Edit Start.............................

function edittask(index){
    let adbtn=document.getElementById('adbtn')
    let sindex=document.getElementById('sindex')
    let savebtn=document.getElementById('savebtn');
    sindex.value=index
    let webtask=localStorage.getItem('localtask')
    let taskOb=JSON.parse(webtask);
    adtask.value=taskOb[index];
    adbtn.style.display='none'
    savebtn.style.display='block'
    
}
let savebtn=document.getElementById('savebtn')
savebtn.addEventListener('click',function(){
    adbtn.style.display='block'
    savebtn.style.display='none'
    let webtask=localStorage.getItem('localtask')
    let taskOb=JSON.parse(webtask);
    let sindex=document.getElementById('sindex').value
    taskOb[sindex]=adtask.value
    adtask.value=''
    localStorage.setItem('localtask',JSON.stringify(taskOb))
    showtask()
})

//Delete Startttttttttttttttttttttt.........

function ditem(index){
    let webtask=localStorage.getItem('localtask')
    let taskOb=JSON.parse(webtask);
    taskOb.splice(index,1);
    localStorage.setItem('localtask',JSON.stringify(taskOb))
    showtask()
}