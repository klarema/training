package javaKata1;

public class Market {
    public static void main(String[]args){
        Fruit generic = new Fruit();
        //Fruit banana1 = new Banana();
        Banana banana2 = new Banana();
        //Fruit apple1 = new Apple();
        Apple apple2 = new Apple();
        System.out.println("banana2 calories: " + banana2.getCalories() + ", juice: " + banana2.makeJuice());
    }
}
