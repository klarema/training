package javaKata1;

import java.util.Scanner;

public class pwdValidator {
    public static void main(String args[]){
        String userName = "myName";
        String oldPwd = "pa$$word";
        String pwd1 = "PAsswo??";
        String pwd2 = "myNamePass";
        String pwd3 = "pa$$word";
        boolean goodPassword = true;


        if(pwd1.length()< 8){
            goodPassword = false;
        }
        if(pwd1.contains(oldPwd)){
            goodPassword = false;
        }
        if(pwd1.matches("[A-Za-z0-9*]")){
            goodPassword = false;
        }
        if(goodPassword)
            System.out.println("Valid password. ");
            else
            System.out.println("Not Valid password. ");

    }

}
