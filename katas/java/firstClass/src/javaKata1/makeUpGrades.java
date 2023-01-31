package javaKata1;
import java.util.HashMap;
import java.util.Map;
public class makeUpGrades {

        public static Map getOriginalGrades(){

            Map grades = new HashMap();
            grades.put("Angie", 24);
            grades.put("Dave", 32);
            grades.put("Lisi", 80);
            grades.put("Raja", 50);
            grades.put("Shashi", 79);
            grades.put("Bas", 40);
            grades.put("Carlos", 59);
            grades.put("Amber", 55);
            grades.put("Rex", 95);
            grades.put("Jason", 63);
            grades.put("Nikolay", 32);

            return grades;
        }

        public static Map getMakeUpGrades(){

            Map grades = new HashMap();
            grades.put("Angie", 97);
            grades.put("Dave", 82);
            grades.put("Lisi", 76);
            grades.put("Raja", 89);
            grades.put("Shashi", 79);
            grades.put("Bas", 98);
            grades.put("Carlos", 80);
            grades.put("Amber", 95);
            grades.put("Rex", 90);
            grades.put("Jason", 62);
            grades.put("Nikolay", 79);

            return grades;
        }

        public static void main(String[] args){
            Map<String, Integer> test1 = getOriginalGrades();
            Map<String, Integer> test2 = getMakeUpGrades();
            Map finalGrade = new HashMap();

            for(var st : test2.entrySet()){
                Integer origGrade = test1.get(st.getKey());
                Integer makeUpGrade = test2.get(st.getKey());
                if(origGrade < makeUpGrade){
                    finalGrade.put(st.getKey(), makeUpGrade);
                }else finalGrade.put(st.getKey(), origGrade);
            }
            System.out.print(finalGrade);
        }
}
