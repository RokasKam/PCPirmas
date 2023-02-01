export const ageCalculator = (birth) => {
    const today = new Date();
    const birthDate = new Date(birth);
    let ageNow = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        ageNow--;
    }
    return ageNow;
}