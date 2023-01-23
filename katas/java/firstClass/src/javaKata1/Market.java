package javaKata1;

public class Market {
    public static void main(String[]args){
        Fruit generic = new Fruit();
        //Fruit banana1 = new Banana();
        Banana banana2 = new Banana(70);
        //Fruit apple1 = new Apple();
        Apple apple2 = new Apple();
        banana2.getCalories();
        banana2.makeJuice();
    }
}
