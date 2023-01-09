package javaKata1;

import java.util.Scanner;

public class pwdValidator {
    public static void main(String args[]){
        String[] daysOfWeek = {"monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday" };
        System.out.println("enter a number from 1 - 7");
        Scanner scanner = new Scanner(System.in);
        int daySelected = scanner.nextInt();
        // error handling like InputMismatchexception (enter j)
        if(daySelected > 0 && daySelected < 8){
            System.out.println("you selected: " + daysOfWeek[daySelected-1]);
        }
        else{
            System.out.println("invalid number selected.");
        }
        scanner.close();
    }
}
