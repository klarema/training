package javaKata1;

public class Fruit {
    protected int calories;
    public Fruit(){

    }
    public void makeJuice(){
        System.out.print("Juice is made");
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public int getCalories() {
        return calories;
    }
}
