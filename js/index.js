let firstname = document.getElementById('first-name')
let lastname = document.getElementById('last-name')
let jobtitle = document.getElementById('job-title')
let email = document.getElementById('email')
let salary = document.getElementById('salary')
let phonenumber = document.getElementById('phone-number')
let companybranch = document.getElementById("company-branch")
let adress = document.getElementById("adress")
let add = document.getElementById('add')
let mood = "create"
let temp;


 // local storage
let savedata;
if (localStorage.user != null) {
    savedata = JSON.parse(localStorage.member)
}
else {
    savedata = [];
}
 //local storage

//creat -
add.onclick = function () {
    let newmember = {
        firstname: firstname.value,
        lastname: lastname.value,
        jobtitle: jobtitle.value,
        email: email.value,
        salary: salary.value,
        phonenumber: phonenumber.value,
        companybranch: companybranch.value,
        adress: adress.value,
    }

    if(mood === 'create'){
        savedata.push(newmember)
        
    }else{
        savedata[temp] = newmember;
        mood = "create"
        add.innerHTML = 'create' 
        add.style.background = '#990033'
    }
    // savedata.push(newuser)

     // local storage
    localStorage.setItem('member', JSON.stringify(savedata))
    ClearData()
    showdata()
}
    showdata()
//creat


// clear inputs
function ClearData() {
    firstname.value = ''
    lastname.value = ''
    jobtitle.value = ''
    email.value = ''
    salary.value = ''
    phonenumber.value =''
    companybranch.value =''
    adress.value = ''
}
// clear inputs

//reed
function showdata() {
    let table = ''
    for (let i = 0; i < savedata.length; i++){
        table +=`
    <tr>
        <td>${i+1}</td>
        <td>${savedata[i].firstname}</td>
        <td>${savedata[i].lastname}</td>
        <td>${savedata[i].jobtitle}</td>
        <td>${savedata[i].email}</td>
        <td>${savedata[i].salary}</td>
        <td>${savedata[i].phonenumber}</td>
        <td>${savedata[i].companybranch}</td>
        <td>${savedata[i].adress}</td>
        <td><button onclick="UpdataData(${i})" class="update">update</button></td>
        <td><button onclick="deleteData(${i})" class="delete">delete</button></td>
    </tr>
        `
    }
    document.getElementById('tobody').innerHTML = table
}
//reed

//delete
function deleteData(i) {
    savedata.splice(i, 1)
    localStorage.member = JSON.stringify(savedata)
    showdata()
}
//delete


//updata
function UpdataData(i) {
    firstname.value = savedata[i].firstname
    lastname.value = savedata[i].lastname
    jobtitle.value = savedata[i].jobtitle
    email.value = savedata[i].email
    salary.value = savedata[i].salary
    phonenumber.value = savedata[i].phonenumber
    companybranch.value = savedata[i].companybranch
    adress.value = savedata[i].adress
    add.innerHTML = 'Update'
    add.style.background = 'green'
    mood = "update"
    temp=i

}
