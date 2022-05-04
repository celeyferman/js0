const n = document.querySelector("#nColumn");

function changeColumn() {
    const columns = n.value;
  
    let blog = document.getElementById("mainBlog");
    blog.setAttribute("style", "column-count:  "+columns);
}
