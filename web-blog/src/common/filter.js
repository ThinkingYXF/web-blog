export default {
  formatDate: function (time, mark, n) {
    if (time == null || time == "") {
      return "";
    } else {
      var date = new Date(parseInt(time));
      var dYear = date.getFullYear();
      var dMonth = date.getMonth() + 1;
      var dDate = date.getDate();
      var dHours = date.getHours();
      var dMinutes = date.getMinutes();
      var dSeconds = date.getSeconds();
      if (dMonth < 10) {
        dMonth = "0" + dMonth;
      }
      if (dDate < 10) {
        dDate = "0" + dDate;
      }
      if (dHours < 10) {
        dHours = "0" + dHours;
      }
      if (dMinutes < 10) {
        dMinutes = "0" + dMinutes;
      }
      if (dSeconds < 10) {
        dSeconds = "0" + dSeconds;
      }
      if (mark) {
        if (n == 3) {
          return dHours + mark + dMinutes + mark + dSeconds;
        } else if (n == 0) {
          return dHours + mark + dMinutes;
        } else if (n == 1) {
          return dYear + mark + dMonth + mark + dDate;
        } else if (n == 2) {
          return (
            dYear + mark + dMonth + mark + dDate + " " + dHours + ":" + dMinutes
          );
        } else {
          return (
            dYear +
            mark +
            dMonth +
            mark +
            dDate +
            " " +
            dHours +
            ":" +
            dMinutes +
            ":" +
            dSeconds
          );
        }
      } else {
        if (n == -1) {
          return dYear;
        } else if (n == 0) {
          return dYear + "-" + dMonth;
        } else if (n == 1) {
          return dYear + "-" + dMonth + "-" + dDate;
        } else if (n == 2) {
          return (
            dYear + "-" + dMonth + "-" + dDate + " " + dHours + ":" + dMinutes
          );
        } else {
          return (
            dYear +
            "-" +
            dMonth +
            "-" +
            dDate +
            " " +
            dHours +
            ":" +
            dMinutes +
            ":" +
            dSeconds
          );
        }
      }
    }
  }
}