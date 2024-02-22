"use strict";

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null); 
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this.attendance.filter(Boolean).length >= 25) {
            console.log("Cannot mark more than 25 attendances.");
            return;
        }
        this.attendance.push(true);
    }

    absent() {
        if (this.attendance.filter(Boolean).length >= 25) {
            console.log("Cannot mark more than 25 attendances.");
            return;
        }
        this.attendance.push(false);
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length;
        
        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}
const student1 = new Student('Egor', 'Abramov' , 2003);

const student2 = new Student('Nikita', 'Verzakov', 2003);
student1.addGrade(100);
student1.addGrade(95);
student1.present();
student1.present();
student1.absent();
student1.absent();
console.log(student1.summary()); 

student2.addGrade(92);
student2.addGrade(88);
student2.present();
student2.present();
student2.present();
console.log(student2.summary()); 
