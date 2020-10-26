const db=firebase.firestore();
var showdata =document.getElementById('show')
db.collection('user').get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        console.log(doc.data());
    showdata.innerText = doc.data().age;
})
})