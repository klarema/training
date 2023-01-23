package javaKata1;

public class Market {
    public static void main(String[]args){
        Fruit generic = new Fruit();
        Fruit banana1 = new Banana(80);
        Banana banana2 = new Banana(70);
        Fruit apple1 = new Apple();
        Apple apple2 = new Apple();
        System.out.println("banana2:");
        System.out.println(banana2.getCalories());
        banana2.makeJuice();
        System.out.println("banana1:");
        System.out.println(banana1.getCalories());
        banana1.makeJuice();
    }
}
