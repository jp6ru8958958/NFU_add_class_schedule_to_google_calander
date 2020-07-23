function AddToCalander(){
  var courseInfo = getCourseInfo();
  GoogleCalanderSetting();
};

function getCourseInfo(){
  var form = document.getElementsByTagName('td');
  var courseInfo = [];
  for(var seq=1; seq<form.length-3;){
    courseInfo.push({
      sequence:     form[seq++].textContent,    // 順序
      courseNumber: form[seq++].textContent,    // 當期課號
      class:        form[seq++].textContent,    // 修課班級
      courseName:   form[seq++].textContent,    // 科目名稱
      type:         form[seq++].textContent,    // 選別
      credit:       form[seq++].textContent,    // 學分
      hours:        form[seq++].textContent,    // 時數
      teacher:      form[seq++].textContent,    // 授課老師
      classRoom:    form[seq++].textContent,    // 教室
      classTime:    form[seq++].textContent     // 上課星期/節次
    });
  }
  return courseInfo;
};

function GoogleCalanderSetting(){

};