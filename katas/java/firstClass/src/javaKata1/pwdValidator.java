package javaKata1;

import java.util.Scanner;

public class pwdValidator {
    //public static void main(String args[]){
    private String userName;
    private String oldPwd;
    private static boolean goodPassword;
    private String passwordCreateError = "";
    private static Scanner scanner = new Scanner(System.in);

    //constructor
    public pwdValidator(String userName, String oldPassword) {
        this.userName = userName;
        this.oldPwd = oldPassword;
    }
    public static void main(String[] args) {
        var passwordChecker = loginProcess();
        //printout password rules
        var newPassword = passwordChecker.getNewPassword();
        passwordChecker.changePasswordCheck(newPassword);
        if(passwordChecker.goodPassword)
            System.out.println("Password = OK. ");
        else
            System.out.println("Password = Not accepted. ");
        scanner.close();
    }
    public static pwdValidator loginProcess() {
        System.out.println("Enter username: ");
        String user = scanner.nextLine();
        System.out.println("Enter old password: ");
        String oldPassword = scanner.nextLine();
        return new pwdValidator(user, oldPassword);
    }
    public String getNewPassword() {
        System.out.println("Enter new password. ");
        return scanner.nextLine();
    }
    public void changePasswordCheck(String newPassword){
        goodPassword = true;
        // if pwd is less than 8 char
        if(newPassword.length()<8) {
            goodPassword = false;
            System.out.println("pwd is less than 8 char");
            passwordCreateError += "pwd is less than 8 char";
        }
        //if pwd is same as current password
        if(newPassword.toUpperCase().contains(oldPwd.toUpperCase())) {
            goodPassword = false;
            System.out.println("pwd is same as current password");
        }
        if(newPassword.matches("[A-Za-z0-9]*")) {
            goodPassword = false;
            System.out.println("pwd does not contain a special char");
        }
        if(newPassword.toUpperCase().contains(userName.toUpperCase())) {
            goodPassword = false;
            System.out.println("pwd contains old username");
        }
        if(newPassword.equals(newPassword.toLowerCase())) {
            goodPassword = false;
            System.out.println("pwd does not contain an uppercase letter. ");
        }
    }

}
