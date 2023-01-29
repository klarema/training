package javaKata1;

public interface Animal {
    void makeSound();
    default void eat(){
        System.out.println("eats ... ");
    }

}
