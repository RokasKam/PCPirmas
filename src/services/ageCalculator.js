export const ageCalculator = (birth) => {
    const today = new Date();
    const birthDate = new Date(birth);
    let ageNow = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let monthsNow = month;
    if(month < 0){
        monthsNow = 12 + month;
    }
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        ageNow--;
    }
    return {ageNow, monthsNow};
}