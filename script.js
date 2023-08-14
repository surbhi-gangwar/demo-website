function displayPage2() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2-container');
    page1.style.display = "none";    
    page2.style.display = "flex";
}

function displayPage3() {
    const page2 = document.getElementById('page2-container');
    const page3 = document.getElementById('page3-container');
    page2.style.display = "none";
    page3.style.display = "flex";    
}

function displayPage4() {
    const page3 = document.getElementById('page3-container');
    const page4 = document.getElementById('page4-container');
    page3.style.display = "none";
    page4.style.display = "flex";
}

function displayPage5() {
    const page4 = document.getElementById('page4-container');
    const page5 = document.getElementById('page5-container');
    page4.style.display = "none";
    page5.style.display = "flex";
}