
class DateController {
  static currentDateISOString() {
    const date = new Date();

    return date.toISOString();
  }

  static dateToISOString(date) {
    if (date instanceof Date) return date.toISOString();

    return null;
  }

  static isoStringToDate(isoString) {
    if (typeof isoString === 'undefined' || isoString === null) {
      return null;
    }

    const date = new Date(isoString);

    return date;
  }
}

export default DateController;
