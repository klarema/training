package javaKata1;

public class billingApp {
    public static void main(String args[]){
        JavaKata1 sc1 = new JavaKata1(1);
        JavaKata1 sc2 = new JavaKata1(2, 150, 100,200);

        System.out.println(sc1.getID());
        System.out.println(sc2.printBill());
    }
}
