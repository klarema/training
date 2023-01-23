package javaKata1;

public class Banana extends Fruit{
    private int calories;
    public Banana(int calories){
        this.setCalories(calories);
    }
    @Override
    public void makeJuice(){
        System.out.println("Banana juice is made");
    }

}
