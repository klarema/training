package javaKata1;

public class Banana extends Fruit{
    public Banana(){
        setCalories(90);
    }
    @Override
    public void makeJuice(){
        System.out.print("Banana juice is made");
    }
    public void peel(){
        System.out.println("Banana is peeled");
    }

}
