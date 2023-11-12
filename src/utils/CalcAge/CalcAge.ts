class CalcAge {
    private currentDay: number = new Date().getDate();
    private currentMonth: number = new Date().getMonth() + 1;
    private currentYear: number = new Date().getFullYear();

    public birthday: number = 1;
    public birthMonth: number = 1;
    public birthYear: number = 1970;
    public age: number = 1;

    public constructor(birthday: number, birthMonth: number, birthYear: number) {
        this.birthday = birthday;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;

        if (this.currentMonth >= this.birthMonth && this.currentDay >= this.birthday) {
            this.age = this.currentYear - this.birthYear;
        } else if (this.currentMonth >= this.birthMonth && this.currentDay <= this.birthday) {
            this.age = this.currentYear - this.birthYear;
        } else {
            this.age = (this.currentYear - this.birthYear) - 1;
        }
    }
}


export default CalcAge;