let arr = []
const list = document.querySelector(".items")
const scrolls = document.querySelector(".scroll")
const loading = document.querySelector(".fa-6x")



window.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.spoonacular.com/recipes/random?apiKey=64c32e9b1aa4445a97ff2724aab071ab&number=21")
        .then(res => res.json())
        .then(json => {
            let obj = json.recipes
            for (let i = 0; i < obj.length; i++) {
                arr.push(obj[i])
            }
            public(arr)
            category(arr)
        })
})


const h3 = document.querySelector("h3")
function public(data) {

    if (data.length > 0) {
        loading.style.display = "none";
        let products = data.map((pro) =>
            `<div>
    <h4></h4>
    <a href="${"recipe.html?id=" + "" + pro.id}"><img src="${pro.image}"></a>
    <span>${pro.title}</span>
    </div>`).join("")

        list.innerHTML = products
        h3.style.display = "block"
    }
    else {
        list.innerHTML = "<h1>No Recipes</h1>"
        h3.style.display = "none"
    }


    let scrol = data.map((scr) =>
        `<div class="slideDiv"><a href="${"recipe.html?id=" + "" + scr.id}"><img src="${scr.image}" class="slide"></a></div>`).join("")
    scrolls.innerHTML = scrol


    const image = document.querySelectorAll(".items>div>a>img")
    const span = document.querySelectorAll("span")

    for (let y = 0; y < image.length; y++) {

        image[y].addEventListener("mouseover", (e) => {
            span[y].style.display = "block"
            image[y].style.opacity = 0.5
        })
        image[y].addEventListener("mouseout", (e) => {
            span[y].style.display = "none"
            image[y].style.opacity = 1
        })

        span[y].addEventListener("mouseover", (e) => {
            span[y].style.display = "block"
            image[y].style.opacity = 0.5
        })
        span[y].addEventListener("mouseout", (e) => {
            span[y].style.display = "none"
            image[y].style.opacity = 1
        })
    }
}



const lists = document.querySelector(".list")
function category(data){
    const allCategory = data.map((elem) => elem.cuisines[0])
    console.log(allCategory);
    const categories = ["All", ...allCategory.filter((product, index) => {
        // console.log(product,index);
        return allCategory.indexOf(product) == index
    })]

    // its a 
    lists.innerHTML = categories.map((cate) => {
        if (cate != undefined) {
            return `<button>${cate}</button>`
        }
    }).join("")
    //  const btn = document.querySelector(".lists>button")
    lists.addEventListener("click", (e) => {
        let select = e.target.innerText
        // e.target.classList.toggle("add")
        if (select == "All") {
            public(data)
        }
        else {
            public(data.filter((element) => element.cuisines[0] == select))
            // e.target.style.backgroundColor = "red"
        }

        // select == "All"?public(data) : public(data.filter((element)=>element.cuisines[0] == select))
    })
    const icon = document.querySelector(".icon>i")
    const search = document.querySelector("#search")
    search.addEventListener("keyup", (e) => {

        let searching = e.target.value.toLowerCase().trim()
        if (searching) {
            public(data.filter((element) => element.title.toLowerCase().indexOf(searching) != -1))
        }
        else {
            public(data)
        }
    })
}



































const recipe = document.querySelector(".recipe")
const detail = document.querySelector(".detail")
let array = []
let recipeNo = window.location.search.slice(4)
let apis = fetch("https://api.spoonacular.com/recipes/" + recipeNo + "/information?apiKey=64c32e9b1aa4445a97ff2724aab071ab")
    .then(res => res.json())
    .then(json => {
        array.push(json)
        loading.style.display = "none";
        for (let r = 0; r < array.length; r++) {
            // console.log(array[r]);
            // console.log(array[r].cuisines);
            let img = document.createElement("img")
            let span = document.createElement("li")
            let span1 = document.createElement("li")
            let span2 = document.createElement("li")
            let span3 = document.createElement("li")
            span.innerText = "Product" + "=" + array[r].title
            span1.innerText = "Vegetarian" + "=" + array[r].vegetarian
            span2.innerText = "sourceName" + "=" + array[r].sourceName
            img.setAttribute("src", array[r].image)
            recipe.append(img)
            detail.append(span)
            detail.append(span1)
            detail.append(span2)
            if (array[r].cuisines == "") {
                span3.innerText = "cuisines" + "=" + "Asian"
                detail.append(span3)
            }
            else {
                span3.innerText = "cuisines" + "=" + array[r].cuisines[0]
                detail.append(span3)
            }
        }
    })


const slideImg = document.querySelector(".scroll")
const right = document.querySelector(".right>i")
right.addEventListener("click", () => {
    slideImg.scrollBy(350, 0)
})
const left = document.querySelector(".left>i")
left.addEventListener("click", () => {
    slideImg.scrollBy(-350, 0)
})



const viewMore = document.querySelector(".viewMore")
viewMore.addEventListener("click", () => {
    loading.style.display = "block";
    fetch("https://api.spoonacular.com/recipes/random?apiKey=64c32e9b1aa4445a97ff2724aab071ab&number=21")
        .then(res => res.json())
        .then(json => {
            let obj = json.recipes
            for (let i = 0; i < obj.length; i++) {
                arr.push(obj[i])
            }
            public(arr)
            category(arr)
        })

})








































































// console.log(slideImg);
// const totalImg = slideImg.length
// console.log(totalImg);

// let dummy = ["lokesh", "lokesh", "lokesh", "sathish", "sathish"]
// // console.log(dummy.indexOf("sathish"));
// let fille = dummy.filter((produ, idx) => {
//     console.log(produ, idx);
//     return dummy.indexOf(produ) == idx
// })
// console.log(fille);
// function public(data){
//         for (let y = 0; y < data.length; y++) {
//             let image = document.createElement("img")
//             let div = document.createElement("div")
//             let span = document.createElement("span")
//             let a = document.createElement("a")
//             image.setAttribute("src", data[y].image)
//             a.setAttribute("href", "recipe.html?id=" + "" + data[y].id)
//             span.innerText = data[y].title
//             a.append(image)
//             div.append(a)
//             div.append(span)
//             list.append(div)
//             if (data[y].cuisines[0] == "American") {
//                 part1.innerText = data[y].cuisines[0]
//                 cat.append(div)
//             }
//             if (data[y].cuisines[0] == "Mediterranean") {
//                 part2.innerText = data[y].cuisines[0]
//                 cat1.append(div)
//             }
//             if (data[y].cuisines[0] == "Mexican") {
//                 par3.innerText = data[y].cuisines[0]
//                 cat2.append(div)
//             }