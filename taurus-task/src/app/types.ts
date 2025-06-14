type Gender = 'male' | 'female';

interface Student {
  id: string;
  full_name: string;
  gender: Gender;
  birth: string;
  courses: CourseExt[];
}

interface Course {
  id: string;
  name: string;
  profesor_name: string;
}

interface CourseExt extends Course {
  grade: number;
}
