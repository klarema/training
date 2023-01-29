package javaKata1;

public class Farm {
    public static void main(String[] args){
        Animal percy = new Pig();
        Pig porky = new Pig();
        Animal daffy = new Duck();
        percy.makeSound();
        percy.eat();
        daffy.makeSound();
        daffy.eat();
        porky.makeSound();
        porky.eat();
    }

}
