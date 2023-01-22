package javaKata1;

public class tasteTester {
    public static void main(String args[]){
        Cake testSuper = new Cake("choco");
        BirthdayCake bCake = new BirthdayCake("choco+coffee", 4);
        WeddingCake wCake = new WeddingCake("vanilla", 3);
        testSuper.setPrice(120.00);
        bCake.setPrice(150.00);
        wCake.setPrice(250.00);
        System.out.println("This superCake is flavour: " + testSuper.getFlavour() + " and price " + testSuper.getPrice() + " and of Class: " + testSuper.getClass());
        System.out.println("This birthdaycake is flavour: " + bCake.getFlavour() + " and price " + bCake.getPrice() + " and has candles " + bCake.getCandles()  + " and of Class: " + bCake.getClass());
        System.out.println("This weddingcake is flavour: " + wCake.getFlavour() + " and price " + wCake.getPrice() + " and has tiers " + wCake.getTiers()  + " and of Class: " + wCake.getClass());

    }
}
