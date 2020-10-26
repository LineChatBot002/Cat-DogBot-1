const db=firebase.firestore();
const table=document.querySelector('#tbresult');
const form=document.querySelector('#addForm')
const form1=document.querySelector('#sertForm')
db.collection('user').get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        console.log(doc.data());
        showData(doc);
});
});
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('user').add({
        ชื่อคลินิก:form.name.value,
        นัดหมาย:form.appoint.value,
        บันทึกอื่นๆ:form.save.value,
        วันเดือนปี:form.date.value,
        เวลา:form.time.value
    });

   
    form.name.value='';
    form.appoint.value='';
    form.save.value='';
    form.date.value='';
    form.time.value='';
});
form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    showData(doc);

});
function showData(doc){
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    cell1.innerHTML=doc.data().ชื่อคลินิก;
    cell2.innerHTML=doc.data().นัดหมาย;
    cell3.innerHTML=doc.data().บันทึกอื่นๆ;
    cell4.innerHTML=doc.data().วันเดือนปี;
    cell5.innerHTML=doc.data().เวลา;
}
function fncOpenPopup()
{
window.open('popup2.html','popup-name','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
}
