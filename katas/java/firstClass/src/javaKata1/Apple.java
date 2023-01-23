package javaKata1;

public class Apple extends Fruit{
    @Override
    public void makeJuice(){
        System.out.println("Apple juice is made");
    }
    public void removeSeeds(){
        System.out.println("Removed seed");
    }
}
