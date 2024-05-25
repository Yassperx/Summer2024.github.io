let last_page_number  = []
const max_page_number = [314, 328, 139, 357, 217, 296, 351, 83, 7, 1393, 2366 , 1079, 758]

fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
      for(let i=0; i<13; i++){
        last_page_number[i] = json.Books[i];
      }
      // Book progress
      document.getElementById("A1").innerText = `${last_page_number[0]}/${max_page_number[0]}`;
      document.getElementById("A2").innerText = `${last_page_number[1]}/${max_page_number[1]}`;
      document.getElementById("A3").innerText = `${last_page_number[2]}/${max_page_number[2]}`;
      document.getElementById("A4").innerText = `${last_page_number[3]}/${max_page_number[3]}`;
      document.getElementById("A5").innerText = `${last_page_number[4]}/${max_page_number[4]}`;
      document.getElementById("A6").innerText = `${last_page_number[5]}/${max_page_number[5]}`;
      document.getElementById("A7").innerText = `${last_page_number[6]}/${max_page_number[6]}`;
      document.getElementById("A8").innerText = `${last_page_number[7]}/${max_page_number[7]}`;
      document.getElementById("A9").innerText = `${max_page_number[8]}`;
      document.getElementById("A10").innerText = `${last_page_number[9]}/${max_page_number[9]}`;
      document.getElementById("A11").innerText = `${last_page_number[10]}/${max_page_number[10]}`;
      document.getElementById("A12").innerText = `${last_page_number[11]}/${max_page_number[11]}`;
      document.getElementById("A13").innerText = `${last_page_number[12]}/${max_page_number[12]}`;

      // Mathraining
      document.getElementById("Mathraining_role").innerText       = json.Mathraining_role;
      document.getElementById("Mathraining_role").style.color     = json.Mathraining_role_color;
      document.getElementById("Mathraining_points").innerText     = json.Mathraining_points;

      // Codeforces
      document.getElementById("Codeforces_role").innerText        = json.Codeforces_role;
      document.getElementById("Codeforces_role").style.color      = json.Codeforces_role_color;
      document.getElementById("Codeforces_elo").innerText         = json.Codeforces_elo;

      // Usaco guide
      document.getElementById("Usaco_Grade").innerText            = json.Usaco_grade;
      document.getElementById("Usaco_Grade").style.color          = json.Usaco_grade_color;
    });

// Index of books : 
// Modern_NT                                    : 0    
// Evan Chen                                    : 1
// Functional Equations and How To Solve Them   : 2
// Combinatorics                                : 3
// Inequalities                                 : 4

// CPH                                          : 5
// PAPS                                         : 6
// AIUCO                                        : 7

// Calisthenics_Program                         : 8

// Modern_NT                                    : 9
// Chemistry
// General_Chemistry_Principles                 : 10
// PhysicsApplications                          : 11 
// ModernPhysics                                : 12
