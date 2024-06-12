const dataError = "No data found";
const max_page_number = [314, 328, 139, 357, 217, 461, 572, 825, 26, 32, 184 , 296, 351, 83, 2366, 1079, 576, 904, 34, 120, 128];

document.addEventListener('DOMContentLoaded', function () {
  const savedData = localStorage.getItem('userData');
  
  if (savedData) {
    const userData = JSON.parse(savedData);
    console.log(userData);

    // Mathraining
    document.getElementById("Mathraining_points").innerText           = userData.Mathraining_points;
    document.getElementById("Mathraining_role").style.color           = userData.Mathraining_role_color;
    document.getElementById("Mathraining_role").innerText             = userData.Mathraining_role;

    // Codeforces
    document.getElementById("Codeforces_elo").innerText               = userData.Codeforces_elo;
    document.getElementById("Codeforces_role").style.color            = userData.Codeforces_role_color;
    document.getElementById("Codeforces_role").innerText              = userData.Codeforces_role;

    // Usaco guide
    document.getElementById("Usaco_Grade").style.color                = userData.Usaco_grade_color;
    document.getElementById("Usaco_Grade").innerText                  = userData.Usaco_grade;

    // Books
    document.getElementById('A1').innerText = userData.Books[0];  
    document.getElementById('A2').innerText = userData.Books[1];  
    document.getElementById('A3').innerText = userData.Books[2];  
    document.getElementById('A4').innerText = userData.Books[3];  
    document.getElementById('A5').innerText = userData.Books[4];  
    document.getElementById('A6').innerText = userData.Books[5];  
    document.getElementById('A7').innerText = userData.Books[6];  
    document.getElementById('A8').innerText = userData.Books[7];  
    document.getElementById('A9').innerText = userData.Books[8];  
    document.getElementById('A10').innerText = userData.Books[9];  
    document.getElementById('A11').innerText = userData.Books[10];  
    document.getElementById('A12').innerText = userData.Books[11]; 
    document.getElementById('A13').innerText = userData.Books[12]; 
    document.getElementById('A14').innerText = userData.Books[13]; 
    document.getElementById('A15').innerText = userData.Books[14]; 
    document.getElementById('A16').innerText = userData.Books[15]; 
    document.getElementById('A17').innerText = userData.Books[16]; 
    document.getElementById('A18').innerText = userData.Books[17]; 
    document.getElementById('A19').innerText = userData.Books[18]; 
    document.getElementById('A20').innerText = userData.Books[19]; 
    document.getElementById('A21').innerText = userData.Books[20]; 
    
    document.getElementById('B1').childNodes[1].innerText = `/${max_page_number[0]}`;
    document.getElementById('B2').childNodes[1].innerText = `/${max_page_number[1]}`;
    document.getElementById('B3').childNodes[1].innerText = `/${max_page_number[2]}`;
    document.getElementById('B4').childNodes[1].innerText = `/${max_page_number[3]}`;
    document.getElementById('B5').childNodes[1].innerText = `/${max_page_number[4]}`;
    document.getElementById('B6').childNodes[1].innerText = `/${max_page_number[5]}`;
    document.getElementById('B7').childNodes[1].innerText = `/${max_page_number[6]}`;
    document.getElementById('B8').childNodes[1].innerText = `/${max_page_number[7]}`;
    document.getElementById('B9').childNodes[1].innerText = `/${max_page_number[8]}`;
    document.getElementById('B10').childNodes[1].innerText = `/${max_page_number[9]}`;
    document.getElementById('B11').childNodes[1].innerText = `/${max_page_number[10]}`;
    document.getElementById('B12').childNodes[1].innerText = `/${max_page_number[11]}`;
    document.getElementById('B13').childNodes[1].innerText = `/${max_page_number[12]}`;
    document.getElementById('B14').childNodes[1].innerText = `/${max_page_number[13]}`;
    document.getElementById('B15').childNodes[1].innerText = `/${max_page_number[14]}`;
    document.getElementById('B16').childNodes[1].innerText = `/${max_page_number[15]}`;
    document.getElementById('B17').childNodes[1].innerText = `/${max_page_number[16]}`;
    document.getElementById('B18').childNodes[1].innerText = `/${max_page_number[17]}`;
    document.getElementById('B19').childNodes[1].innerText = `/${max_page_number[18]}`;
    document.getElementById('B20').childNodes[1].innerText = `/${max_page_number[19]}`;
    document.getElementById('B21').childNodes[1].innerText = `/${max_page_number[20]}`;

  } else {
    console.log(dataError);
  }
});
