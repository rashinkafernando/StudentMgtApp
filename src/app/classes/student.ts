export class Student {
    constructor(
        public name: string,
        public age: number | null,
        public gender: string,
        public email: string,
        public contactNo: string,
        public course: string,
        public hobbies: string[] | null
    ){}
}
