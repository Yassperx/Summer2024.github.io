document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.querySelector('.btn');

  const Default_Data = { 
    "Mathraining_points" : "1419",
    "Mathraining_role" : "Expérimenté",
    "Mathraining_role_color" : "#DD77FF",
    "Codeforces_elo" : "925",
    "Codeforces_role" : "Newbie",
    "Codeforces_role_color" : "#808080",
    "Usaco_grade" : "Bronze",
    "Usaco_grade_color" : "#422900",
    "Books" : [
      "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"
    ],
    "max_page_number" : ["314", "328", "139", "357", "217", "296", "351", "83", "7", "2366", "1079" , "576"]
  };

  const loadData = () => {
    const savedData = localStorage.getItem('userData');
    return savedData ? JSON.parse(savedData) : Default_Data;
  };

  const userData = loadData();

  // Mathraining
  document.getElementById('mathraining_points').value = userData.Mathraining_points;
  document.getElementById('mathraining_role').value = userData.Mathraining_role;
  document.getElementById('mathraining_role_color').value = userData.Mathraining_role_color;

  // Codeforces
  document.getElementById('codeforces_elo').value = userData.Codeforces_elo;
  document.getElementById('codeforces_role').value = userData.Codeforces_role;
  document.getElementById('codeforces_role_color').value = userData.Codeforces_role_color;

  // Usaco Guide
  document.getElementById('usaco_grade').value = userData.Usaco_grade;
  document.getElementById('usaco_grade_color').value = userData.Usaco_grade_color;

  // Books
  document.getElementById('Book_0').value = userData.Books[0];
  document.getElementById('Book_1').value = userData.Books[1];
  document.getElementById('Book_2').value = userData.Books[2];
  document.getElementById('Book_3').value = userData.Books[3];
  document.getElementById('Book_4').value = userData.Books[4];
  document.getElementById('Book_5').value = userData.Books[5];
  document.getElementById('Book_6').value = userData.Books[6];
  document.getElementById('Book_7').value = userData.Books[7];
  document.getElementById('Book_8').value = userData.Books[8];
  document.getElementById('Book_9').value = userData.Books[9];
  document.getElementById('Book_10').value = userData.Books[10];
  document.getElementById('Book_11').value = userData.Books[11];

  saveButton.addEventListener('click', function () {
    // Mathstraining
    userData.Mathraining_points = document.getElementById('mathraining_points').value;
    userData.Mathraining_role = document.getElementById('mathraining_role').value;
    userData.Mathraining_role_color = document.getElementById('mathraining_role_color').value;

    // Codeforces
    userData.Codeforces_elo = document.getElementById('codeforces_elo').value;
    userData.Codeforces_role = document.getElementById('codeforces_role').value;
    userData.Codeforces_role_color = document.getElementById('codeforces_role_color').value;

    // Usaco guide
    userData.Usaco_grade = document.getElementById('usaco_grade').value;
    userData.Usaco_grade_color = document.getElementById('usaco_grade_color').value;

    // Books 
    userData.Books[0] = document.getElementById('Book_0').value;
    userData.Books[1] = document.getElementById('Book_1').value;
    userData.Books[2] = document.getElementById('Book_2').value;
    userData.Books[3] = document.getElementById('Book_3').value;
    userData.Books[4] = document.getElementById('Book_4').value;
    userData.Books[5] = document.getElementById('Book_5').value;
    userData.Books[6] = document.getElementById('Book_6').value;
    userData.Books[7] = document.getElementById('Book_7').value;
    userData.Books[8] = document.getElementById('Book_8').value;
    userData.Books[9] = document.getElementById('Book_9').value;
    userData.Books[10] = document.getElementById('Book_10').value;
    userData.Books[11] = document.getElementById('Book_11').value;

    localStorage.setItem('userData', JSON.stringify(userData));

    console.log('Updated Data:', userData);
  });
});
