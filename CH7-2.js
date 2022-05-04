const publicHolidays = {
    holidayDates: ["01/01/2022", "01/05/2022", "08/05/2022", "14/07/2022", "15/08/2022", "01/11/2022", "11/11/2022", "25/12/2022", "26/12/2022"],
    holidayNames: ["Nouvel An", "Fête du Travail", "Fête de la Victoire", "Fête nationale française", "Assomption", "Toussaint", "Armistice", "Noël", "Deuxième jour de Noël"]
}
  
function dateFormat(date) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (date.match(regex) === null) {
        return false;
    }
    const separator = "/";
    const [mm, dd, yyyy] = date.split(separator);
    let newDate = dd + separator + mm + separator + yyyy;
    for (let i = 0; i < publicHolidays.holidayDates.length; i++) {
        if (newDate===publicHolidays.holidayDates[i]) {
            newDate = newDate + " ("+publicHolidays.holidayNames[i]+")";
        }
    }
    return newDate;
}
  
let datetosearch = "12/25/2022";
console.log(dateFormat(datetosearch));
datetosearch = "02/15/2022";
console.log(dateFormat(datetosearch));
datetosearch = "08/15/2022";
console.log(dateFormat(datetosearch));
  