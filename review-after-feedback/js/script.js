
                              //ESERCIZIO TABELLA USANDO jQuery

function $generateTd($object, $index) {
     if ( $index == undefined) {
          var $newtd = $(`<tr>
                              <td class= "js-td">${$object.name}</td>
                              <td class= "js-td">${$object.lastname}</td>
                              <td class= "js-td">${$object.age}</td>
                         </tr>`);  
     }else {
          var $newtd = $(`<tr>
                              <td class= "js-td">${$object[$index].name}</td>
                              <td class= "js-td">${$object[$index].lastname}</td>
                              <td class= "js-td">${$object[$index].age}</td>
                         </tr>`);  
     }
     return $newtd;
}

function $studentsDatabase() {
     var $studentsArray = [
          { 'name' : 'Olga' , 'lastname' : 'Demina', 'age' : 29 },
          { 'name' : 'Gianluca', 'lastname' : 'Lomarco', 'age' : 35  },
          { 'name' : 'Giovanni' , 'lastname' : 'Cappelletti', 'age' : 30  }
     ]
     for ( let $i = 0; $i < $studentsArray.length; $i++) {
          $('tbody').append($generateTd($studentsArray, $i));
     }
     return $studentsArray;
}
     

function $newStudent() {
     var $newStudent = {
          'name' : prompt('Inserisci il nome dello studente'),
          'lastname' : prompt('Inserisci il cognome dello studente'),
          'age' : parseInt(prompt("Inserisci l'eta dello studente"))
     }
     $('tbody').append($generateTd($newStudent));
}

function $table() {
     $(document).ready($studentsDatabase);
     var $button = $('#js-button-1');
     $button.click($newStudent);
}

$(document).ready($table);



                                        //ESERCIZIO TABELLA USANDO JS VANILLA




function generateTd(trTag, object, keyObject, index) {
     var newtd = document.createElement('td');
     trTag.append(newtd);
     if (index == undefined) {
          var tdText = document.createTextNode(object[keyObject]);
     } else {
          var tdText = document.createTextNode(object[index][keyObject]);
     }
     newtd.appendChild(tdText);
     return trTag;
}

function studentsDatabase() {
     var studentsArray = [
          { 'name' : 'Judy' , 'lastname' : 'Alvarez', 'age' : 29 },
          { 'name' : 'Panam', 'lastname' : 'Palmer', 'age' : 30  },
          { 'name' : 'Johnny' , 'lastname' : 'Silverhand', 'age' : 35  }
     ]
     for ( let i = 0; i < studentsArray.length; i++) {
          var element = document.getElementById('js-tbody');
          var newtr = document.createElement('tr');
          for( let key in studentsArray[i] ) {
               element.appendChild(generateTd(newtr ,studentsArray, key, i));
          }
     }
     return studentsArray;
}

function newStudent() {
     var newStudent = {
          'name' : prompt('Inserisci il nome dello studente'),
          'lastname' : prompt('Inserisci il cognome dello studente'),
          'age' : parseInt(prompt("Inserisci l'eta dello studente"))
     }
     var element = document.getElementById('js-tbody');
     var newtr = document.createElement('tr');
     for (let key in newStudent) {
          element.appendChild(generateTd(newtr ,newStudent, key));
     }
}

function table() {
     $(document).ready(studentsDatabase);
     var button = document.getElementById('js-button-2');
     button.addEventListener('click', newStudent);
}

$(document).ready(table);

