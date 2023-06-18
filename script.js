function toggleContent(contentId) {
    var content = document.getElementById(contentId);
  
    // 모든 콘텐츠 숨기기
    var contents = document.getElementsByClassName('hide');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
  
    // 선택한 콘텐츠 보이기
    content.style.display = 'block';
}

function toggleContent_2(contentId) {
    var content = document.getElementById(contentId);
  
    // 모든 콘텐츠 숨기기
    var contents = document.getElementsByClassName('hide_2');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
  
    // 선택한 콘텐츠 보이기
    content.style.display = 'block';
}

// 달력 내 일정
var schedule = {
    '2023-03-02':'수강 정정기간 시작',
    '2023-03-08':'수강 정정기간 종료',
    '2023-04-04':'신앙강좌',
    '2023-04-05':'신앙강좌',
    '2023-04-20':'중간고사 시작',
    '2023-04-21':'',
    '2023-04-22':'',
    '2023-04-23':'',
    '2023-04-24':'',
    '2023-04-25':'',
    '2023-04-26':'중간고사 종료',
    '2023-05-01':'근로자의 날',
    '2023-05-05':'어린이날',
    '2023-05-12':'민석축제 및 체육대회',
    '2023-05-27':'부처님 오신날',
    '2023-05-28':'개교기념일',
    '2023-05-29':'대체휴일',
    '2023-06-06':'현충일',
    '2023-06-08':'보강주간 시작',
    '2023-06-09':'',
    '2023-06-10':'',
    '2023-06-11':'',
    '2023-06-12':'',
    '2023-06-13':'',
    '2023-06-14':'보강주간 종료',
    '2023-06-15':'기말고사 시작',
    '2023-06-16':'',
    '2023-06-17':'',
    '2023-06-18':'',
    '2023-06-19':'',
    '2023-06-20':'',
    '2023-06-21':'기말고사 종료 및 종강',
    '2023-06-22':'하계 계절학기 개강',
    '2023-07-03':'부/복수전공 신청 시작',
    '2023-07-04':'',
    '2023-07-05':'',
    '2023-07-06':'',
    '2023-07-07':'부/복수전공 신청 마감',
    '2023-07-10':'전과 신청 시작',
    '2023-07-11':'',
    '2023-07-12':'',
    '2023-07-13':'',
    '2023-07-14':'전과 신청 마감',
    '2023-08-08':'2023-2학기 예비 ',
    '2023-08-09':'수강 신청기간',
    '2023-08-16':'2023-2학기',
    '2023-08-17':'수강신청',
    '2023-08-18':'기간',
    '2023-08-22':'등록금 납부 시작',
    '2023-08-23':'',
    '2023-08-24':'',
    '2023-08-25':'등록금 납부 종료',
    '2023-09-01':'2학기 개강',
    '2023-09-02':'2학기 수강정정 시작',
    '2023-09-03':'',
    '2023-09-04':'',
    '2023-09-05':'',
    '2023-09-06':'',
    '2023-09-07':'2학기 수강정정 종료',
    '2023-09-28':'추석',
    '2023-09-29':'추석',
    '2023-09-30':'추석',
    '2023-10-03':'개천절',
    '2023-10-09':'한글날',
    '2023-10-20':'중간고사 시작',
    '2023-10-21':'',
    '2023-10-22':'',
    '2023-10-23':'',
    '2023-10-24':'',
    '2023-10-25':'',
    '2023-10-26':'중간고사 종료',
    '2023-11-15':'학술엑스포',
    '2023-12-08':'보강주간 시작',
    '2023-12-09':'',
    '2023-12-10':'',
    '2023-12-11':'',
    '2023-12-12':'',
    '2023-12-13':'',
    '2023-12-14':'보강주간 종료',
    '2023-12-15':'기말고사 시작',
    '2023-12-16':'',
    '2023-12-17':'',
    '2023-12-18':'',
    '2023-12-19':'',
    '2023-12-20':'',
    '2023-12-21':'기말고사 종료 및 종강',
    '2023-12-22':'동계 계절학기 개강',
    '2023-12-25':'성탄절',
    '2024-01-01':'새해',
    '2024-01-08':'부/복수전공',
    '2024-01-09':'전과',
    '2024-01-10':'교직',
    '2024-01-11':'신청',
    '2024-01-12':'기간',
    '2024-02-01':'24년 1학기',
    '2024-02-02':'예비수강신청기간',
    '2024-02-09':'',
    '2024-02-10':'설날',
    '2024-02-11':'',
    '2024-02-12':'설날 대체공휴일',
    '2024-02-14':'24년 1학기',
    '2024-02-15':'수강신청',
    '2024-02-16':'기간',
    '2024-02-20':'24년 1학기',
    '2024-02-21':'등록금 납부 및',
    '2024-02-22':'복학 신청',
    '2024-02-23':'기간',
    '2024-02-26':'제 33회 입학식'
}

// 달력 생성 코드

function showCalendar(month, year) {
    var calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";

    var table = document.createElement("table");
    table.classList.add("calendar-table");
    calendarDiv.appendChild(table);

    var daysInMonth = new Date(year, month, 0).getDate();
    var startDay = new Date(year, month - 1, 1).getDay();

    var headerRow = document.createElement("tr");
    table.appendChild(headerRow);

    var weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    for (var i = 0; i < 7; i++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = weekdays[i];
        headerRow.appendChild(headerCell);
    }

    var currentDay = 1;
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        table.appendChild(row);

        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < startDay) {
                var cell = document.createElement("td");
                row.appendChild(cell);
            } else if (currentDay > daysInMonth) {
                break;
            } else {
                var cell = document.createElement("td");
                cell.textContent = currentDay;
                cell.classList.add("schedule-cell");
                row.appendChild(cell);

                var date = year + "-" + month.toString().padStart(2, "0") + "-" + currentDay.toString().padStart(2, "0");
                if (date in schedule) {
                    cell.classList.add("highlight");

                    var scheduleText = schedule[date];
                    var scheduleLines = scheduleText.split("\n");
                    scheduleLines.forEach(function(line) {
                        var lineDiv = document.createElement("div");
                        lineDiv.textContent = line;
                        cell.appendChild(lineDiv);
                    });
                }

                currentDay++;
            }
        }
    }
}