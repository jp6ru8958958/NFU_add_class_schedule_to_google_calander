function AddToCalander(){
  var courseInfo = getCourseInfo();
  GoogleCalanderSetting();
};

function getCourseInfo(){
  var form = document.getElementsByTagName('td');
  var fieldNum = 10;
  var courseInfo = [];
  for(var seq=1; seq<form.length-3; seq+=fieldNum){
    courseInfo.push({
      sequence:     form[seq].textContent,      // 順序
      courseNumber: form[seq+1].textContent,    // 當期課號
      class:        form[seq+2].textContent,    // 修課班級
      courseName:   form[seq+3].textContent,    // 科目名稱
      type:         form[seq+4].textContent,    // 選別
      credit:       form[seq+5].textContent,    // 學分
      hours:        form[seq+6].textContent,    // 時數
      teacher:      form[seq+7].textContent,    // 授課老師
      classRoom:    form[seq+8].textContent,    // 教室
      classTime:    form[seq+9].textContent     // 上課星期/節次
    });
  }
  return courseInfo;
};

function GoogleCalanderSetting(){
  
}