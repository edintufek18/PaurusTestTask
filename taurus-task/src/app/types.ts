type Gender = 'male' | 'female';

interface Student {
  id: string; //pobaraj
  full_name: string;
  gender: Gender;
  birth: string; // or Date
  courses: CourseExt[];
}

interface Course {
  id: string;
  name: string;
}

interface CourseExt extends Course {
  grade: number;
}

interface Counter {
  id: string;
}
