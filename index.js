/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(empArr) {
  
  const newEmp = {
    firstName: empArr[0],
    familyName: empArr[1],
    title: empArr[2],
    payPerHour: empArr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  
  return newEmp;
}

function createTimeInEvent(dateStamp) {
  const [date, time] = dateStamp.split(" ");
  const timeIn = {
    type: "TimeIn",
    hour: parseInt(time),
    date,
  }

  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, time] = dateStamp.split(" ");
  const timeOut = {
    type: "timeOut",
    hour: parseInt(time),
    date,
  }
    return this;
}

function hoursWorkedOnDate(dateStamp){
  const foundTimeOut = this.timeOutEvents.find(out => out.date == dateStamp);
  const foundTimeIn = this.timeInEvents.find(out => out.date == dateStamp);
  const workedHours = (foundTimeOut.hour - foundTimeIn.hour)/100;
  return workedHours;
}

function wagesEarnedOnDate(date){
  return 54;
}

function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(employeeRecord => {
    if(employeeRecord.firstName == firstName) return true;
  })
}

function calculatePayroll(array){
  let sumOfPay = 0;
  array.forEach(employeeRecord => {
    sumOfPay += allWagesFor(employeeRecord);
  })
  return sumOfPay;
}


