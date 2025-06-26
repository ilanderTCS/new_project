
let courses=[
    {
        id:1,
        name:"UI & UX",
        duration:60,
        fee: 15000,
        img:"ui.webp",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Front-End"
    },
    {
        id:2,
        name:"JavaScript",
        duration:20,
        fee: 5000,
        img:"js.avif",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Front-End"
    },
    {
        id:3,
        name:"Angular",
        duration:60,
        fee: 20000,
        img:"angular.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Front-End"
    },
    {
        id:4,
        name:"React Js",
        duration:50,
        fee: 16000,
        img:"react.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Front-End"
    },
    {
        id:5,
        name:"Java",
        duration:90,
        fee: 25000,
        img:"java.webp",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Back-End"
    },
    {
        id:6,
        name:"Python",
        duration:80,
        fee: 22000,
        img:"python.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Back-End"
    },
    {
        id:7,
        name:"DotNet",
        duration:120,
        fee: 30000,
        img:"dotnet.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Back-End"
    },
    {
        id:8,
        name:"Node Js",
        duration:90,
        fee: 28000,
        img:"node js.webp",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Back-End"
    },
    {
        id:9,
        name:"Vue Js",
        duration:60,
        fee: 13000,
        img:"vuejs.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Front-End"
    },
    {
        id:10,
        name:"Photoshop",
        duration:30,
        fee: 10000,
        img:"photo.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cupiditate",
        type:"Front-End"
    }
]
let item = document.getElementById("item")


let c = ""
for(let i = 0; i < courses.length; i++){
    c += `
            <div class="col-md-4 col-sm-12 col-12 mb-3">
                <div class="card">
                    <img src="./images/${courses[i].img}" alt="" class="w-100">
                    <div class="card-body">
                        <h2 class="card-title text-danger">${courses[i].name}</h2>
                        <p class="card-text text-primary">${courses[i].content}</p>
                        <button class="btn btn-primary">Duration: ${courses[i].duration}Hrs</button>
                        <button class="btn btn-success">Fee: ${courses[i].fee}/-</button>
                    </div>
                </div>
            </div>
        `
}

item.innerHTML = c