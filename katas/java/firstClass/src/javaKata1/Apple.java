package javaKata1;

public class Apple extends Fruit{
    public Apple(){
        setCalories(50);
    }
    @Override
    public void makeJuice(){
        System.out.print("Apple juice is made. ");
    }
    public void removeSeeds(){
        System.out.println("Seeds have been removed. ");
    }
}
