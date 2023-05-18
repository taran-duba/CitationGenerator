function generateCitation() {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const container = document.getElementById("container").value;
    const version = document.getElementById("version").value;
    const number = document.getElementById("number").value;
    const publisher = document.getElementById("publisher").value;
    const publicationDate = document.getElementById("publicationDate").value;
    const location = document.getElementById("location").value;
    const url = document.getElementById("url").value;
    const accessDate = document.getElementById("accessDate").value;
    
    let citation = "";
    
    // Format the citation according to MLA 9 guidelines
    citation += author + ". ";
    citation += '"' + title + '." ';
    citation += container + ", ";
    citation += version + ", ";
    citation += number + ", ";
    citation += publisher + ", ";
    citation += publicationDate + ", ";
    citation += location + ", ";
    citation += url + ". Accessed " + accessDate + ".";
    
    document.getElementById("result").textContent = citation;
}  