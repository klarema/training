package javaKata1;

public class Market {
    public static void main(String[]args){
        Fruit grapefruit = new Fruit();
        Fruit banana1 = new Banana();
        Banana banana2 = new Banana();
        Fruit apple1 = new Apple();
        Apple apple2 = new Apple();
        System.out.println("banana1:");
        ((Banana)banana1).peel();
        System.out.println("apple1:");
        ((Apple)apple1).removeSeeds();
        System.out.println("apple2:");
        apple2.removeSeeds();

        System.out.println("Processing orders: ");
        orderJuice(apple1);
        orderJuice(apple2);
        orderJuice(banana1);
        orderJuice(banana2);
        orderJuice(grapefruit);
    }
    public static void orderJuice(Fruit anyFruit){
        anyFruit.makeJuice();
        System.out.println("(Calories: "+ anyFruit.getCalories() + ")");
    }
}
