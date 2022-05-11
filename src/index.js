

document.addEventListener("DomContentLoaded", 
document.querySelector(".refresh").addEventListener("click", ()=>{
    location.reload();
})

)



const title_details_ = document.querySelector(".title_details");
const info_icons = document.querySelector(".info_icons");
const user_img = document.querySelector(".user_img")

//Fetching external Api
fetch("https://randomuser.me/api/")
.then((response)=>response.json())
.then((data)=>{
    // console.log(data)
    let userData = data.results[0]
    // console.log(userData)
    let imgSrc = `<img src="${userData.picture.large}">`
    let name_ = `${userData.name.first} ${userData.name.last}`;
    let content_ = `
                <div class="icon user_ active" data-title="Hi, My Name is" data-value="${userData.name.first} ${userData.name.last}"></div>
                <div class="icon email_" id="email" data-title="My email address is" data-value="${userData.email}"></div>
                <div class="icon birthday_" id="age" data-title="My age is" data-value="${userData.dob.age} Years Old."></div>
                <div class="icon location_" id="address" data-title="My address is" data-value="${userData.location.city}"></div>
                <div class="icon phone_" id="telephone" data-title="My phone number is" data-value="${userData.phone}"></div>
                <div class="icon password_" id="gender" data-title="My Gender is" data-value="${userData.name.title}"></div>
    `

    info_icons.innerHTML = content_;
    user_img.innerHTML = imgSrc;
    title_details_.innerHTML = name_;

    const icon = document.querySelectorAll(".icon");
    const title_info = document.querySelector(".title_info");
    const title_details = document.querySelector(".title_details");

    
    // for hover and change details
    icon.forEach((item)=>{
        item.addEventListener("mouseover", function(){
            let titleData = item.getAttribute("data-title");
            let dataValue = item.getAttribute("data-value");
    
            // console.log(`Title Data: ${titleData}`);
            // console.log(`Value Data: ${dataValue}`)
    
            title_info.innerHTML = titleData;
            title_details.innerHTML = dataValue;
    
            let activeClass = document.querySelectorAll(".active");
            activeClass.forEach((active_)=>{
                active_.className = active_.className.replace(" active", "");
    
            })
            item.className += " active";
    
        });


})

// icon.forEach((item)=>{
//     item.addEventListener("mouseover", function(){
//         let titleData = item.getAttribute("data-title");
//         let dataValue = item.getAttribute("data-value");

//         console.log(`Title Data: ${titleData}`);
//         console.log(`Value Data: ${dataValue}`)

//         title_info.innerHTML = titleData;
//         dataValue.innerHTML = dataValue;

//         let activeClass = document.querySelectorAll(".active");
//         activeClass.forEach((active_)=>{
//             active_.className = active_.className.replace(" active", "");

//         })
//         item.className += " active";

//     });
})