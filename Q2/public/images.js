
function loadPictures() {
    const pictures = ["https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/106379549_106079654431103_1731852241736289787_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=H5cf01LkgTIAX_zguqU&oh=0d817d9936ee23b9e39f70bd97af47df&oe=5F236FF6",
    "https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/105941222_1196084360734953_4655839002610469489_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=KOxJNqhhlJcAX9koiR4&oh=415a2fcfbab7f8d12216b871f7ae2f89&oe=5F25FF6A",
"https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/104641745_890572704779343_6362294981937001235_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=TcXPSyES9n8AX9lgtsk&oh=5b0dbc0125afd1ac6072a144676c9bb6&oe=5F25F1F4",
"https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/104184677_2528344740752081_8540459891513030971_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=_VsOzr8qdA8AX-p2DCe&oh=8efcd8435c41b2d056f1347ce82c58c5&oe=5F24D95E",
"https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/97045127_239757203787670_8820188509755826371_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=0zhRZFWu27wAX-U-G5K&oh=581f1d8110dbce219a8b1f53103b20d4&oe=5F2612DB",
"https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/94022021_546988579344959_5809528784811354631_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=jjorFfMSvwoAX-EW5CL&oh=4e851f6859628f4cdf52848f51f49346&oe=5F2620C3",
"https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91147976_534029623916163_5083902433360610316_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=sRcX5A7hP90AX_2YASS&oh=f82a5de9c75950410e24a2092ba3dca7&oe=5F241F0A",
"https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/91014599_119633216330803_1650380302903564425_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=2i6ybyyLJ7kAX-MMzvb&oh=787894ff97189f295461d08f3c3085f5&oe=5F255888",
"https://instagram.fhfa2-2.fna.fbcdn.net/v/t51.2885-15/e35/83986917_2895908610520580_4898104458294812656_n.jpg?_nc_ht=instagram.fhfa2-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=-GtbpgWJU2EAX-Nuume&oh=471b290e9712e2a552c4390e301fa848&oe=5F23A5C1"];
    getPictures(pictures);

}

function getPictures(pictures){
    pictures.forEach(async (imgUrl) => {
        let gallery = document.getElementById("gallery");
        let new_div = document.createElement("div");
        new_div.className = "gallery-item";
        new_div.tabindex = "0";

        let img = document.createElement("IMG");
        img.setAttribute("src", imgUrl);
        img.className = "gallery-img";

        new_div.appendChild(img);
        gallery.appendChild(new_div);
    });
    let loader = document.getElementById("loader");
    loader.style.visibility = "hidden";
}

function addPicture(){
    let img_input = document.getElementById("img_input");
    if(img_input.value === '' || img_input.value === "Enter Image URL")
    {
        alert("Please enter a valid URL");
    }
    else {
    getPictures([img_input.value]);
    img_input.value = '';
    }
    
}
