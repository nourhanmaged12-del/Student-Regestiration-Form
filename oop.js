function Student(name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;
    this.getResult=function(){
        if(this.grade>=60){
            return "passed";
        }else{
            return "failed";
        }
    };
}
let s1 =new Student("nourhan",20,85);
let s2 = new Student("ali",30,55);
console.log(s1.name,s1.age,s1.grade,s1.getResult());
console.log(s2.name,s2.age,s2.grade,s2.getResult());
