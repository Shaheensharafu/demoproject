function changeImg() {
    let path1 = "/images/davisuko-5E5N49RWtbA-unsplash.jpg"
    let path2 = "/images/casey-horner-RmoWqDCqN2E-unsplash.jpg"
    if (document.getElementById("img1").src == path1) {
        document.getElementById("img1").src == path2
    }
    else {
        document.getElementById("img1").src = path2
    }
    console.log(document.getElementById("img1").src);
    document.getElementById("img1").src = "/images/davisuko-5E5N49RWtbA-unsplash.jpg"

}