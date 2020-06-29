var CourseInfo = {
  sequence: 0,      // 順序
  courseNumber: 0,  // 當期課號
  class: '',        // 修課班級
  courseName: '',   // 科目名稱
  type: '',         // 選別
  credit: 0,        // 學分
  hours: 0,         // 時數
  teacher: '',      // 授課老師
  classRoom: '',    // 教室
  classTime: ''     // 上課星期/節次
};

function AddToCalander(){
  getCourseInfo();

};

function getCourseInfo(){
  var form = document.getElementsByTagName('td');
  var fieldNum = 10;
  for(var seq=1; seq<form.length-3; seq+=fieldNum){

    for(var it=0; it<fieldNum; it++){
      console.log(form[seq+it].textContent);
    }
  }
  
};