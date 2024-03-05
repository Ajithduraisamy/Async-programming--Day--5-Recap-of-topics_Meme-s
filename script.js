//using async function to retrive the data from the api and display in the card:
async function memes(){
var res=await fetch("https://api.imgflip.com/get_memes")
var res1=await res.json();

var container=document.createElement("div")
container.className="container"

var row=document.createElement("div")
row.className="row"

var res2=res1.data.memes;

// using for loop to create a each column for the api data
for(var i=0;i<res2.length;i++){

var col=document.createElement("div")
col.className="col-md-4"
col.innerHTML +=`<div class="card bg-light text-white">
                    <div class="card-header">Name: ${res2[i].name}</div>
                    <img src="${res2[i].url}" class="card-img" alt="...">
                </div>`

                row.append(col)
                container.append(row)
                document.body.append(container)
            }
}
memes()