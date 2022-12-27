package javaKata1;
import java.util.Scanner;

public class JavaKata1 {
    public static void main(String arg[]){
        int totalChange = 0;
        //Enter change per each coin types
        System.out.println(("How many 1c do you have?: "));
        Scanner scanner = new Scanner(System.in);
        int oneCents = scanner.nextInt();
        totalChange = totalChange + oneCents;
        System.out.println((totalChange + ", How many 2c do you have?: "));
        int twoCents = scanner.nextInt();
        totalChange = totalChange + (twoCents * 2);
        System.out.println((totalChange + ", How many 5c do you have?: "));
        int fiveCents = scanner.nextInt();
        totalChange = totalChange + (fiveCents * 5);
        System.out.println((totalChange + ", How many 10c do you have?: "));
        int tenCents = scanner.nextInt();
        totalChange = totalChange + (tenCents * 10);
        System.out.println(totalChange + ", How many 20c do you have?: ");
        int twentyCents = scanner.nextInt();
        totalChange = totalChange + (twentyCents * 20);
        System.out.println((totalChange +", How many 50c do you have?: "));
        int fifyCents = scanner.nextInt();
        totalChange = totalChange + (fifyCents * 50);
        scanner.close();
        // calculate total and compare to 100c, and display message
        if(totalChange > 100)
            System.out.println("You are over by " + (totalChange-100));
        else if(totalChange < 100)
            System.out.println("You are under by " + (100-totalChange));
        else
            System.out.println("You win, your change is: " + totalChange);
    }
}
