package javaKata1;
import java.util.Random;
import java.util.Scanner;

public class JavaKata1 {
    static Scanner scanner = new Scanner(System.in);

    public  static void main(String args[]) {
        double basePlan = getBase();
        int minutesOver = getOverage();
        double overageFee = calculateOverage(minutesOver);
        double taxAdded = calculateTax(overageFee);
        calculateTotal(taxAdded, basePlan, overageFee);

        scanner.close();
    }
    public static double getBase(){
        System.out.println("Enter plan fee: ");
        return scanner.nextDouble();
    }
    public static int getOverage(){
        System.out.println("Enter plan overage in minutes: ");
        return scanner.nextInt();
    }
    public static double calculateOverage(int minutesOver){
        return minutesOver * 0.25;
    }
    public static double calculateTax(double overageFee){
        return overageFee* 0.15;
    }
    public static void calculateTotal(double tax, double basePlan, double overageFee){
        System.out.println("Total including overage fee("+overageFee+") and tax("+tax+
                ") is: " + (String.format("%.2f", tax+overageFee+basePlan))
        );
    }
}
