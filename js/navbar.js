
let menus = [
    {
        name:"Home",
        url:"index.html",
        sub:[]
    },
    {
        name:"About",
        url:"about.html",
        sub:[
            {
                name:"Team",
                url:"team.html"
            },
            {
                name:"Testmonirals",
                url:"test.html"
            }
        ]
    },
    {
        name:"Courses",
        url:"courses.html",
        sub:[
            {
                name:"UI",
                url:"ui.html"
            },
            {
                name:"Angular",
                url:"angular.html"
            },
            {
                name:"React",
                url:"react.html"
            }
        ]
    },
    {
        name:"Contact",
        url:"contact.html",
        sub:[]
    },
    {
        name:"Register",
        url:"register.html",
        sub:[]
    },
    {
        name:"login",
        url:"login.html",
        sub:[]
    },
    {
        name:"Table",
        url:"table.html",
        sub:[]
    }
]
let list = document.querySelector("#list")


let x = ""
for(let i = 0; i < menus.length; i++){
    if(menus[i].sub.length === 0){
        x += `<li class="nav-item">
                    <a class="nav-link" href="${menus[i].url}">${menus[i].name}</a>
                </li>`
    }else{
        x += `<li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="${menus[i].url}" role="button" data-bs-toggle="dropdown">${menus[i].name}</a>
                    <ul class="dropdown-menu">`

        for(let j = 0; j < menus[i].sub.length;j++){
            x += `<li><a class="dropdown-item" href="${menus[i].sub[j].name}">${menus[i].sub[j].name}</a></li>`
        }
        x += ` </ul>
            </li>`

    }
}

list.innerHTML = x