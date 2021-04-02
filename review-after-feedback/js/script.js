
// ESERCIZIO TABELLA USANDO jQuery

function $studentsDatabase() {
     return $studentsArray = [
          { 'name' : 'Olga' , 'lastname' : 'Demina', 'age' : 29 },
          { 'name' : 'Gianluca', 'lastname' : 'Lomarco', 'age' : 35  },
          { 'name' : 'Giovanni' , 'lastname' : 'Cappelletti', 'age' : 30  }
     ]
}


function $newStudent() {
     return {
          'name' : prompt('Inserisci il nome dello studente'),
          'lastname' : prompt('Inserisci il cognome dello studente'),
          'age' : parseInt(prompt("Inserisci l'eta dello studente"))
     }
}


function $generateRowForDatabase(database) {
     $('tbody').empty();
     $.each(database,($index, $element) => {
          var $newtd = $(`<tr>
                              <td class= "js-td">${$element.name}</td>
                              <td class= "js-td">${$element.lastname}</td>
                              <td class= "js-td">${$element.age}</td>
                         </tr>`);  
          $('tbody').append($newtd);
     });
}


function $table() {
     const $students = $studentsDatabase(); //-----> students
     $generateRowForDatabase($students);  
     $('#js-button-1').click(function() {
          let $student = $newStudent(); //-----> new student               
          $students.push($student);  //-----> update students data                  
          $generateRowForDatabase($students);  //-----> refresh view          
     });
}


// $(document).ready($table);






                                        //Esercizio tabella usando jQuery, usando il form e con tasto "remove"


function $studentsDatabase() {
     return $studentsArray = [
          { 'name' : 'Olga' , 'lastname' : 'Demina', 'age' : 29 },
          { 'name' : 'Gianluca', 'lastname' : 'Lomarco', 'age' : 35  },
          { 'name' : 'Giovanni' , 'lastname' : 'Cappelletti', 'age' : 30  }
     ]
}


function $formToArray() {
     var serialized = $('input').serializeArray();
     let newStudentData = [];
     $.each(serialized, function(index, element) {
          newStudentData.push(element.value);
     })
     return newStudentData;
}


function $newStudent(formArray) {
     return {
          'name' : formArray[0],
          'lastname' : formArray[1],
          'age' : parseInt(formArray[2])
     }
}


function $generateRowForDatabase(database) {
     $('tbody').empty();
     $.each(database,($index, $element) => {
          var $newtd = $(`<tr>
                              <td class= "js-td">${$element.name}</td>
                              <td class= "js-td">${$element.lastname}</td>
                              <td class= "js-td">${$element.age}</td>
                              </tr>`);  
          $('tbody').append($newtd);
     });
}


function remove(database) {
          var databaseRemoved = database.pop();
          $('tbody').empty();
          $generateRowForDatabase(database);
}


function $table2() {
     const $students = $studentsDatabase(); //-----> students data
     $generateRowForDatabase($students);  //-----> View for students
     $('#form').submit(function(event) {
          event.preventDefault();
          let formArray = $formToArray(); //----> get form-data array
          let $student = $newStudent(formArray); //-----> new student data          
          $students.push($student);  //-----> update students database                  
          $generateRowForDatabase($students);  //-----> refresh view        
     });
     $('#js-button-3').click(function() {
          remove($students); //---> remove the last student
     })
}


$(document).ready($table2);






                                        // ESERCIZIO TABELLA USANDO JS VANILLA


function studentsDatabase() {
     return studentsArray = [
          { 'name' : 'Judy' , 'lastname' : 'Alvarez', 'age' : 29 },
          { 'name' : 'Panam', 'lastname' : 'Palmer', 'age' : 30  },
          { 'name' : 'Johnny' , 'lastname' : 'Silverhand', 'age' : 35  }
     ]
}


function newStudent() {
     return {
          'name' : prompt('Inserisci il nome dello studente'),
          'lastname' : prompt('Inserisci il cognome dello studente'),
          'age' : parseInt(prompt("Inserisci l'eta dello studente"))
     }
}


function generateRowForDatabase(database) {
     const tableId = document.getElementById('js-tbody');
     tableId.innerHTML = "";
     database.forEach(element => {
          let newtr = document.createElement('tr');
          for( let key in element) {
               let newtd = document.createElement('td');
               newtr.append(newtd);
               let tdText = document.createTextNode(element[key]);
               newtd.appendChild(tdText);
               tableId.appendChild(newtr);
          }
     });      
}


function table() {
     const students = studentsDatabase(); //-----> students
     generateRowForDatabase(students);  
     const button = document.getElementById('js-button-2');
     button.addEventListener('click',function() {
          let student = newStudent(); //-----> new student               
          students.push(student);  //-----> update students data                  
          generateRowForDatabase(students);  //-----> refresh view
     }
)};


// $(document).ready(table);


